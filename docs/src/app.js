/**
 * MicroPad Configurator — App Controller
 *
 * Click-to-assign UX: click a key on the visual keyboard → picker modal opens →
 * select an action → it's immediately saved. No "Assign" button needed.
 */

import { KEYBOARD_MODELS, createEmptyConfig, parseYAML, toYAML, saveToLocalStorage, loadFromLocalStorage, clearLocalStorage, getSavedSlots, deleteSlot } from './config.js';
import { parseAction, MEDIA_CODES } from './keys.js';
import { PRESETS, applyPreset, getPresetDescription } from './presets.js';
import { logger } from './logger.js';

// DOM helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Application state
const state = {
  currentModel: 'ch57x-2',
  config: null,
  selectedKey: null, // { type: 'button'|'knob', index, knobAction? }
  currentSlot: 'default', // Current localStorage slot name
};

// ─── Init ────────────────────────────────────────────────────────────
function init() {
  // Try to load saved configuration from localStorage (last used slot)
  const saved = loadFromLocalStorage();
  if (saved) {
    state.currentModel = saved.model;
    state.config = saved.config;
    state.currentSlot = saved.slotName || 'default';
    $('#model-select').value = state.currentModel;
    logger.info('APP', `Restored configuration from browser storage slot: ${state.currentSlot}`);
  } else {
    state.config = createEmptyConfig(state.currentModel);
  }

  setupToolbar();
  setupKeyboard();
  setupPicker();
  setupImportExport();
  setupLocalStorageButtons();
  setupPresets();
  renderKeyboard();
  updateKeyCountHint();
  updateSlotSelector();
  logger.info('APP', 'MicroPad Configurator ready');
}

// ─── Toolbar (model) ─────────────────────────────────────────────────
function setupToolbar() {
  $('#model-select').addEventListener('change', (e) => {
    state.currentModel = e.target.value;
    state.config = createEmptyConfig(state.currentModel);
    state.selectedKey = null;

    // Re-apply current preset if one is selected
    const presetSelect = $('#preset-select');
    const currentPreset = presetSelect?.value;
    if (currentPreset) {
      const success = applyPreset(currentPreset, state.currentModel, state.config);
      if (success) {
        showPresetDescription(currentPreset, state.currentModel);
        logger.info('APP', `Re-applied preset: ${currentPreset} for model: ${state.currentModel}`);
      } else {
        hidePresetDescription();
      }
    }

    renderKeyboard();
    updateKeyCountHint();
    autoSave();
    showToast(`Switched to ${KEYBOARD_MODELS[state.currentModel].name}`, 'info');
  });
}

function updateKeyCountHint() {
  const model = KEYBOARD_MODELS[state.currentModel];
  const total = model.rows * model.cols + model.knobs * 3;
  const layer = state.config.layers[0];
  let assigned = 0;
  for (const row of layer.buttons) for (const a of row) if (a) assigned++;
  for (const knob of layer.knobs) {
    if (knob.ccw) assigned++;
    if (knob.press) assigned++;
    if (knob.cw) assigned++;
  }
  $('#key-count-hint').textContent = `${assigned}/${total} keys assigned`;
}

// ─── Visual Keyboard ─────────────────────────────────────────────────
function setupKeyboard() {
  // Delegated click handler on the visual area
  $('#keyboard-visual').addEventListener('click', (e) => {
    const keyBtn = e.target.closest('.key-btn, .knob-action-btn');
    if (!keyBtn) return;

    const type = keyBtn.dataset.type;
    const index = parseInt(keyBtn.dataset.index);

    if (type === 'button') {
      state.selectedKey = { type: 'button', index };
    } else if (type === 'knob') {
      state.selectedKey = { type: 'knob', index, knobAction: keyBtn.dataset.action };
    }

    renderKeyboard();
    openPicker();
  });
}

function renderKeyboard() {
  const container = $('#keyboard-visual');
  const model = KEYBOARD_MODELS[state.currentModel];
  const layer = state.config.layers[0];

  let html = '<div class="keyboard-grid" style="grid-template-columns: repeat(' + model.cols + ', 1fr);">';

  let buttonIdx = 0;
  for (let r = 0; r < model.rows; r++) {
    for (let c = 0; c < model.cols; c++) {
      const action = layer.buttons[r]?.[c];
      const isSelected = state.selectedKey?.type === 'button' && state.selectedKey?.index === buttonIdx;
      const isAssigned = action != null;
      const label = action ? formatActionLabel(action) : '';

      html += `
        <button class="key-btn ${isSelected ? 'selected' : ''} ${isAssigned ? 'assigned' : ''}"
                data-type="button" data-index="${buttonIdx}">
          ${isAssigned ? `<span class="key-label">${label}</span>` : `<span class="key-index">${buttonIdx + 1}</span>`}
        </button>
      `;
      buttonIdx++;
    }
  }
  html += '</div>';

  // Knobs
  if (model.knobs > 0) {
    html += '<div class="knobs-row">';
    for (let k = 0; k < model.knobs; k++) {
      const knob = layer.knobs[k];
      const knobActions = ['ccw', 'press', 'cw'];
      const knobLabels = ['↺ CCW', '⏎ Press', '↻ CW'];

      html += `<div class="knob-group">`;
      html += `<div class="knob-visual" data-type="knob" data-index="${k}">
        <div class="knob-indicator"></div>
        <span class="knob-label">Knob ${k + 1}</span>
      </div>`;
      html += `<div class="knob-actions">`;
      for (let a = 0; a < 3; a++) {
        const actionKey = knobActions[a];
        const action = knob?.[actionKey];
        const isActive = state.selectedKey?.type === 'knob' &&
                         state.selectedKey?.index === k &&
                         state.selectedKey?.knobAction === actionKey;
        const isAssigned = action != null;

        html += `<button class="knob-action-btn ${isActive ? 'selected' : ''} ${isAssigned ? 'assigned' : ''}"
                         data-type="knob" data-index="${k}" data-action="${actionKey}">
          <span class="knob-action-label">${knobLabels[a]}</span>
          ${isAssigned ? `<span class="knob-action-value">${formatActionLabel(action)}</span>` : ''}
        </button>`;
      }
      html += `</div></div>`;
    }
    html += '</div>';
  }

  container.innerHTML = html;
}

function formatActionLabel(action) {
  if (!action) return '';
  
  // Handle macros (comma-separated actions)
  if (action.includes(',')) {
    return action.split(',').map(part => formatActionLabel(part.trim())).join(', ');
  }
  
  // Make it readable: ctrl-c → Ctrl+C, volumeup → Vol Up
  if (MEDIA_CODES[action.toLowerCase()]) {
    const mediaLabels = {
      play: '▶ Play', prev: '⏮ Prev', next: '⏭ Next', stop: '⏹ Stop',
      volumeup: '🔊 Vol+', volumedown: '🔉 Vol−', mute: '🔇 Mute',
      brightnessup: '☀️ Bright+', brightnessdown: '🌅 Bright−',
      calculator: '🧮 Calc', screenlock: '🔒 Lock',
    };
    return mediaLabels[action.toLowerCase()] || action;
  }
  
  // Handle mouse actions
  if (action.startsWith('click') || action.startsWith('move') || 
      action.startsWith('drag') || action.startsWith('wheel')) {
    return action;
  }
  
  // Uppercase modifier combos: ctrl-c → Ctrl+C
  return action.replace(/^(ctrl|shift|alt|win)(-.+)?$/i, (m, mod, rest) => {
    const parts = action.split('-');
    return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('+');
  });
}

// ─── Key Picker Modal ────────────────────────────────────────────────
function setupPicker() {
  // Close on overlay click
  $('#key-picker-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closePicker();
  });
  $('#picker-close').addEventListener('click', closePicker);
  $('#picker-done').addEventListener('click', closePicker);

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#key-picker-overlay').style.display !== 'none') {
      closePicker();
    }
  });

  // Tab switching
  $$('.picker-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.picker-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      $$('.picker-panel').forEach(p => p.style.display = 'none');
      $(`#picker-${tab.dataset.tab}`).style.display = 'block';
    });
  });

  // Keyboard keys — instant assign
  $$('.kb-key').forEach(key => {
    key.addEventListener('click', () => {
      const keyValue = key.dataset.key;
      const mods = getPickerModifiers();
      const actionStr = mods.length > 0 ? `${mods.join('-')}-${keyValue}` : keyValue;
      assignAndClose(actionStr);
    });
  });

  // Media keys — instant assign
  $$('.media-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      assignAndClose(btn.dataset.media);
    });
  });

  // Mouse quick buttons — instant assign
  $$('.mouse-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      assignAndClose(btn.dataset.mouse);
    });
  });

  // Mouse custom move/drag
  $('#pick-mouse-apply').addEventListener('click', () => {
    const type = $('#pick-mouse-type').value;
    const dx = $('#pick-mouse-dx').value;
    const dy = $('#pick-mouse-dy').value;
    assignAndClose(`${type}(${dx},${dy})`);
  });

  // Macro apply
  $('#pick-macro-apply').addEventListener('click', () => {
    const val = $('#pick-macro-input').value.trim();
    if (val) assignAndClose(val);
  });

  // Macro examples
  $$('.macro-example').forEach(btn => {
    btn.addEventListener('click', () => {
      assignAndClose(btn.dataset.macro);
    });
  });

  // Clear button
  $('#picker-clear').addEventListener('click', () => {
    clearCurrentKey();
    closePicker();
  });
}

function getPickerModifiers() {
  const mods = [];
  if ($('#pick-mod-ctrl').checked) mods.push('ctrl');
  if ($('#pick-mod-shift').checked) mods.push('shift');
  if ($('#pick-mod-alt').checked) mods.push('alt');
  if ($('#pick-mod-win').checked) mods.push('win');
  return mods;
}

function openPicker() {
  if (!state.selectedKey) return;

  const overlay = $('#key-picker-overlay');
  const key = state.selectedKey;
  const layer = state.config.layers[0];
  let currentAction = null;
  let keyName = '';

  if (key.type === 'button') {
    const model = KEYBOARD_MODELS[state.currentModel];
    const row = Math.floor(key.index / model.cols);
    const col = key.index % model.cols;
    currentAction = layer.buttons[row]?.[col];
    keyName = `Button ${row + 1},${col + 1}`;
  } else if (key.type === 'knob') {
    const actionLabels = { ccw: 'Counter-Clockwise', press: 'Press', cw: 'Clockwise' };
    currentAction = layer.knobs[key.index]?.[key.knobAction];
    keyName = `Knob ${key.index + 1} — ${actionLabels[key.knobAction]}`;
  }

  $('#picker-key-name').textContent = keyName;
  $('#picker-current').textContent = currentAction ? `Current: ${currentAction}` : 'No action assigned';
  $('#picker-current').className = currentAction ? 'picker-current has-action' : 'picker-current';

  // Reset picker state
  $$('.picker-tab').forEach(t => t.classList.remove('active'));
  $$('.picker-tab')[0].classList.add('active');
  $$('.picker-panel').forEach(p => p.style.display = 'none');
  $('#picker-keyboard').style.display = 'block';

  // Reset modifiers
  $('#pick-mod-ctrl').checked = false;
  $('#pick-mod-shift').checked = false;
  $('#pick-mod-alt').checked = false;
  $('#pick-mod-win').checked = false;

  // Reset macro input
  $('#pick-macro-input').value = '';

  // If current action is a modifier combo, pre-check the modifiers
  if (currentAction) {
    const lower = currentAction.toLowerCase();
    const parts = lower.split('-');
    for (const part of parts) {
      if (part === 'ctrl') $('#pick-mod-ctrl').checked = true;
      else if (part === 'shift') $('#pick-mod-shift').checked = true;
      else if (part === 'alt') $('#pick-mod-alt').checked = true;
      else if (part === 'win') $('#pick-mod-win').checked = true;
    }
  }

  overlay.style.display = 'flex';
}

function closePicker() {
  $('#key-picker-overlay').style.display = 'none';
}

function assignAndClose(actionStr) {
  if (!state.selectedKey) return;

  // Validate
  try {
    parseAction(actionStr);
  } catch (err) {
    showToast(`Invalid action: ${err.message}`, 'error');
    return;
  }

  const key = state.selectedKey;
  const layer = state.config.layers[0];

  if (key.type === 'button') {
    const model = KEYBOARD_MODELS[state.currentModel];
    const row = Math.floor(key.index / model.cols);
    const col = key.index % model.cols;
    layer.buttons[row][col] = actionStr;
  } else if (key.type === 'knob') {
    layer.knobs[key.index][key.knobAction] = actionStr;
  }

  renderKeyboard();
  updateKeyCountHint();
  autoSave();
  closePicker();
  showToast(`Assigned: ${actionStr}`, 'success');
}

function clearCurrentKey() {
  if (!state.selectedKey) return;

  const key = state.selectedKey;
  const layer = state.config.layers[0];

  if (key.type === 'button') {
    const model = KEYBOARD_MODELS[state.currentModel];
    const row = Math.floor(key.index / model.cols);
    const col = key.index % model.cols;
    layer.buttons[row][col] = null;
  } else if (key.type === 'knob') {
    layer.knobs[key.index][key.knobAction] = null;
  }

  renderKeyboard();
  updateKeyCountHint();
  autoSave();
  showToast('Action cleared', 'info');
}

// ─── Import / Export ─────────────────────────────────────────────────
function setupImportExport() {
  $('#btn-export').addEventListener('click', () => {
    const yaml = toYAML(state.config);
    const blob = new Blob([yaml], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `micropad-${state.currentModel}.yaml`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Configuration exported', 'success');
  });

  $('#btn-import').addEventListener('click', () => {
    $('#file-import').click();
  });

  $('#file-import').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const config = parseYAML(event.target.result);
        state.currentModel = config.model || state.currentModel;
        state.config = config;
        $('#model-select').value = state.currentModel;
        state.selectedKey = null;
        renderKeyboard();
        updateKeyCountHint();
        autoSave();
        showToast('Configuration imported', 'success');
      } catch (err) {
        showToast(`Import failed: ${err.message}`, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });
}

// ─── Local Storage ───────────────────────────────────────────────────
function autoSave() {
  saveToLocalStorage(state.currentModel, state.config, state.currentSlot);
}

function updateSlotSelector() {
  const slotSelect = $('#slot-select');
  if (!slotSelect) return;
  
  const slots = getSavedSlots();
  
  // Clear existing options
  slotSelect.innerHTML = '';
  
  // Add options for each saved slot
  if (slots.length === 0) {
    const option = document.createElement('option');
    option.value = 'default';
    option.textContent = 'Default (unsaved)';
    slotSelect.appendChild(option);
  } else {
    slots.forEach(slot => {
      const option = document.createElement('option');
      option.value = slot.name;
      const modelName = KEYBOARD_MODELS[slot.model]?.name || slot.model;
      const date = new Date(slot.timestamp).toLocaleDateString();
      option.textContent = `${slot.name} (${modelName}) - ${date}`;
      if (slot.isLastUsed) option.selected = true;
      slotSelect.appendChild(option);
    });
  }
  
  // Add "New Slot" option
  const newOption = document.createElement('option');
  newOption.value = '__new__';
  newOption.textContent = '+ Create New Slot...';
  slotSelect.appendChild(newOption);
}

function setupLocalStorageButtons() {
  const btnSave = $('#btn-save');
  const btnLoad = $('#btn-load');
  const btnClear = $('#btn-clear-storage');
  const slotSelect = $('#slot-select');
  const btnDeleteSlot = $('#btn-delete-slot');

  // Slot selector change handler
  if (slotSelect) {
    slotSelect.addEventListener('change', (e) => {
      if (e.target.value === '__new__') {
        // Prompt for new slot name
        const slotName = prompt('Enter a name for this configuration slot:');
        if (slotName && slotName.trim()) {
          state.currentSlot = slotName.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-');
          autoSave();
          updateSlotSelector();
          showToast(`Created new slot: ${state.currentSlot}`, 'success');
        } else {
          // Reset to previous selection
          updateSlotSelector();
        }
      } else {
        // Load selected slot
        state.currentSlot = e.target.value;
        const saved = loadFromLocalStorage(state.currentSlot);
        if (saved) {
          state.currentModel = saved.model;
          state.config = saved.config;
          $('#model-select').value = state.currentModel;
          state.selectedKey = null;
          renderKeyboard();
          updateKeyCountHint();
          showToast(`Loaded slot: ${state.currentSlot}`, 'success');
        }
      }
    });
  }

  // Delete slot button
  if (btnDeleteSlot) {
    btnDeleteSlot.addEventListener('click', () => {
      if (state.currentSlot === 'default') {
        showToast('Cannot delete the default slot', 'error');
        return;
      }
      if (confirm(`Delete slot "${state.currentSlot}"? This cannot be undone.`)) {
        deleteSlot(state.currentSlot);
        state.currentSlot = 'default';
        state.config = createEmptyConfig(state.currentModel);
        state.selectedKey = null;
        renderKeyboard();
        updateKeyCountHint();
        updateSlotSelector();
        showToast('Slot deleted', 'info');
      }
    });
  }

  if (btnSave) {
    btnSave.addEventListener('click', () => {
      autoSave();
      updateSlotSelector();
      showToast(`Saved to slot: ${state.currentSlot}`, 'success');
    });
  }

  if (btnLoad) {
    btnLoad.addEventListener('click', () => {
      const saved = loadFromLocalStorage(state.currentSlot);
      if (saved) {
        state.currentModel = saved.model;
        state.config = saved.config;
        $('#model-select').value = state.currentModel;
        state.selectedKey = null;
        renderKeyboard();
        updateKeyCountHint();
        showToast(`Loaded from slot: ${state.currentSlot}`, 'success');
      } else {
        showToast('No saved configuration found in this slot', 'info');
      }
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (confirm('Clear ALL saved configurations from browser storage? This cannot be undone.')) {
        clearLocalStorage();
        state.currentSlot = 'default';
        state.config = createEmptyConfig(state.currentModel);
        state.selectedKey = null;
        renderKeyboard();
        updateKeyCountHint();
        updateSlotSelector();
        showToast('All browser storage cleared', 'info');
      }
    });
  }
}

// ─── Presets ─────────────────────────────────────────────────────────
function setupPresets() {
  const presetSelect = $('#preset-select');
  if (!presetSelect) return;

  presetSelect.addEventListener('change', (e) => {
    const presetId = e.target.value;
    if (!presetId) {
      // Hide description when preset is cleared
      hidePresetDescription();
      return;
    }

    // Apply the preset to the current config
    const success = applyPreset(presetId, state.currentModel, state.config);
    if (success) {
      state.selectedKey = null;
      renderKeyboard();
      updateKeyCountHint();
      autoSave();
      showPresetDescription(presetId, state.currentModel);
      showToast(`Applied "${PRESETS[presetId].name}" preset`, 'success');
      logger.info('APP', `Applied preset: ${presetId} for model: ${state.currentModel}`);
    } else {
      showToast(`No preset available for this model`, 'error');
      presetSelect.value = '';
    }
  });
}

function showPresetDescription(presetId, modelId) {
  const info = getPresetDescription(presetId, modelId);
  if (!info) return;

  const container = $('#preset-description');
  if (!container) return;

  let html = '';

  // Header
  html += `<div class="preset-desc-header">`;
  html += `<span class="preset-desc-icon">${info.icon}</span>`;
  html += `<div class="preset-desc-title-group">`;
  html += `<h3 class="preset-desc-title">${info.name} Preset Applied</h3>`;
  html += `<p class="preset-desc-tagline">${info.tagline}</p>`;
  html += `</div>`;
  html += `<button class="preset-desc-close" id="preset-desc-close" title="Close">&times;</button>`;
  html += `</div>`;

  // Description
  html += `<p class="preset-desc-text">${info.description}</p>`;

  // Key descriptions
  if (info.keyDescriptions) {
    html += `<div class="preset-desc-keys">`;
    html += `<h4>⚙️ Configuration</h4>`;
    html += `<ul>`;
    for (const [key, desc] of Object.entries(info.keyDescriptions)) {
      html += `<li><strong>${key}:</strong> ${desc}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
  }

  // Recommended apps
  if (info.apps && info.apps.length > 0) {
    html += `<div class="preset-desc-apps">`;
    html += `<h4>📱 Recommended Apps</h4>`;
    html += `<div class="preset-app-tags">`;
    for (const app of info.apps) {
      html += `<span class="preset-app-tag">${app}</span>`;
    }
    html += `</div>`;
    html += `</div>`;
  }

  container.innerHTML = html;
  container.style.display = 'block';

  // Wire up close button
  const closeBtn = container.querySelector('#preset-desc-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hidePresetDescription();
    });
  }
}

function hidePresetDescription() {
  const container = $('#preset-description');
  if (container) {
    container.style.display = 'none';
    container.innerHTML = '';
  }
}

// ─── Toast Notifications ─────────────────────────────────────────────
function showToast(message, type = 'info') {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  // Auto-remove
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ─── Start ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);

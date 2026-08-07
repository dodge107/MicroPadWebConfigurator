/**
 * Configuration Manager
 *
 * Handles loading, saving, and managing keyboard configurations.
 * Supports YAML import/export compatible with ch57x-keyboard-tool.
 */

import { logger } from './logger.js';

const LOG_CAT = 'CONFIG';

/**
 * Keyboard model definitions
 *
 * The 'nativeModel' field maps to the model name expected by
 * the ch57x-keyboard-tool Rust utility (different from web app IDs).
 */
export const KEYBOARD_MODELS = {
  'ch57x-1': {
    name: '3×4 with 2 knobs (BT)',
    layout: '3x4-2knobs',
    rows: 3, cols: 4, knobs: 2,
    nativeModel: 'ch57x-2',
  },
  'ch57x-2': {
    name: '3×3 with 2 knobs',
    layout: '3x3-2knobs',
    rows: 3, cols: 3, knobs: 2,
    nativeModel: 'ch57x-2',
  },
  'ch57x-3': {
    name: '3×2 with 1 knob',
    layout: '3x2-1knob',
    rows: 3, cols: 2, knobs: 1,
    nativeModel: 'ch57x-2',
  },
  'ch57x-4': {
    name: '3×1 with 1 knob',
    layout: '3x1-1knob',
    rows: 3, cols: 1, knobs: 1,
    nativeModel: 'ch57x-2',
  },
  'ch57x-5': {
    name: '4×1 no knobs',
    layout: '4x1',
    rows: 4, cols: 1, knobs: 0,
    nativeModel: 'ch57x-2',
  },
  'ch57x-4x4': {
    name: '4×4 with 2 knobs',
    layout: '4x4',
    rows: 4, cols: 4, knobs: 2,
    nativeModel: 'ch57x-2',
  },
};

/**
 * Create an empty configuration for a model
 */
export function createEmptyConfig(modelId) {
  const model = KEYBOARD_MODELS[modelId];
  if (!model) throw new Error(`Unknown model: ${modelId}`);

  const buttons = [];
  for (let r = 0; r < model.rows; r++) {
    const row = [];
    for (let c = 0; c < model.cols; c++) {
      row.push(null);
    }
    buttons.push(row);
  }
  const knobs = [];
  for (let k = 0; k < model.knobs; k++) {
    knobs.push({ ccw: null, press: null, cw: null });
  }

  return { model: modelId, orientation: 'normal', layers: [{ buttons, knobs }] };
}

/**
 * Reverse mapping: native model name → web app model ID
 */
const NATIVE_TO_WEB_MODEL = {};
for (const [webId, def] of Object.entries(KEYBOARD_MODELS)) {
  if (def.nativeModel && !NATIVE_TO_WEB_MODEL[def.nativeModel]) {
    NATIVE_TO_WEB_MODEL[def.nativeModel] = webId;
  }
}

function nativeToWebModel(nativeModel) {
  if (KEYBOARD_MODELS[nativeModel]) return nativeModel;
  return NATIVE_TO_WEB_MODEL[nativeModel] || nativeModel;
}

/**
 * Parse a YAML configuration string into a config object
 */
export function parseYAML(yamlStr) {
  const lines = yamlStr.split('\n');
  const config = { model: 'ch57x-1', orientation: 'normal', layers: [] };

  let currentLayer = null;
  let currentSection = null;
  let currentKnob = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    if (line.startsWith('model:')) {
      config.model = nativeToWebModel(trimmed.split(':')[1].trim());
      continue;
    }
    if (line.startsWith('orientation:')) {
      config.orientation = trimmed.split(':')[1].trim();
      continue;
    }
    if (line.startsWith('rows:') || line.startsWith('columns:')) continue;
    if (line.startsWith('knobs:') && !currentLayer) continue;
    if (trimmed === 'layers:') continue;

    if (trimmed === '- buttons:' || trimmed.match(/^- buttons:/)) {
      currentLayer = { buttons: [], knobs: [] };
      config.layers.push(currentLayer);
      currentSection = 'buttons';
      continue;
    }

    if (currentSection === 'buttons' && trimmed.startsWith('- [')) {
      const rowStr = trimmed.substring(2).trim();
      const items = parseArrayItems(rowStr);
      if (currentLayer) {
        currentLayer.buttons.push(items.map(item => item || null));
      }
      continue;
    }

    if (trimmed === 'knobs:') { currentSection = 'knobs'; continue; }

    if (currentSection === 'knobs' && trimmed.startsWith('- ccw:')) {
      currentKnob = { ccw: null, press: null, cw: null };
      if (currentLayer) currentLayer.knobs.push(currentKnob);
      const m = trimmed.match(/ccw:\s*"([^"]+)"/);
      if (m) currentKnob.ccw = m[1];
      continue;
    }
    if (currentKnob && trimmed.startsWith('press:')) {
      const m = trimmed.match(/press:\s*"([^"]+)"/);
      if (m) currentKnob.press = m[1];
      continue;
    }
    if (currentKnob && trimmed.startsWith('cw:')) {
      const m = trimmed.match(/cw:\s*"([^"]+)"/);
      if (m) currentKnob.cw = m[1];
      continue;
    }
  }

  return config;
}

function parseArrayItems(str) {
  const inner = str.replace(/^\[/, '').replace(/\]$/, '').trim();
  if (!inner) return [];
  const items = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (ch === '"') inQuotes = !inQuotes;
    else if (ch === ',' && !inQuotes) {
      items.push(current.trim().replace(/^"|"$/g, ''));
      current = '';
    } else current += ch;
  }
  if (current.trim()) items.push(current.trim().replace(/^"|"$/g, ''));
  return items;
}

/**
 * Generate YAML string from config
 */
export function toYAML(config) {
  const model = KEYBOARD_MODELS[config.model];
  const nativeModelName = model?.nativeModel || config.model;
  let yaml = `model: ${nativeModelName}\n`;
  yaml += `orientation: ${config.orientation}\n`;
  if (model) {
    yaml += `rows: ${model.rows}\n`;
    yaml += `columns: ${model.cols}\n`;
    yaml += `knobs: ${model.knobs}\n`;
  }
  yaml += `\nlayers:\n`;

  for (const layer of config.layers) {
    yaml += `  - buttons:\n`;
    for (const row of layer.buttons) {
      const items = row.map(item => item ? `"${item}"` : 'null');
      yaml += `      - [${items.join(', ')}]\n`;
    }
    if (layer.knobs.length > 0) {
      yaml += `    knobs:\n`;
      for (const knob of layer.knobs) {
        yaml += `      - ccw: ${knob.ccw ? `"${knob.ccw}"` : 'null'}\n`;
        yaml += `        press: ${knob.press ? `"${knob.press}"` : 'null'}\n`;
        yaml += `        cw: ${knob.cw ? `"${knob.cw}"` : 'null'}\n`;
      }
    }
  }
  return yaml;
}

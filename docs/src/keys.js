/**
 * HID Keyboard Usage Codes (USB HID Usage Tables)
 * Based on USB HID Usage Tables Version 1.5
 */

export const KEY_CODES = {
  // Letters
  'a': 0x04, 'b': 0x05, 'c': 0x06, 'd': 0x07, 'e': 0x08, 'f': 0x09,
  'g': 0x0A, 'h': 0x0B, 'i': 0x0C, 'j': 0x0D, 'k': 0x0E, 'l': 0x0F,
  'm': 0x10, 'n': 0x11, 'o': 0x12, 'p': 0x13, 'q': 0x14, 'r': 0x15,
  's': 0x16, 't': 0x17, 'u': 0x18, 'v': 0x19, 'w': 0x1A, 'x': 0x1B,
  'y': 0x1C, 'z': 0x1D,

  // Numbers
  '1': 0x1E, '2': 0x1F, '3': 0x20, '4': 0x21, '5': 0x22,
  '6': 0x23, '7': 0x24, '8': 0x25, '9': 0x26, '0': 0x27,

  // Control keys
  'enter': 0x28, 'return': 0x28, 'escape': 0x29, 'esc': 0x29,
  'backspace': 0x2A, 'tab': 0x2B, 'space': 0x2C,
  'capslock': 0x39,

  // Punctuation (symbol and named aliases for Rust tool compatibility)
  '-': 0x2D, 'minus': 0x2D,
  '=': 0x2E, 'equal': 0x2E,
  '[': 0x2F, 'leftbracket': 0x2F,
  ']': 0x30, 'rightbracket': 0x30,
  '\\': 0x31, 'backslash': 0x31,
  ';': 0x33, 'semicolon': 0x33,
  "'": 0x34, 'quote': 0x34,
  '`': 0x35, 'grave': 0x35,
  ',': 0x36, 'comma': 0x36,
  '.': 0x37, 'dot': 0x37,
  '/': 0x38, 'slash': 0x38,
  'nonushash': 0x32,
  'nonusbackslash': 0x64,

  // Function keys
  'f1': 0x3A, 'f2': 0x3B, 'f3': 0x3C, 'f4': 0x3D,
  'f5': 0x3E, 'f6': 0x3F, 'f7': 0x40, 'f8': 0x41,
  'f9': 0x42, 'f10': 0x43, 'f11': 0x44, 'f12': 0x45,
  'f13': 0x68, 'f14': 0x69, 'f15': 0x6A, 'f16': 0x6B,
  'f17': 0x6C, 'f18': 0x6D, 'f19': 0x6E, 'f20': 0x6F,
  'f21': 0x70, 'f22': 0x71, 'f23': 0x72, 'f24': 0x73,

  // Navigation
  'printscreen': 0x46, 'scrolllock': 0x47, 'pause': 0x48,
  'insert': 0x49, 'home': 0x4A, 'pageup': 0x4B,
  'delete': 0x4C, 'end': 0x4D, 'pagedown': 0x4E,
  'right': 0x4F, 'left': 0x50, 'down': 0x51, 'up': 0x52,

  // Numpad (kp prefix and numpad prefix for Rust tool compatibility)
  'numlock': 0x53,
  'kp/': 0x54, 'numpadslash': 0x54,
  'kp*': 0x55, 'numpadasterisk': 0x55,
  'kp-': 0x56, 'numpadminus': 0x56,
  'kp+': 0x57, 'numpadplus': 0x57,
  'kpenter': 0x58, 'numpadenter': 0x58,
  'kp1': 0x59, 'numpad1': 0x59,
  'kp2': 0x5A, 'numpad2': 0x5A,
  'kp3': 0x5B, 'numpad3': 0x5B,
  'kp4': 0x5C, 'numpad4': 0x5C,
  'kp5': 0x5D, 'numpad5': 0x5D,
  'kp6': 0x5E, 'numpad6': 0x5E,
  'kp7': 0x5F, 'numpad7': 0x5F,
  'kp8': 0x60, 'numpad8': 0x60,
  'kp9': 0x61, 'numpad9': 0x61,
  'kp0': 0x62, 'numpad0': 0x62,
  'kp.': 0x63, 'numpaddot': 0x63,
  'numpadequal': 0x67,

  // Misc
  'compose': 0x65, 'application': 0x65,
  'power': 0x66,
  'mute': 0x7F, 'volumeup': 0x80, 'volumedown': 0x81,
};

// Modifier bitmasks
export const MODIFIERS = {
  'ctrl': 0x01,
  'control': 0x01,
  'shift': 0x02,
  'alt': 0x04,
  'opt': 0x04,
  'option': 0x04,
  'win': 0x08,
  'cmd': 0x08,
  'command': 0x08,
  'meta': 0x08,
  'rctrl': 0x10,
  'rshift': 0x20,
  'ralt': 0x40,
  'rwin': 0x80,
};

// Media/consumer codes (usage page 0x0C)
export const MEDIA_CODES = {
  'play': 0xCD,
  'playpause': 0xCD,
  'prev': 0xB6,
  'previous': 0xB6,
  'next': 0xB5,
  'stop': 0xB7,
  'brightnessup': 0x6F,
  'macbrightnessup': 0x6F,
  'brightnessdown': 0x70,
  'macbrightnessdown': 0x70,
  'calculator': 0x92,
  'screenlock': 0x19E,
  'favorites': 0x1B4,
  'webpagehome': 0x223,
  'email': 0x18A,
  'search': 0x221,
  'mycomputer': 0x194,
};

// Mouse button codes
export const MOUSE_BUTTONS = {
  'left': 0x01,
  'right': 0x02,
  'middle': 0x04,
};

// Action type constants (matches protocol)
export const ACTION_TYPES = {
  KEYBOARD: 0x01,
  MEDIA: 0x02,
  MOUSE: 0x03,
};

/**
 * Parse a key action string into { modifiers, code, type }
 * Examples: "a", "ctrl-a", "alt-shift-delete", "play", "click", "move(10,5)"
 * Also handles macros: "ctrl-a,ctrl-c" (comma-separated actions)
 */
export function parseAction(actionStr) {
  if (!actionStr || actionStr.trim() === '') return null;

  const str = actionStr.trim().toLowerCase();

  // Check for macro (comma-separated actions)
  if (str.includes(',')) {
    return parseMacro(str);
  }

  // Check for mouse actions
  if (str.startsWith('click') || str.startsWith('move') || 
      str.startsWith('drag') || str.startsWith('wheel')) {
    return parseMouseAction(str);
  }

  // Check for media keys
  if (MEDIA_CODES[str]) {
    return { type: ACTION_TYPES.MEDIA, code: MEDIA_CODES[str], modifiers: 0 };
  }

  // Parse keyboard action with modifiers
  const parts = str.split('-');
  let modifiers = 0;
  let keyCode = null;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (MODIFIERS[part] !== undefined) {
      modifiers |= MODIFIERS[part];
    } else {
      // This should be the key
      const remaining = parts.slice(i).join('-');
      keyCode = KEY_CODES[remaining];
      if (keyCode === undefined) {
        // Try as custom code
        const customMatch = remaining.match(/^<(\d+)>$/);
        if (customMatch) {
          keyCode = parseInt(customMatch[1]);
        } else {
          throw new Error(`Unknown key: ${remaining}`);
        }
      }
      break;
    }
  }

  if (keyCode === null) {
    throw new Error(`No key specified in: ${actionStr}`);
  }

  return { type: ACTION_TYPES.KEYBOARD, code: keyCode, modifiers };
}

/**
 * Parse a macro string (comma-separated actions)
 * Examples: "ctrl-a,ctrl-c", "alt-tab,enter"
 */
function parseMacro(str) {
  const actions = str.split(',').map(s => s.trim()).filter(s => s);
  if (actions.length === 0) {
    throw new Error('Empty macro');
  }
  
  // Parse each action in the macro
  const parsedActions = actions.map(action => {
    // Recursively parse each action (but prevent infinite recursion for nested macros)
    if (action.includes(',')) {
      throw new Error('Nested macros not supported');
    }
    
    // Check for mouse actions
    if (action.startsWith('click') || action.startsWith('move') || 
        action.startsWith('drag') || action.startsWith('wheel')) {
      return parseMouseAction(action);
    }
    
    // Check for media keys
    if (MEDIA_CODES[action]) {
      return { type: ACTION_TYPES.MEDIA, code: MEDIA_CODES[action], modifiers: 0 };
    }
    
    // Parse keyboard action with modifiers
    const parts = action.split('-');
    let modifiers = 0;
    let keyCode = null;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (MODIFIERS[part] !== undefined) {
        modifiers |= MODIFIERS[part];
      } else {
        const remaining = parts.slice(i).join('-');
        keyCode = KEY_CODES[remaining];
        if (keyCode === undefined) {
          const customMatch = remaining.match(/^<(\d+)>$/);
          if (customMatch) {
            keyCode = parseInt(customMatch[1]);
          } else {
            throw new Error(`Unknown key in macro: ${remaining}`);
          }
        }
        break;
      }
    }

    if (keyCode === null) {
      throw new Error(`No key specified in macro action: ${action}`);
    }

    return { type: ACTION_TYPES.KEYBOARD, code: keyCode, modifiers };
  });
  
  // Return as a macro type with array of actions
  return { type: 'macro', actions: parsedActions };
}

/**
 * Parse mouse action string
 * Examples: "click", "click(middle)", "move(10,5)", "drag(left,10,5)", "wheel(3)"
 */
function parseMouseAction(str) {
  // Extract modifiers before the action
  let modifiers = 0;
  let actionPart = str;

  // Check for modifier prefix like "ctrl-click"
  const modMatch = str.match(/^(ctrl|shift|alt|opt|win|cmd)-(.+)$/);
  if (modMatch && !str.startsWith('click') && !str.startsWith('move') && 
      !str.startsWith('drag') && !str.startsWith('wheel')) {
    modifiers = MODIFIERS[modMatch[1]] || 0;
    actionPart = modMatch[2];
  }

  if (actionPart.startsWith('click')) {
    const paramMatch = actionPart.match(/click\((\w+)\)/);
    const button = paramMatch ? (MOUSE_BUTTONS[paramMatch[1]] || 0x01) : 0x01;
    return { type: ACTION_TYPES.MOUSE, subtype: 'click', buttons: button, modifiers, dx: 0, dy: 0, delta: 0 };
  }

  if (actionPart.startsWith('move')) {
    const paramMatch = actionPart.match(/move\((\d+),(\d+)\)/);
    if (!paramMatch) throw new Error(`Invalid move syntax: ${str}`);
    return { type: ACTION_TYPES.MOUSE, subtype: 'move', buttons: 0, modifiers, 
             dx: parseInt(paramMatch[1]), dy: parseInt(paramMatch[2]), delta: 0 };
  }

  if (actionPart.startsWith('drag')) {
    const paramMatch = actionPart.match(/drag\((\w+),(\d+),(\d+)\)/);
    if (!paramMatch) throw new Error(`Invalid drag syntax: ${str}`);
    const button = MOUSE_BUTTONS[paramMatch[1]] || 0x01;
    return { type: ACTION_TYPES.MOUSE, subtype: 'drag', buttons: button, modifiers,
             dx: parseInt(paramMatch[2]), dy: parseInt(paramMatch[3]), delta: 0 };
  }

  if (actionPart.startsWith('wheel')) {
    const paramMatch = actionPart.match(/wheel\((\d+)\)/);
    const delta = paramMatch ? parseInt(paramMatch[1]) : 1;
    return { type: ACTION_TYPES.MOUSE, subtype: 'wheel', buttons: 0, modifiers, dx: 0, dy: 0, delta };
  }

  // Simple wheel directions
  if (actionPart === 'wheelup') {
    return { type: ACTION_TYPES.MOUSE, subtype: 'wheel', buttons: 0, modifiers, dx: 0, dy: 0, delta: 1 };
  }
  if (actionPart === 'wheeldown') {
    return { type: ACTION_TYPES.MOUSE, subtype: 'wheel', buttons: 0, modifiers, dx: 0, dy: 0, delta: -1 };
  }

  throw new Error(`Unknown mouse action: ${str}`);
}

/**
 * Get display name for a key code
 */
export function getKeyName(code) {
  for (const [name, c] of Object.entries(KEY_CODES)) {
    if (c === code) return name.toUpperCase();
  }
  return `0x${code.toString(16).toUpperCase()}`;
}

/**
 * Get display name for modifiers
 */
export function getModifierNames(modifiers) {
  const names = [];
  if (modifiers & 0x01) names.push('Ctrl');
  if (modifiers & 0x02) names.push('Shift');
  if (modifiers & 0x04) names.push('Alt');
  if (modifiers & 0x08) names.push('Win');
  return names.join('+');
}

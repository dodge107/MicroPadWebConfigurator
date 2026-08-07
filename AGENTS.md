# AI Agent Instructions

## Project Overview

Browser-based **visual configuration designer** for CH57x-based macro keyboards. The web app provides a visual UI for designing key layouts, assigning actions, and exporting YAML configurations. Configurations are uploaded to the device using the native `ch57x-keyboard-tool` (Rust CLI) via the `upload.sh` script.

No build step required — vanilla JavaScript with ES modules.

## Quick Start

```bash
# Start development server
npm start

# Or use any static server
npx serve .
python3 -m http.server 8080
```

Open in any modern browser.

## Architecture

```
src/
├── app.js          # UI controller, state management, click-to-assign flow
├── keys.js         # HID usage codes, action parser, media codes
├── config.js       # Config management, YAML import/export, model definitions
── logger.js       # Simple structured logger with categories
```

**Data Flow**:
```
User clicks key → Picker modal opens → Select action → Immediately assigned
                                                    ↓
                                          renderKeyboard() updates UI
                                                    ↓
                                          Export YAML → upload.sh → Device
```

**UX**: Click-to-assign — no "Assign" button needed. Click a key on the visual keyboard, the picker modal opens, select an action and it's immediately saved.

## Upload Workflow

The `upload.sh` script handles uploading YAML configurations to the device:

```bash
./upload.sh config.yaml
```

The script:
1. Sources Rust environment (`$HOME/.cargo/env`)
2. Validates the YAML file exists and is readable
3. Runs `ch57x-keyboard-tool upload <file>` to write config via raw USB

**Prerequisites**: Rust toolchain and `ch57x-keyboard-tool` must be installed.

## ⚠️ Critical: Model Name Mapping

The web app and native Rust tool use **different model names** for the same hardware. Each model in `KEYBOARD_MODELS` has a `nativeModel` field for YAML export compatibility.

All non-Bluetooth devices use `ch57x-2` as the native model name (confirmed by hardware testing).

| PID | Web App Model | Native Tool Model | Description |
|-----|---------------|-------------------|-------------|
| 0x8890 | `ch57x-1` | `ch57x-2` | 3×4 with 2 knobs (BT) |
| 0x8840 | `ch57x-2` | `ch57x-2` | 3×3 with 2 knobs |
| 0x8840 | `ch57x-3` | `ch57x-2` | 3×2 with 1 knob |
| 0x8840 | `ch57x-4` | `ch57x-2` | 3×1 with 1 knob |
| 0x8840 | `ch57x-5` | `ch57x-2` | 4×1 no knobs |
| 0x8890 | `ch57x-4x4` | `ch57x-2` | 4×4 with 2 knobs |

**When exporting YAML**, `config.js` maps the web model ID to the native model name via the `nativeModel` field.

## Code Conventions

### Code Style
- **ES Modules**: Use `import`/`export`, no CommonJS
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `KEY_CODES`, `MEDIA_CODES`)
- **Functions**: `camelCase` (e.g., `parseAction`, `createEmptyConfig`)
- **DOM queries**: Use `$()` and `$$()` helpers defined in `app.js`

### State Management
- Central `state` object in `app.js` holds all application state
- State changes trigger `renderKeyboard()` and `updateKeyCountHint()`
- No global mutations outside of state object

### Logging
- Use `logger.js` for all logging — never use raw `console.log` in business logic
- Logger supports categories: `logger.info('CONFIG', 'message')`, `logger.debug('APP', 'data')`
- Log levels: `error`, `warn`, `info`, `debug`

### Error Handling
- Wrap async operations in `try/catch`
- Show user feedback via `showToast(message, type)` where type is `'success'`, `'error'`, or `'info'`
- Validate inputs before critical operations (e.g., `parseAction()` before saving)
- Log errors with `logger.error(category, message, error)`

## Configuration Structure

```javascript
{
  model: 'ch57x-4',  // Web app model ID (see KEYBOARD_MODELS)
  layers: [
    {
      buttons: [
        ['ctrl-c', 'ctrl-v', null, ...],  // 2D array: rows × cols, null = unassigned
        [...]
      ],
      knobs: [
        { ccw: 'vol_down', press: 'mute', cw: 'vol_up' }
      ]
    }
    // ... up to 4 layers
  ]
}
```

**Important**: Unassigned keys use `null` (not empty string `""`) in YAML export.

**Button Index**: `row * cols + col`  
**Knob Index**: `BUTTON_COUNT + knobNumber * 3 + actionIndex` (actionIndex: 0=ccw, 1=press, 2=cw)

## Common Tasks

### Adding a New Keyboard Model
1. Add model definition to `KEYBOARD_MODELS` in `config.js` (include `nativeModel` field)
2. Update model selector in `index.html`
3. Ensure `nativeModel` maps to the correct Rust tool model name

### Adding a New Action Type
1. Add action type constant to `ACTION_TYPES` in `keys.js`
2. Add parsing logic in `parseAction()` in `keys.js`
3. Add UI controls in the picker modal (`index.html`) and handlers in `app.js`

## Potential Pitfalls

1. **Model name mismatch**: Web app and Rust tool use different model names. Always use the `nativeModel` field when exporting YAML.
2. **No read-back**: Cannot read current config from device (hardware limitation). The web app works with exported/imported YAML files, not live device state.
3. **Unassigned keys**: Use `null` (not empty string `""`) in YAML export for unassigned keys.

## Testing

No automated tests. Manual testing workflow:
1. Start server: `npm start`
2. Open in any browser: `http://localhost:8080`
3. Test key assignment (click key → picker → select action → auto-assigned)
4. Test layer switching, model switching, knob configuration
5. Export YAML and verify format (null for unassigned keys)
6. Upload via `./upload.sh config.yaml` and verify on device

## Related Documentation

- [README.md](./README.md) — User documentation, feature list, supported devices
- [ch57x-keyboard-tool](https://github.com/kriomant/ch57x-keyboard-tool) — Native Rust tool for device upload (protocol reference)

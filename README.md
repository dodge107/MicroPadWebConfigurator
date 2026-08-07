# MicroPad Web Configurator

Browser-based visual configuration designer for CH57x-based macro keyboards. Design key layouts, assign actions, and export YAML configurations — all from your browser.

**[Open Web App](https://yourusername.github.io/micropad/)**

## Features

- **Click-to-assign** — click a key, pick an action from the modal, done. No "Assign" button needed.
- **Visual keyboard picker** — full QWERTY layout with modifier toggles (Ctrl/Shift/Alt/Win) for combos
- **Media & mouse actions** — volume, playback, brightness, clicks, scrolling, custom movement
- **Macro support** — multi-key sequences with quick-apply examples
- **Knob support** — assign CCW, press, and CW actions to rotary encoders
- **YAML export/import** — compatible with `ch57x-keyboard-tool` (Rust CLI)
- **LED control** — interactive LED setup via the upload script
- **No build step** — vanilla JavaScript, runs in any browser

## Supported Devices

| Model | Layout | Description |
|-------|--------|-------------|
| `ch57x-1` | 3×4 + 2 knobs | Bluetooth model |
| `ch57x-2` | 3×3 + 2 knobs | Wired |
| `ch57x-3` | 3×2 + 1 knob | Wired |
| `ch57x-4` | 3×1 + 1 knob | Wired |
| `ch57x-5` | 4×1 | Wired, no knobs |
| `ch57x-4x4` | 4×4 + 2 knobs | Wired |

All devices use `ch57x-2` as the native model name in exported YAML (confirmed by hardware testing).

## Quick Start

```bash
git clone <repo-url>
cd micropad
npm start
```

Open **http://localhost:3000** in any modern browser.

## How to Use

1. **Select your model** from the dropdown
2. **Click any key** on the visual keyboard → the picker modal opens
3. **Choose an action** from the tabs:
   - ⌨️ **Keyboard** — click a key on the visual layout. Toggle Ctrl/Shift/Alt/Win for combos like `Ctrl+C`
   - 🎵 **Media** — play/pause, volume, brightness, etc.
   - 🖱️ **Mouse** — clicks, scroll, custom move/drag
   - 📝 **Macro** — type a sequence or click a quick example
4. The action is **assigned immediately** — the modal closes and the key updates
5. Click **📥 Export YAML** to download your config
6. Upload to your device: `./upload.sh your-config.yaml`

### Knobs

For devices with rotary encoders, click CCW/Press/CW to assign each direction independently.

### LED Control

The upload script has an interactive LED menu:

```bash
./upload.sh config.yaml --led
```

This walks you through mode selection (off, backlight, shock, press) and color. You can also pass LED settings directly:

```bash
./upload.sh config.yaml --led 0 backlight white
./upload.sh config.yaml --led 0 press cyan
```

## Action Types

| Type | Examples | Format |
|------|----------|--------|
| Keyboard | Single keys, shortcuts | `a`, `ctrl-c`, `shift-alt-del` |
| Media | Volume, playback | `volumeup`, `mute`, `play` |
| Mouse | Click, scroll | `click`, `click-right`, `wheelup` |
| Mouse move | Custom offset | `move(10,5)`, `drag(0,-10)` |
| Macro | Multi-key sequences | `ctrl-a,ctrl-c` |

## YAML Format

```yaml
model: ch57x-2
orientation: normal
rows: 3
columns: 3
knobs: 2

layers:
  - buttons:
      - [ctrl-c, ctrl-v, ctrl-z]
      - [f1, f2, f3]
      - [volumeup, volumedown, mute]
    knobs:
      - ccw: volumedown
        press: mute
        cw: volumeup
```

Unassigned keys use `null`.

## Upload Setup

Install the native Rust tool:

```bash
# Install Rust (if needed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"

# Install the keyboard tool
cargo install ch57x-keyboard-tool
```

Then upload:

```bash
./upload.sh your-config.yaml
./upload.sh your-config.yaml --led    # with interactive LED setup
```

## Project Structure

```
micropad/
├── docs/              # GitHub Pages root
│   ├── index.html
│   ├── style.css
│   └── src/
│       ├── app.js     # UI controller, click-to-assign flow
│       ├── config.js  # YAML import/export, model definitions
│       ├── keys.js    # HID usage codes, action parser
│       └── logger.js  # Structured logger
├── upload.sh          # Upload YAML + LED control
├── package.json
└── README.md
```

## GitHub Pages

The `docs/` folder is the GitHub Pages root. To deploy:

1. Push to GitHub
2. Settings → Pages → Source: **Deploy from branch** → `main` → `/docs`
3. Your app is live at `https://<username>.github.io/micropad/`

## Limitations

- **No read-back** — cannot read current config from device (hardware limitation)
- **Layer switching** — handled by a physical button on the device, not software-configurable

## Credits

- **[ch57x-keyboard-tool](https://github.com/kriomant/ch57x-keyboard-tool)** — Native Rust tool for CH57x keyboard configuration

## License

MIT

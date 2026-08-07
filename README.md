# MicroPad Web Configurator

Browser-based visual configuration designer for CH57x-based macro keyboards. Design key layouts, assign actions, and export YAML configurations — all from your browser. Works on Apple Mac, Windows, and Linux.

**[Open Web App](https://dodge107.github.io/MicroPadWebConfigurator/)**

## Features

- **Click-to-assign** — click a key, pick an action from the modal, done. No "Assign" button needed.
- **Visual keyboard picker** — full QWERTY layout with F1-F24, all modifiers (including right-side), and modifier toggles (Ctrl/Shift/Alt/Win) for combos
- **Media & mouse actions** — volume, playback, brightness, clicks, scroll, custom movement/drag
- **Macro support** — multi-key sequences with comma syntax (e.g., `ctrl-a,ctrl-c`)
- **Knob support** — assign CCW, press, and CW actions to rotary encoders
- **Multi-slot storage** — save multiple keyboard configurations in named slots, auto-restores last used
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
2. **Choose a slot** or create a new one to save multiple configurations
3. **Click any key** on the visual keyboard → the picker modal opens
4. **Choose an action** from the tabs:
   - ⌨️ **Keyboard** — full layout with F1-F24, all modifiers (Ctrl/Shift/Alt/Win + right-side variants), and special keys (App, Power, PrtSc, ScrLk, Pause)
   - 🎵 **Media** — play/pause, volume, brightness, calculator, screen lock, favorites
   - 🖱️ **Mouse** — left/right/middle click, wheel up/down, directional move/drag
   - 📝 **Macro** — comma-separated sequences like `ctrl-a,ctrl-c` or `alt-tab,enter`
5. The action is **assigned immediately** — the modal closes and the key updates
6. Your configuration is **auto-saved** to the current slot
7. Click **📥 Export YAML** to download your config
8. Upload to your device: `./upload.sh your-config.yaml`

### Multi-Slot Storage

The app supports saving multiple keyboard configurations in named slots:

- **Default slot** — automatically created, stores your first configuration
- **Create new slot** — select "+ Create New Slot..." from the dropdown to add a new configuration
- **Switch slots** — select any saved slot from the dropdown to load it
- **Delete slots** — click the 🗑️ button next to the slot selector to remove a slot (except default)
- **Auto-restore** — the app automatically loads your last used slot on page open

Each slot stores the model, configuration, and timestamp. Slot names are sanitized to lowercase alphanumeric with hyphens.

### Knobs

For devices with rotary encoders, click CCW/Press/CW to assign each direction independently.

### LED Control

The upload script has an interactive LED menu:

```bash
./upload.sh config.yaml --led
```

This walks you through mode selection. There are 4 LED modes for ch57x-2 models:

| Mode | Description |
|------|-------------|
| `0` | **Off** — LEDs off |
| `1` | **Keypress** — lights up when a key is pressed |
| `2` | **Key follow** — non-interactive, follows key state |
| `3` | **Backlight** — lights up the top-left key |

You can also pass LED settings directly:

```bash
./upload.sh config.yaml --led 0 0    # Turn off
./upload.sh config.yaml --led 0 1    # Keypress mode
./upload.sh config.yaml --led 0 2    # Key follow mode
./upload.sh config.yaml --led 0 3    # Backlight mode
```

## Action Types

| Type | Examples | Format |
|------|----------|--------|
| Keyboard | Single keys, shortcuts | `a`, `ctrl-c`, `shift-alt-del`, `f13`, `rctrl` |
| Media | Volume, playback | `volumeup`, `mute`, `play`, `favorites` |
| Mouse | Click, scroll, move | `click`, `click(right)`, `wheel(1)`, `move(10,5)`, `drag(left,0,10)` |
| Macro | Multi-key sequences | `ctrl-a,ctrl-c`, `alt-tab,enter` |

**Note**: The webapp accepts both symbolic (`-`, `[`, `;`) and named (`minus`, `leftbracket`, `semicolon`) key names for compatibility with the Rust tool's YAML format.

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

The web app runs in any browser. The upload tool (`ch57x-keyboard-tool`) works natively on **Apple Mac** and **Linux** (Windows via WSL).

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
3. Your app is live at `https://dodge107.github.io/MicroPadWebConfigurator/`

## Limitations

- **No read-back** — cannot read current config from device (hardware limitation)
- **Layer switching** — handled by a physical button on the device, not software-configurable

## Credits

- **[ch57x-keyboard-tool](https://github.com/kriomant/ch57x-keyboard-tool)** — Native Rust tool for CH57x keyboard configuration

## License

MIT

/**
 * MicroPad Configurator — Preset Configurations
 *
 * Pre-built configurations for common use cases. Each preset defines
 * button and knob assignments for every supported model, plus a
 * description of what was configured and which apps benefit.
 */

import { KEYBOARD_MODELS } from './config.js';

export const PRESETS = {
  gamer: {
    name: 'Gamer',
    icon: '🎮',
    tagline: 'Quick-access game commands & media controls',
    apps: ['FPS Games (CS2, Valorant)', 'MOBA (LoL, Dota 2)', 'MMORPG (WoW, FFXIV)', 'Battle Royale (Apex, Fortnite)'],
    description: 'Essential gaming layout with ability keys, push-to-talk, and media controls on knobs. Designed for fast in-game actions without taking your hands off the mouse.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['1', '2', '3', '4'],
          ['q', 'e', 'r', 'f'],
          ['z', 'x', 'c', 'v'],
          ['ctrl-a', 'ctrl-c', 'ctrl-v', 'alt-tab'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'b', press: 'g', cw: 'n' },
        ],
        keyDescriptions: {
          'Row 1': 'Weapon/item slots 1–4',
          'Row 2': 'Ability keys: Q, E, R, F',
          'Row 3': 'Utility: Z, X, C, V (grenades, reload, etc.)',
          'Row 4': 'Macros: Select All, Copy, Paste, Alt+Tab',
          'Knob 1': 'Volume control (CCW ↓, Press Mute, CW ↑)',
          'Knob 2': 'Game bindings: B (scoreboard), G, N',
        },
      },
      'ch57x-1': {
        buttons: [
          ['1', '2', '3', '4'],
          ['q', 'e', 'r', 'f'],
          ['z', 'x', 'c', 'v'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'b', press: 'g', cw: 'n' },
        ],
        keyDescriptions: {
          'Row 1': 'Weapon/item slots 1–4',
          'Row 2': 'Ability keys: Q, E, R, F',
          'Row 3': 'Utility: Z, X, C, V',
          'Knob 1': 'Volume control',
          'Knob 2': 'Game bindings: B, G, N',
        },
      },
      'ch57x-2': {
        buttons: [
          ['1', '2', '3'],
          ['q', 'e', 'r'],
          ['z', 'x', 'c'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'b', press: 'g', cw: 'n' },
        ],
        keyDescriptions: {
          'Row 1': 'Weapon slots 1–3',
          'Row 2': 'Ability keys: Q, E, R',
          'Row 3': 'Utility: Z, X, C',
          'Knob 1': 'Volume control',
          'Knob 2': 'Game bindings: B, G, N',
        },
      },
      'ch57x-3': {
        buttons: [
          ['q', 'e'],
          ['1', '2'],
          ['z', 'x'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Ability keys: Q, E',
          'Row 2': 'Weapon slots 1–2',
          'Row 3': 'Utility: Z, X',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-4': {
        buttons: [
          ['q'],
          ['e'],
          ['1'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Ability key Q',
          'Button 2': 'Ability key E',
          'Button 3': 'Weapon slot 1',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-5': {
        buttons: [
          ['q'],
          ['e'],
          ['1'],
          ['2'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Ability key Q',
          'Button 2': 'Ability key E',
          'Button 3': 'Weapon slot 1',
          'Button 4': 'Weapon slot 2',
        },
      },
    },
  },

  office: {
    name: 'Office',
    icon: '💼',
    tagline: 'Productivity shortcuts & app switching',
    apps: ['Microsoft Office (Word, Excel, PowerPoint)', 'Google Workspace', 'Slack / Teams', 'VS Code / IDEs', 'File Explorer / Finder'],
    description: 'Essential productivity shortcuts for document editing, app switching, and media control. Speeds up common workflows in office suites and development tools.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['ctrl-c', 'ctrl-v', 'ctrl-x', 'ctrl-z'],
          ['ctrl-s', 'ctrl-a', 'ctrl-f', 'ctrl-p'],
          ['alt-tab', 'win-d', 'win-l', 'delete'],
          ['f2', 'f5', 'ctrl-shift-t', 'ctrl-w'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste, Cut, Undo',
          'Row 2': 'File ops: Save, Select All, Find, Print',
          'Row 3': 'Navigation: Switch App, Show Desktop, Lock Screen, Delete',
          'Row 4': 'Extras: Rename, Refresh, Reopen Tab, Close Tab',
          'Knob 1': 'Volume control',
          'Knob 2': 'Zoom: Zoom Out, Reset, Zoom In',
        },
      },
      'ch57x-1': {
        buttons: [
          ['ctrl-c', 'ctrl-v', 'ctrl-x', 'ctrl-z'],
          ['ctrl-s', 'ctrl-a', 'ctrl-f', 'ctrl-p'],
          ['alt-tab', 'win-d', 'win-l', 'delete'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste, Cut, Undo',
          'Row 2': 'File ops: Save, Select All, Find, Print',
          'Row 3': 'Navigation: Switch App, Show Desktop, Lock, Delete',
          'Knob 1': 'Volume control',
          'Knob 2': 'Zoom: Out, Reset, In',
        },
      },
      'ch57x-2': {
        buttons: [
          ['ctrl-c', 'ctrl-v', 'ctrl-z'],
          ['ctrl-s', 'ctrl-f', 'alt-tab'],
          ['win-d', 'win-l', 'delete'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste, Undo',
          'Row 2': 'File ops: Save, Find, Switch App',
          'Row 3': 'Navigation: Desktop, Lock, Delete',
          'Knob 1': 'Volume control',
          'Knob 2': 'Zoom: Out, Reset, In',
        },
      },
      'ch57x-3': {
        buttons: [
          ['ctrl-c', 'ctrl-v'],
          ['ctrl-z', 'ctrl-s'],
          ['alt-tab', 'ctrl-f'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste',
          'Row 2': 'File ops: Undo, Save',
          'Row 3': 'Navigation: Switch App, Find',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-4': {
        buttons: [
          ['ctrl-c'],
          ['ctrl-v'],
          ['ctrl-z'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Copy',
          'Button 2': 'Paste',
          'Button 3': 'Undo',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-5': {
        buttons: [
          ['ctrl-c'],
          ['ctrl-v'],
          ['ctrl-z'],
          ['alt-tab'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Copy',
          'Button 2': 'Paste',
          'Button 3': 'Undo',
          'Button 4': 'Switch App',
        },
      },
    },
  },

  streamer: {
    name: 'Streamer',
    icon: '🎬',
    tagline: 'OBS scene switching & stream controls',
    apps: ['OBS Studio', 'Streamlabs', 'Twitch Studio', 'Discord', 'Zoom / Teams'],
    description: 'Scene switching, mic mute, and stream management for live streaming. Knobs control audio levels. Perfect for streamers who need instant access to production controls.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['f13', 'f14', 'f15', 'f16'],
          ['f17', 'f18', 'f19', 'f20'],
          ['mute', 'volumedown', 'volumeup', 'play'],
          ['alt-f4', 'ctrl-shift-m', 'win-shift-s', 'ctrl-shift-f'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'f13', press: 'f17', cw: 'f14' },
        ],
        keyDescriptions: {
          'Row 1': 'OBS Scenes 1–4 (bind in OBS hotkeys as F13–F16)',
          'Row 2': 'OBS Scenes 5–8 (F17–F20)',
          'Row 3': 'Audio: Mic Mute, Vol−, Vol+, Play/Pause',
          'Row 4': 'Stream: End Stream, Discord Mute, Screenshot, Fullscreen',
          'Knob 1': 'Master volume control',
          'Knob 2': 'Scene cycling: Prev scene, Toggle, Next scene',
        },
      },
      'ch57x-1': {
        buttons: [
          ['f13', 'f14', 'f15', 'f16'],
          ['mute', 'volumedown', 'volumeup', 'play'],
          ['alt-f4', 'ctrl-shift-m', 'win-shift-s', 'ctrl-shift-f'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'f13', press: 'f17', cw: 'f14' },
        ],
        keyDescriptions: {
          'Row 1': 'OBS Scenes 1–4 (F13–F16)',
          'Row 2': 'Audio: Mic Mute, Vol−, Vol+, Play/Pause',
          'Row 3': 'Stream: End, Discord Mute, Screenshot, Fullscreen',
          'Knob 1': 'Master volume',
          'Knob 2': 'Scene cycling',
        },
      },
      'ch57x-2': {
        buttons: [
          ['f13', 'f14', 'f15'],
          ['mute', 'volumeup', 'play'],
          ['alt-f4', 'ctrl-shift-m', 'win-shift-s'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'f13', press: 'f15', cw: 'f14' },
        ],
        keyDescriptions: {
          'Row 1': 'OBS Scenes 1–3 (F13–F15)',
          'Row 2': 'Audio: Mic Mute, Vol+, Play/Pause',
          'Row 3': 'Stream: End, Discord Mute, Screenshot',
          'Knob 1': 'Master volume',
          'Knob 2': 'Scene cycling',
        },
      },
      'ch57x-3': {
        buttons: [
          ['f13', 'f14'],
          ['mute', 'volumeup'],
          ['alt-f4', 'ctrl-shift-m'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'OBS Scenes 1–2 (F13–F14)',
          'Row 2': 'Audio: Mic Mute, Vol+',
          'Row 3': 'Stream: End, Discord Mute',
          'Knob 1': 'Master volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['f13'],
          ['mute'],
          ['volumeup'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'OBS Scene 1',
          'Button 2': 'Mic Mute',
          'Button 3': 'Vol+',
          'Knob 1': 'Master volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['f13'],
          ['f14'],
          ['mute'],
          ['volumeup'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'OBS Scene 1',
          'Button 2': 'OBS Scene 2',
          'Button 3': 'Mic Mute',
          'Button 4': 'Vol+',
        },
      },
    },
  },

  youtube: {
    name: 'YouTube',
    icon: '📺',
    tagline: 'Video playback & content creation shortcuts',
    apps: ['YouTube (Browser)', 'YouTube Studio', 'Spotify', 'Apple Music', 'Netflix / Disney+'],
    description: 'Media playback controls for watching and creating video content. Quick access to play/pause, skip, volume, and editing shortcuts for video editors.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['play', 'prev', 'next', 'stop'],
          ['volumedown', 'volumeup', 'mute', 'f'],
          ['k', 'j', 'l', 'm'],
          ['ctrl-z', 'ctrl-c', 'ctrl-v', 'ctrl-s'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'arrowleft', press: 'space', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Playback: Play/Pause, Previous, Next, Stop',
          'Row 2': 'Audio: Vol−, Vol+, Mute, Fullscreen (F)',
          'Row 3': 'YouTube: Rewind (J), Play (K), Forward (L), Mute (M)',
          'Row 4': 'Editing: Undo, Copy, Paste, Save (for YouTube Studio)',
          'Knob 1': 'Volume control',
          'Knob 2': 'Timeline: Seek ←, Play/Pause, Seek →',
        },
      },
      'ch57x-1': {
        buttons: [
          ['play', 'prev', 'next', 'stop'],
          ['volumedown', 'volumeup', 'mute', 'f'],
          ['k', 'j', 'l', 'm'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'arrowleft', press: 'space', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Playback: Play/Pause, Previous, Next, Stop',
          'Row 2': 'Audio: Vol−, Vol+, Mute, Fullscreen',
          'Row 3': 'YouTube: Rewind (J), Play (K), Forward (L), Mute (M)',
          'Knob 1': 'Volume control',
          'Knob 2': 'Timeline seek',
        },
      },
      'ch57x-2': {
        buttons: [
          ['play', 'volumedown', 'volumeup'],
          ['k', 'j', 'l'],
          ['mute', 'f', 'next'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'arrowleft', press: 'space', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Playback: Play/Pause, Vol−, Vol+',
          'Row 2': 'YouTube: Rewind (J), Play (K), Forward (L)',
          'Row 3': 'Audio: Mute, Fullscreen, Next',
          'Knob 1': 'Volume control',
          'Knob 2': 'Timeline seek',
        },
      },
      'ch57x-3': {
        buttons: [
          ['play', 'volumeup'],
          ['k', 'j'],
          ['mute', 'next'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Playback: Play/Pause, Vol+',
          'Row 2': 'YouTube: Rewind (J), Play (K)',
          'Row 3': 'Audio: Mute, Next',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-4': {
        buttons: [
          ['play'],
          ['volumeup'],
          ['mute'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Play/Pause',
          'Button 2': 'Vol+',
          'Button 3': 'Mute',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-5': {
        buttons: [
          ['play'],
          ['volumedown'],
          ['volumeup'],
          ['mute'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Play/Pause',
          'Button 2': 'Vol−',
          'Button 3': 'Vol+',
          'Button 4': 'Mute',
        },
      },
    },
  },

  ai: {
    name: 'AI',
    icon: '🤖',
    tagline: 'AI workflow & prompt engineering shortcuts',
    apps: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor', 'Midjourney', 'Stable Diffusion'],
    description: 'Streamlined workflow for AI tool users. Quick copy/paste for prompt engineering, app switching between AI services, and text manipulation shortcuts for working with LLM outputs.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['ctrl-c', 'ctrl-v', 'ctrl-x', 'ctrl-z'],
          ['ctrl-a', 'ctrl-shift-v', 'ctrl-shift-l', 'ctrl-d'],
          ['alt-1', 'alt-2', 'alt-3', 'alt-4'],
          ['ctrl-shift-enter', 'ctrl-enter', 'ctrl-l', 'ctrl-k'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste, Cut, Undo (for prompt editing)',
          'Row 2': 'Text ops: Select All, Paste Without Format, Select Line, Duplicate',
          'Row 3': 'App switch: ChatGPT (Alt+1), Claude (Alt+2), Copilot (Alt+3), Cursor (Alt+4)',
          'Row 4': 'AI actions: Submit, Run, Focus Chat (Ctrl+L), Command Palette (Ctrl+K)',
          'Knob 1': 'Volume control',
          'Knob 2': 'Zoom: Zoom Out, Reset, Zoom In',
        },
      },
      'ch57x-1': {
        buttons: [
          ['ctrl-c', 'ctrl-v', 'ctrl-x', 'ctrl-z'],
          ['ctrl-a', 'ctrl-shift-v', 'ctrl-shift-l', 'ctrl-d'],
          ['alt-1', 'alt-2', 'alt-3', 'alt-4'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste, Cut, Undo',
          'Row 2': 'Text ops: Select All, Paste No Format, Select Line, Duplicate',
          'Row 3': 'App switch: ChatGPT, Claude, Copilot, Cursor',
          'Knob 1': 'Volume control',
          'Knob 2': 'Zoom control',
        },
      },
      'ch57x-2': {
        buttons: [
          ['ctrl-c', 'ctrl-v', 'ctrl-z'],
          ['ctrl-a', 'ctrl-shift-v', 'alt-1'],
          ['ctrl-enter', 'ctrl-l', 'ctrl-k'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste, Undo',
          'Row 2': 'Text ops: Select All, Paste No Format, Switch to ChatGPT',
          'Row 3': 'AI actions: Submit, Focus Chat, Command Palette',
          'Knob 1': 'Volume control',
          'Knob 2': 'Zoom control',
        },
      },
      'ch57x-3': {
        buttons: [
          ['ctrl-c', 'ctrl-v'],
          ['ctrl-a', 'ctrl-z'],
          ['ctrl-enter', 'ctrl-l'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Clipboard: Copy, Paste',
          'Row 2': 'Text ops: Select All, Undo',
          'Row 3': 'AI actions: Submit, Focus Chat',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-4': {
        buttons: [
          ['ctrl-c'],
          ['ctrl-v'],
          ['ctrl-enter'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Copy',
          'Button 2': 'Paste',
          'Button 3': 'Submit to AI',
          'Knob 1': 'Volume control',
        },
      },
      'ch57x-5': {
        buttons: [
          ['ctrl-c'],
          ['ctrl-v'],
          ['ctrl-z'],
          ['ctrl-enter'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Copy',
          'Button 2': 'Paste',
          'Button 3': 'Undo',
          'Button 4': 'Submit to AI',
        },
      },
    },
  },

  vscode: {
    name: 'VS Code',
    icon: '💻',
    tagline: 'Multi-cursor editing & code navigation',
    apps: ['Visual Studio Code', 'VS Codium', 'Cursor', 'VSCodium'],
    description: 'Multi-cursor and multi-selection editing shortcuts for power users in VS Code. Quickly add cursors, select matching words, expand/shrink selections, and navigate code with ease.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['ctrl-d', 'ctrl-shift-l', 'alt-shift-arrowup', 'alt-shift-arrowdown'],
          ['ctrl-l', 'ctrl-shift-arrowright', 'ctrl-u', 'ctrl-shift-u'],
          ['alt-arrowdown', 'alt-arrowup', 'ctrl-shift-k', 'ctrl-enter'],
          ['ctrl-f2', 'f2', 'ctrl-shift-i', 'ctrl-`'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'ctrl-alt-arrowleft', press: 'escape', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Multi-cursor: Add (Ctrl+D), All (Ctrl+Shift+L), Add Above, Add Below',
          'Row 2': 'Select: Line (Ctrl+L), Word Right, Transform Upper, Transform Lower',
          'Row 3': 'Move: Line Down/Up, Delete Line (Ctrl+Shift+K), Insert Line Below',
          'Row 4': 'Navigate: Select All Occurrences (F2→Ctrl+F2), Rename (F2), Format (Ctrl+Shift+I), Terminal (Ctrl+`)',
          'Knob 1': 'Zoom: Out, Reset, In',
          'Knob 2': 'Cursor history: Back, Cancel, Forward',
        },
      },
      'ch57x-1': {
        buttons: [
          ['ctrl-d', 'ctrl-shift-l', 'alt-shift-arrowup', 'alt-shift-arrowdown'],
          ['ctrl-l', 'ctrl-shift-arrowright', 'ctrl-u', 'ctrl-shift-u'],
          ['alt-arrowdown', 'alt-arrowup', 'ctrl-shift-k', 'ctrl-enter'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'ctrl-alt-arrowleft', press: 'escape', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Multi-cursor: Add (Ctrl+D), All (Ctrl+Shift+L), Add Above, Add Below',
          'Row 2': 'Select: Line (Ctrl+L), Word Right, Transform Upper, Transform Lower',
          'Row 3': 'Move: Line Down/Up, Delete Line, Insert Line Below',
          'Knob 1': 'Zoom: Out, Reset, In',
          'Knob 2': 'Cursor history: Back, Cancel, Forward',
        },
      },
      'ch57x-2': {
        buttons: [
          ['ctrl-d', 'ctrl-shift-l', 'alt-shift-arrowup'],
          ['ctrl-l', 'ctrl-shift-arrowright', 'ctrl-shift-k'],
          ['alt-arrowdown', 'alt-arrowup', 'ctrl-enter'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'ctrl-alt-arrowleft', press: 'escape', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Multi-cursor: Add (Ctrl+D), All Occurrences (Ctrl+Shift+L), Add Above',
          'Row 2': 'Select: Line (Ctrl+L), Word Right, Delete Line',
          'Row 3': 'Move: Line Down/Up, Insert Line Below',
          'Knob 1': 'Zoom: Out, Reset, In',
          'Knob 2': 'Cursor history: Back, Cancel, Forward',
        },
      },
      'ch57x-3': {
        buttons: [
          ['ctrl-d', 'ctrl-shift-l'],
          ['ctrl-l', 'ctrl-shift-k'],
          ['alt-arrowdown', 'alt-arrowup'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Multi-cursor: Add (Ctrl+D), All Occurrences (Ctrl+Shift+L)',
          'Row 2': 'Select: Line (Ctrl+L), Delete Line',
          'Row 3': 'Move: Line Down/Up',
          'Knob 1': 'Zoom: Out, Reset, In',
        },
      },
      'ch57x-4': {
        buttons: [
          ['ctrl-d'],
          ['ctrl-shift-l'],
          ['ctrl-shift-k'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Button 1': 'Add Cursor (Ctrl+D) — select next matching word',
          'Button 2': 'All Occurrences (Ctrl+Shift+L)',
          'Button 3': 'Delete Line (Ctrl+Shift+K)',
          'Knob 1': 'Zoom: Out, Reset, In',
        },
      },
      'ch57x-5': {
        buttons: [
          ['ctrl-d'],
          ['ctrl-shift-l'],
          ['ctrl-shift-k'],
          ['ctrl-l'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Add Cursor (Ctrl+D)',
          'Button 2': 'All Occurrences (Ctrl+Shift+L)',
          'Button 3': 'Delete Line (Ctrl+Shift+K)',
          'Button 4': 'Select Line (Ctrl+L)',
        },
      },
    },
  },

  music: {
    name: 'Music Producer',
    icon: '🎹',
    tagline: 'DAW transport & mixing controls',
    apps: ['Ableton Live', 'Logic Pro', 'FL Studio', 'Pro Tools', 'GarageBand'],
    description: 'Transport controls, track navigation, and mixing shortcuts for digital audio workstations. Knobs control volume and pan for quick adjustments during production.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['space', 'enter', 'escape', 'delete'],
          ['ctrl-shift-arrowleft', 'ctrl-shift-arrowright', 'arrowleft', 'arrowright'],
          ['ctrl-d', 'ctrl-e', 'ctrl-t', 'ctrl-shift-u'],
          ['f5', 'f6', 'f7', 'f8'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-alt-arrowleft', press: 'space', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Stop (Space), Return to 0 (Enter), Escape, Delete Selection',
          'Row 2': 'Navigate: Loop Left/Right, Step Left/Right',
          'Row 3': 'Edit: Duplicate (Ctrl+D), Delete Time (Ctrl+E), Split (Ctrl+T), Normalize',
          'Row 4': 'DAW: Record (F5), Play (F6), Stop (F7), Metronome (F8)',
          'Knob 1': 'Master volume',
          'Knob 2': 'Timeline scrub: Rewind, Play/Pause, Forward',
        },
      },
      'ch57x-1': {
        buttons: [
          ['space', 'enter', 'escape', 'delete'],
          ['ctrl-shift-arrowleft', 'ctrl-shift-arrowright', 'arrowleft', 'arrowright'],
          ['ctrl-d', 'ctrl-e', 'ctrl-t', 'f5'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-alt-arrowleft', press: 'space', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Stop, Return, Escape, Delete',
          'Row 2': 'Navigate: Loop Left/Right, Step Left/Right',
          'Row 3': 'Edit: Duplicate, Delete Time, Split, Record (F5)',
          'Knob 1': 'Master volume',
          'Knob 2': 'Timeline scrub',
        },
      },
      'ch57x-2': {
        buttons: [
          ['space', 'enter', 'delete'],
          ['ctrl-d', 'ctrl-t', 'arrowleft'],
          ['f5', 'f6', 'f7'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-alt-arrowleft', press: 'space', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Stop, Return, Delete',
          'Row 2': 'Edit: Duplicate, Split, Step Left',
          'Row 3': 'DAW: Record (F5), Play (F6), Stop (F7)',
          'Knob 1': 'Master volume',
          'Knob 2': 'Timeline scrub',
        },
      },
      'ch57x-3': {
        buttons: [
          ['space', 'enter'],
          ['ctrl-d', 'ctrl-t'],
          ['f5', 'f6'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Stop, Return',
          'Row 2': 'Edit: Duplicate, Split',
          'Row 3': 'DAW: Record (F5), Play (F6)',
          'Knob 1': 'Master volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['space'],
          ['ctrl-d'],
          ['f5'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Play/Stop (Space)',
          'Button 2': 'Duplicate (Ctrl+D)',
          'Button 3': 'Record (F5)',
          'Knob 1': 'Master volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['space'],
          ['enter'],
          ['ctrl-d'],
          ['f5'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Play/Stop (Space)',
          'Button 2': 'Return to 0 (Enter)',
          'Button 3': 'Duplicate (Ctrl+D)',
          'Button 4': 'Record (F5)',
        },
      },
    },
  },

  designer: {
    name: 'Designer',
    icon: '🎨',
    tagline: 'Creative tool shortcuts & zoom control',
    apps: ['Photoshop', 'Figma', 'Illustrator', 'Sketch', 'Affinity Designer'],
    description: 'Essential shortcuts for graphic designers. Quick access to tools, zoom, layer management, and transform operations across creative applications.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['v', 'b', 'e', 't'],
          ['ctrl-z', 'ctrl-shift-z', 'ctrl-c', 'ctrl-v'],
          ['ctrl-g', 'ctrl-shift-g', 'ctrl-]', 'ctrl-['],
          ['ctrl-t', 'ctrl-a', 'delete', 'ctrl-shift-i'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'arrowleft', press: 'enter', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Tools: Move (V), Brush (B), Eraser (E), Text (T)',
          'Row 2': 'Edit: Undo, Redo, Copy, Paste',
          'Row 3': 'Layers: Group, Ungroup, Forward, Backward',
          'Row 4': 'Transform: Free Transform, Select All, Delete, Inverse Select',
          'Knob 1': 'Zoom: Out, Fit, In',
          'Knob 2': 'Nudge: Left, Confirm, Right',
        },
      },
      'ch57x-1': {
        buttons: [
          ['v', 'b', 'e', 't'],
          ['ctrl-z', 'ctrl-shift-z', 'ctrl-c', 'ctrl-v'],
          ['ctrl-g', 'ctrl-shift-g', 'ctrl-t', 'delete'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'arrowleft', press: 'enter', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Tools: Move, Brush, Eraser, Text',
          'Row 2': 'Edit: Undo, Redo, Copy, Paste',
          'Row 3': 'Layers: Group, Ungroup, Transform, Delete',
          'Knob 1': 'Zoom: Out, Fit, In',
          'Knob 2': 'Nudge: Left, Confirm, Right',
        },
      },
      'ch57x-2': {
        buttons: [
          ['v', 'b', 'e'],
          ['ctrl-z', 'ctrl-c', 'ctrl-v'],
          ['ctrl-g', 'ctrl-t', 'delete'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'arrowleft', press: 'enter', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Tools: Move, Brush, Eraser',
          'Row 2': 'Edit: Undo, Copy, Paste',
          'Row 3': 'Layers: Group, Transform, Delete',
          'Knob 1': 'Zoom: Out, Fit, In',
          'Knob 2': 'Nudge: Left, Confirm, Right',
        },
      },
      'ch57x-3': {
        buttons: [
          ['v', 'b'],
          ['ctrl-z', 'ctrl-c'],
          ['ctrl-g', 'ctrl-t'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Tools: Move, Brush',
          'Row 2': 'Edit: Undo, Copy',
          'Row 3': 'Layers: Group, Transform',
          'Knob 1': 'Zoom: Out, Fit, In',
        },
      },
      'ch57x-4': {
        buttons: [
          ['v'],
          ['ctrl-z'],
          ['ctrl-t'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Button 1': 'Move Tool (V)',
          'Button 2': 'Undo (Ctrl+Z)',
          'Button 3': 'Free Transform (Ctrl+T)',
          'Knob 1': 'Zoom: Out, Fit, In',
        },
      },
      'ch57x-5': {
        buttons: [
          ['v'],
          ['b'],
          ['ctrl-z'],
          ['ctrl-t'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Move Tool (V)',
          'Button 2': 'Brush Tool (B)',
          'Button 3': 'Undo (Ctrl+Z)',
          'Button 4': 'Free Transform (Ctrl+T)',
        },
      },
    },
  },

  video: {
    name: 'Video Editor',
    icon: '🎞️',
    tagline: 'Timeline & editing controls',
    apps: ['Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'After Effects', 'CapCut'],
    description: 'Timeline navigation, cutting, and editing shortcuts for video editors. Knobs provide frame-by-frame scrubbing for precise cuts.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['space', 'enter', 'escape', 'delete'],
          ['arrowleft', 'arrowright', 'arrowup', 'arrowdown'],
          ['ctrl-k', 'ctrl-shift-k', 'ctrl-shift-d', 'ctrl-shift-s'],
          ['ctrl-c', 'ctrl-v', 'ctrl-z', 'ctrl-shift-z'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'arrowleft', press: 'space', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Pause, Return, Escape, Delete',
          'Row 2': 'Navigate: Frame Left/Right, Track Up/Down',
          'Row 3': 'Edit: Razor (Ctrl+K), Ripple Delete, Dissolve, Save Project',
          'Row 4': 'Clipboard: Copy, Paste, Undo, Redo',
          'Knob 1': 'Audio volume',
          'Knob 2': 'Timeline scrub: Frame Left, Play/Pause, Frame Right',
        },
      },
      'ch57x-1': {
        buttons: [
          ['space', 'enter', 'escape', 'delete'],
          ['arrowleft', 'arrowright', 'arrowup', 'arrowdown'],
          ['ctrl-k', 'ctrl-shift-k', 'ctrl-c', 'ctrl-v'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'arrowleft', press: 'space', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Pause, Return, Escape, Delete',
          'Row 2': 'Navigate: Frame Left/Right, Track Up/Down',
          'Row 3': 'Edit: Razor, Ripple Delete, Copy, Paste',
          'Knob 1': 'Audio volume',
          'Knob 2': 'Timeline scrub',
        },
      },
      'ch57x-2': {
        buttons: [
          ['space', 'enter', 'delete'],
          ['arrowleft', 'arrowright', 'ctrl-k'],
          ['ctrl-c', 'ctrl-v', 'ctrl-z'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'arrowleft', press: 'space', cw: 'arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Pause, Return, Delete',
          'Row 2': 'Navigate: Frame Left/Right, Razor (Ctrl+K)',
          'Row 3': 'Clipboard: Copy, Paste, Undo',
          'Knob 1': 'Audio volume',
          'Knob 2': 'Timeline scrub',
        },
      },
      'ch57x-3': {
        buttons: [
          ['space', 'enter'],
          ['arrowleft', 'arrowright'],
          ['ctrl-k', 'ctrl-c'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Transport: Play/Pause, Return',
          'Row 2': 'Navigate: Frame Left/Right',
          'Row 3': 'Edit: Razor, Copy',
          'Knob 1': 'Audio volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['space'],
          ['ctrl-k'],
          ['ctrl-c'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Play/Pause (Space)',
          'Button 2': 'Razor Tool (Ctrl+K)',
          'Button 3': 'Copy (Ctrl+C)',
          'Knob 1': 'Audio volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['space'],
          ['enter'],
          ['ctrl-k'],
          ['ctrl-c'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Play/Pause (Space)',
          'Button 2': 'Return (Enter)',
          'Button 3': 'Razor Tool (Ctrl+K)',
          'Button 4': 'Copy (Ctrl+C)',
        },
      },
    },
  },

  meeting: {
    name: 'Meeting',
    icon: '📞',
    tagline: 'Video call controls',
    apps: ['Zoom', 'Microsoft Teams', 'Google Meet', 'Slack Huddles', 'Discord'],
    description: 'Quick access to mute, camera, and screen sharing controls for video conferencing. Essential for professionals who spend time in back-to-back meetings.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['alt-a', 'alt-v', 'alt-s', 'alt-h'],
          ['mute', 'volumedown', 'volumeup', 'play'],
          ['alt-tab', 'ctrl-w', 'alt-f4', 'win-d'],
          ['ctrl-d', 'ctrl-e', 'ctrl-t', 'ctrl-n'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Call controls: Mute Audio (Alt+A), Video (Alt+V), Share (Alt+S), Hand Raise (Alt+H)',
          'Row 2': 'Audio: Mic Mute, Vol−, Vol+, Play/Pause',
          'Row 3': 'Navigation: Switch App, Close Tab, Leave Call, Show Desktop',
          'Row 4': 'Chat: New DM (Ctrl+D), Emoji (Ctrl+E), Thread (Ctrl+T), New Chat (Ctrl+N)',
          'Knob 1': 'Speaker volume',
          'Knob 2': 'Zoom: Out, Reset, In',
        },
      },
      'ch57x-1': {
        buttons: [
          ['alt-a', 'alt-v', 'alt-s', 'alt-h'],
          ['mute', 'volumedown', 'volumeup', 'play'],
          ['alt-tab', 'ctrl-w', 'alt-f4', 'win-d'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Call controls: Mute Audio, Video, Share, Hand Raise',
          'Row 2': 'Audio: Mic Mute, Vol−, Vol+, Play/Pause',
          'Row 3': 'Navigation: Switch App, Close Tab, Leave Call, Desktop',
          'Knob 1': 'Speaker volume',
          'Knob 2': 'Zoom control',
        },
      },
      'ch57x-2': {
        buttons: [
          ['alt-a', 'alt-v', 'alt-s'],
          ['mute', 'volumeup', 'play'],
          ['alt-tab', 'alt-f4', 'win-d'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Call controls: Mute Audio, Video, Share Screen',
          'Row 2': 'Audio: Mic Mute, Vol+, Play/Pause',
          'Row 3': 'Navigation: Switch App, Leave Call, Desktop',
          'Knob 1': 'Speaker volume',
          'Knob 2': 'Zoom control',
        },
      },
      'ch57x-3': {
        buttons: [
          ['alt-a', 'alt-v'],
          ['mute', 'volumeup'],
          ['alt-tab', 'alt-f4'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Call controls: Mute Audio, Toggle Video',
          'Row 2': 'Audio: Mic Mute, Vol+',
          'Row 3': 'Navigation: Switch App, Leave Call',
          'Knob 1': 'Speaker volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['alt-a'],
          ['mute'],
          ['alt-f4'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Mute/Unmute Audio (Alt+A)',
          'Button 2': 'Mic Mute',
          'Button 3': 'Leave Call (Alt+F4)',
          'Knob 1': 'Speaker volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['alt-a'],
          ['alt-v'],
          ['mute'],
          ['alt-f4'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Mute Audio (Alt+A)',
          'Button 2': 'Toggle Video (Alt+V)',
          'Button 3': 'Mic Mute',
          'Button 4': 'Leave Call (Alt+F4)',
        },
      },
    },
  },

  accessibility: {
    name: 'Accessibility',
    icon: '♿',
    tagline: 'System accessibility shortcuts',
    apps: ['macOS Accessibility', 'Windows Ease of Access', 'Screen Readers', 'Switch Control', 'Voice Control'],
    description: 'System-wide accessibility shortcuts for magnifier, narrator, contrast, and input controls. Helps users who rely on assistive technologies for daily computing.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['win-equal', 'win-minus', 'win-escape', 'alt-shift-printscreen'],
          ['win-ctrl-enter', 'win-ctrl-n', 'win-u', 'win-ctrl-c'],
          ['tab', 'shift-tab', 'enter', 'escape'],
          ['arrowup', 'arrowdown', 'arrowleft', 'arrowright'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Magnifier: Zoom In, Zoom Out, Close Magnifier, High Contrast',
          'Row 2': 'Narrator: Start (Win+Ctrl+Enter), New Instance, Settings (Win+U), Color Filter',
          'Row 3': 'Navigation: Tab Forward/Back, Enter, Escape',
          'Row 4': 'Arrow keys for cursor/switch navigation',
          'Knob 1': 'System volume',
          'Knob 2': 'Screen zoom: Out, Reset, In',
        },
      },
      'ch57x-1': {
        buttons: [
          ['win-equal', 'win-minus', 'win-escape', 'alt-shift-printscreen'],
          ['win-ctrl-enter', 'win-u', 'tab', 'shift-tab'],
          ['enter', 'escape', 'arrowup', 'arrowdown'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Magnifier: Zoom In/Out, Close, High Contrast',
          'Row 2': 'Narrator: Start, Settings, Tab Forward/Back',
          'Row 3': 'Navigation: Enter, Escape, Arrow Up/Down',
          'Knob 1': 'System volume',
          'Knob 2': 'Screen zoom',
        },
      },
      'ch57x-2': {
        buttons: [
          ['win-equal', 'win-minus', 'win-escape'],
          ['win-ctrl-enter', 'tab', 'enter'],
          ['escape', 'arrowup', 'arrowdown'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Magnifier: Zoom In, Zoom Out, Close',
          'Row 2': 'Narrator: Start, Tab, Enter',
          'Row 3': 'Navigation: Escape, Arrow Up/Down',
          'Knob 1': 'System volume',
          'Knob 2': 'Screen zoom',
        },
      },
      'ch57x-3': {
        buttons: [
          ['win-equal', 'win-minus'],
          ['win-ctrl-enter', 'tab'],
          ['enter', 'escape'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Magnifier: Zoom In, Zoom Out',
          'Row 2': 'Narrator: Start, Tab',
          'Row 3': 'Navigation: Enter, Escape',
          'Knob 1': 'System volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['win-equal'],
          ['win-ctrl-enter'],
          ['tab'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Magnifier Zoom In',
          'Button 2': 'Start Narrator',
          'Button 3': 'Tab Forward',
          'Knob 1': 'System volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['win-equal'],
          ['win-minus'],
          ['win-ctrl-enter'],
          ['tab'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Magnifier Zoom In',
          'Button 2': 'Magnifier Zoom Out',
          'Button 3': 'Start Narrator',
          'Button 4': 'Tab Forward',
        },
      },
    },
  },

  writer: {
    name: 'Writer',
    icon: '✍️',
    tagline: 'Text formatting & document editing',
    apps: ['Microsoft Word', 'Google Docs', 'Notion', 'Obsidian', 'Ulysses'],
    description: 'Formatting and editing shortcuts for writers and content creators. Quick access to bold, italic, headings, find/replace, and document navigation.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['ctrl-b', 'ctrl-i', 'ctrl-u', 'ctrl-shift-h'],
          ['ctrl-f', 'ctrl-h', 'ctrl-g', 'f3'],
          ['ctrl-1', 'ctrl-2', 'ctrl-3', 'ctrl-4'],
          ['ctrl-z', 'ctrl-y', 'ctrl-s', 'ctrl-p'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'ctrl-arrowleft', press: 'ctrl-home', cw: 'ctrl-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Format: Bold, Italic, Underline, Strikethrough',
          'Row 2': 'Find: Find (Ctrl+F), Replace (Ctrl+H), Next (Ctrl+G), Find Next (F3)',
          'Row 3': 'Headings: Heading 1, 2, 3, 4',
          'Row 4': 'Edit: Undo, Redo, Save, Print',
          'Knob 1': 'Font size: Decrease, Reset, Increase',
          'Knob 2': 'Navigate: Word Left, Document Start, Word Right',
        },
      },
      'ch57x-1': {
        buttons: [
          ['ctrl-b', 'ctrl-i', 'ctrl-u', 'ctrl-shift-h'],
          ['ctrl-f', 'ctrl-h', 'ctrl-g', 'f3'],
          ['ctrl-1', 'ctrl-2', 'ctrl-3', 'ctrl-z'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'ctrl-arrowleft', press: 'ctrl-home', cw: 'ctrl-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Format: Bold, Italic, Underline, Strikethrough',
          'Row 2': 'Find: Find, Replace, Next, Find Next',
          'Row 3': 'Headings: 1, 2, 3, Undo',
          'Knob 1': 'Font size',
          'Knob 2': 'Navigate: Word Left, Start, Word Right',
        },
      },
      'ch57x-2': {
        buttons: [
          ['ctrl-b', 'ctrl-i', 'ctrl-u'],
          ['ctrl-f', 'ctrl-h', 'ctrl-g'],
          ['ctrl-1', 'ctrl-2', 'ctrl-z'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'ctrl-arrowleft', press: 'ctrl-home', cw: 'ctrl-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Format: Bold, Italic, Underline',
          'Row 2': 'Find: Find, Replace, Next',
          'Row 3': 'Headings: 1, 2, Undo',
          'Knob 1': 'Font size',
          'Knob 2': 'Navigate: Word Left, Start, Word Right',
        },
      },
      'ch57x-3': {
        buttons: [
          ['ctrl-b', 'ctrl-i'],
          ['ctrl-f', 'ctrl-h'],
          ['ctrl-1', 'ctrl-z'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Format: Bold, Italic',
          'Row 2': 'Find: Find, Replace',
          'Row 3': 'Heading 1, Undo',
          'Knob 1': 'Font size',
        },
      },
      'ch57x-4': {
        buttons: [
          ['ctrl-b'],
          ['ctrl-f'],
          ['ctrl-z'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Button 1': 'Bold (Ctrl+B)',
          'Button 2': 'Find (Ctrl+F)',
          'Button 3': 'Undo (Ctrl+Z)',
          'Knob 1': 'Font size',
        },
      },
      'ch57x-5': {
        buttons: [
          ['ctrl-b'],
          ['ctrl-i'],
          ['ctrl-f'],
          ['ctrl-z'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Bold (Ctrl+B)',
          'Button 2': 'Italic (Ctrl+I)',
          'Button 3': 'Find (Ctrl+F)',
          'Button 4': 'Undo (Ctrl+Z)',
        },
      },
    },
  },

  spreadsheet: {
    name: 'Spreadsheet',
    icon: '📊',
    tagline: 'Cell navigation & data entry',
    apps: ['Microsoft Excel', 'Google Sheets', 'Numbers', 'LibreOffice Calc'],
    description: 'Cell navigation, formatting, and formula shortcuts for spreadsheet power users. Speeds up data entry, formatting, and analysis workflows.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['arrowup', 'arrowdown', 'arrowleft', 'arrowright'],
          ['ctrl-c', 'ctrl-v', 'ctrl-x', 'ctrl-z'],
          ['ctrl-b', 'ctrl-i', 'ctrl-shift-l', 'alt-enter'],
          ['ctrl-arrowup', 'ctrl-arrowdown', 'ctrl-s', 'alt-equal'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'shift-tab', press: 'tab', cw: 'tab' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Cell Up/Down/Left/Right',
          'Row 2': 'Clipboard: Copy, Paste, Cut, Undo',
          'Row 3': 'Format: Bold, Italic, Filter (Ctrl+Shift+L), New Line in Cell',
          'Row 4': 'Jump: Top of Column, Bottom of Column, Save, AutoSum (Alt+=)',
          'Knob 1': 'Zoom: Out, 100%, In',
          'Knob 2': 'Cell: Previous (Shift+Tab), Confirm, Next (Tab)',
        },
      },
      'ch57x-1': {
        buttons: [
          ['arrowup', 'arrowdown', 'arrowleft', 'arrowright'],
          ['ctrl-c', 'ctrl-v', 'ctrl-x', 'ctrl-z'],
          ['ctrl-b', 'ctrl-i', 'ctrl-shift-l', 'alt-enter'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'shift-tab', press: 'tab', cw: 'tab' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Cell Up/Down/Left/Right',
          'Row 2': 'Clipboard: Copy, Paste, Cut, Undo',
          'Row 3': 'Format: Bold, Italic, Filter, New Line',
          'Knob 1': 'Zoom',
          'Knob 2': 'Cell: Prev, Confirm, Next',
        },
      },
      'ch57x-2': {
        buttons: [
          ['arrowup', 'arrowdown', 'arrowleft'],
          ['ctrl-c', 'ctrl-v', 'ctrl-z'],
          ['ctrl-b', 'ctrl-shift-l', 'alt-enter'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
          { ccw: 'shift-tab', press: 'tab', cw: 'tab' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Cell Up/Down/Left',
          'Row 2': 'Clipboard: Copy, Paste, Undo',
          'Row 3': 'Format: Bold, Filter, New Line',
          'Knob 1': 'Zoom',
          'Knob 2': 'Cell: Prev, Confirm, Next',
        },
      },
      'ch57x-3': {
        buttons: [
          ['arrowup', 'arrowdown'],
          ['ctrl-c', 'ctrl-v'],
          ['ctrl-b', 'ctrl-z'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Cell Up/Down',
          'Row 2': 'Clipboard: Copy, Paste',
          'Row 3': 'Format: Bold, Undo',
          'Knob 1': 'Zoom',
        },
      },
      'ch57x-4': {
        buttons: [
          ['arrowup'],
          ['ctrl-c'],
          ['ctrl-v'],
        ],
        knobs: [
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Button 1': 'Cell Up',
          'Button 2': 'Copy (Ctrl+C)',
          'Button 3': 'Paste (Ctrl+V)',
          'Knob 1': 'Zoom',
        },
      },
      'ch57x-5': {
        buttons: [
          ['arrowup'],
          ['arrowdown'],
          ['ctrl-c'],
          ['ctrl-v'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Cell Up',
          'Button 2': 'Cell Down',
          'Button 3': 'Copy (Ctrl+C)',
          'Button 4': 'Paste (Ctrl+V)',
        },
      },
    },
  },

  modeling: {
    name: '3D Modeling',
    icon: '🧊',
    tagline: 'Viewport & transform controls',
    apps: ['Blender', 'Maya', '3ds Max', 'Cinema 4D', 'ZBrush'],
    description: 'Viewport navigation and transform shortcuts for 3D artists. Quick access to select, move, rotate, scale modes and viewport controls.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['g', 'r', 's', 'x'],
          ['y', 'z', 'tab', 'escape'],
          ['1', '2', '3', '4'],
          ['numpad5', 'numpad1', 'numpad3', 'numpad7'],
        ],
        knobs: [
          { ccw: 'numpadminus', press: 'home', cw: 'numpadplus' },
          { ccw: 'ctrl-alt-arrowleft', press: 'escape', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transform: Grab/Move (G), Rotate (R), Scale (S), X-Axis',
          'Row 2': 'Axis: Y, Z, Toggle Wireframe (Tab), Cancel (Esc)',
          'Row 3': 'Subdivision: Level 1, 2, 3, 4',
          'Row 4': 'Viewport: Ortho/Toggle, Front, Right, Top',
          'Knob 1': 'Zoom: Out, Home View, In',
          'Knob 2': 'Undo/Redo history',
        },
      },
      'ch57x-1': {
        buttons: [
          ['g', 'r', 's', 'x'],
          ['y', 'z', 'tab', 'escape'],
          ['1', '2', '3', '4'],
        ],
        knobs: [
          { ccw: 'numpadminus', press: 'home', cw: 'numpadplus' },
          { ccw: 'ctrl-alt-arrowleft', press: 'escape', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transform: Grab, Rotate, Scale, X-Axis',
          'Row 2': 'Axis: Y, Z, Wireframe, Cancel',
          'Row 3': 'Subdivision: Level 1–4',
          'Knob 1': 'Zoom',
          'Knob 2': 'Undo/Redo',
        },
      },
      'ch57x-2': {
        buttons: [
          ['g', 'r', 's'],
          ['x', 'y', 'z'],
          ['tab', 'escape', '1'],
        ],
        knobs: [
          { ccw: 'numpadminus', press: 'home', cw: 'numpadplus' },
          { ccw: 'ctrl-alt-arrowleft', press: 'escape', cw: 'ctrl-alt-arrowright' },
        ],
        keyDescriptions: {
          'Row 1': 'Transform: Grab, Rotate, Scale',
          'Row 2': 'Axis: X, Y, Z',
          'Row 3': 'Wireframe, Cancel, Subdivision 1',
          'Knob 1': 'Zoom',
          'Knob 2': 'Undo/Redo',
        },
      },
      'ch57x-3': {
        buttons: [
          ['g', 'r'],
          ['s', 'x'],
          ['tab', 'escape'],
        ],
        knobs: [
          { ccw: 'numpadminus', press: 'home', cw: 'numpadplus' },
        ],
        keyDescriptions: {
          'Row 1': 'Transform: Grab, Rotate',
          'Row 2': 'Scale, X-Axis',
          'Row 3': 'Wireframe, Cancel',
          'Knob 1': 'Zoom',
        },
      },
      'ch57x-4': {
        buttons: [
          ['g'],
          ['r'],
          ['s'],
        ],
        knobs: [
          { ccw: 'numpadminus', press: 'home', cw: 'numpadplus' },
        ],
        keyDescriptions: {
          'Button 1': 'Grab/Move (G)',
          'Button 2': 'Rotate (R)',
          'Button 3': 'Scale (S)',
          'Knob 1': 'Zoom',
        },
      },
      'ch57x-5': {
        buttons: [
          ['g'],
          ['r'],
          ['s'],
          ['tab'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Grab/Move (G)',
          'Button 2': 'Rotate (R)',
          'Button 3': 'Scale (S)',
          'Button 4': 'Toggle Wireframe (Tab)',
        },
      },
    },
  },

  sysadmin: {
    name: 'Sysadmin',
    icon: '🔧',
    tagline: 'Terminal & server management',
    apps: ['Terminal / iTerm2', 'tmux / screen', 'SSH Clients', 'htop', 'Docker CLI'],
    description: 'Terminal multiplexer and process management shortcuts for system administrators. Quick access to pane splitting, session management, and process control.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['ctrl-b,shift-;', 'ctrl-b,shift-', 'ctrl-b,o', 'ctrl-b,c'],
          ['ctrl-b,d', 'ctrl-b,[', 'ctrl-c', 'ctrl-l'],
          ['ctrl-r', 'ctrl-a', 'ctrl-e', 'ctrl-u'],
          ['ctrl-z', 'fg', 'ctrl-d', 'ctrl-w'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-shift-tab', press: 'tab', cw: 'ctrl-tab' },
        ],
        keyDescriptions: {
          'Row 1': 'tmux Panes: Split Vertical, Split Horizontal, Next Pane, New Window',
          'Row 2': 'tmux: Detach, Copy Mode, Kill Process, Clear Screen',
          'Row 3': 'Shell: Reverse Search (Ctrl+R), Line Start, Line End, Clear Line',
          'Row 4': 'Process: Suspend (Ctrl+Z), Foreground, Exit Shell (Ctrl+D), Delete Word',
          'Knob 1': 'System volume',
          'Knob 2': 'Tab: Previous, Confirm, Next',
        },
      },
      'ch57x-1': {
        buttons: [
          ['ctrl-b,shift-;', 'ctrl-b,shift-', 'ctrl-b,o', 'ctrl-b,c'],
          ['ctrl-b,d', 'ctrl-b,[', 'ctrl-c', 'ctrl-l'],
          ['ctrl-r', 'ctrl-a', 'ctrl-e', 'ctrl-u'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-shift-tab', press: 'tab', cw: 'ctrl-tab' },
        ],
        keyDescriptions: {
          'Row 1': 'tmux Panes: Split V, Split H, Next, New Window',
          'Row 2': 'tmux: Detach, Copy Mode, Kill, Clear',
          'Row 3': 'Shell: Reverse Search, Start, End, Clear Line',
          'Knob 1': 'Volume',
          'Knob 2': 'Tab navigation',
        },
      },
      'ch57x-2': {
        buttons: [
          ['ctrl-b,shift-;', 'ctrl-b,shift-', 'ctrl-b,o'],
          ['ctrl-b,d', 'ctrl-c', 'ctrl-l'],
          ['ctrl-r', 'ctrl-a', 'ctrl-e'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-shift-tab', press: 'tab', cw: 'ctrl-tab' },
        ],
        keyDescriptions: {
          'Row 1': 'tmux Panes: Split V, Split H, Next Pane',
          'Row 2': 'tmux: Detach, Kill Process, Clear',
          'Row 3': 'Shell: Reverse Search, Start, End',
          'Knob 1': 'Volume',
          'Knob 2': 'Tab navigation',
        },
      },
      'ch57x-3': {
        buttons: [
          ['ctrl-b,shift-;', 'ctrl-b,o'],
          ['ctrl-b,d', 'ctrl-c'],
          ['ctrl-r', 'ctrl-l'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'tmux: Split Pane, Next Pane',
          'Row 2': 'tmux: Detach, Kill Process',
          'Row 3': 'Shell: Reverse Search, Clear',
          'Knob 1': 'Volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['ctrl-b,shift-;'],
          ['ctrl-b,d'],
          ['ctrl-r'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'tmux: Split Pane',
          'Button 2': 'tmux: Detach',
          'Button 3': 'Reverse Search (Ctrl+R)',
          'Knob 1': 'Volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['ctrl-b,shift-;'],
          ['ctrl-b,o'],
          ['ctrl-b,d'],
          ['ctrl-r'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'tmux: Split Pane',
          'Button 2': 'tmux: Next Pane',
          'Button 3': 'tmux: Detach',
          'Button 4': 'Reverse Search (Ctrl+R)',
        },
      },
    },
  },

  presentation: {
    name: 'Presentation',
    icon: '📽️',
    tagline: 'Slide control & presenter tools',
    apps: ['PowerPoint', 'Keynote', 'Google Slides', 'Prezi', 'reveal.js'],
    description: 'Slide navigation and presenter tools for giving presentations. Quick access to next/prev slide, laser pointer, black screen, and presenter notes.',
    models: {
      'ch57x-4x4': {
        buttons: [
          ['arrowright', 'arrowleft', 'arrowup', 'arrowdown'],
          ['enter', 'escape', 'b', 'w'],
          ['ctrl-p', 'ctrl-shift-p', 'f5', 'shift-f5'],
          ['ctrl-m', 'ctrl-l', 'ctrl-a', 'ctrl-s'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Next Slide, Previous, First Slide, Last Slide',
          'Row 2': 'Controls: Advance (Enter), Exit (Esc), Black Screen (B), White Screen (W)',
          'Row 3': 'Present: Print (Ctrl+P), Preview, From Start (F5), From Current (Shift+F5)',
          'Row 4': 'Tools: Mute Mic, Laser Pointer, Annotate, Save',
          'Knob 1': 'Speaker volume',
          'Knob 2': 'Zoom: Out, Reset, In',
        },
      },
      'ch57x-1': {
        buttons: [
          ['arrowright', 'arrowleft', 'arrowup', 'arrowdown'],
          ['enter', 'escape', 'b', 'w'],
          ['f5', 'shift-f5', 'ctrl-p', 'ctrl-m'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Next, Previous, First, Last',
          'Row 2': 'Controls: Advance, Exit, Black, White',
          'Row 3': 'Present: From Start, From Current, Print, Mute',
          'Knob 1': 'Speaker volume',
          'Knob 2': 'Zoom',
        },
      },
      'ch57x-2': {
        buttons: [
          ['arrowright', 'arrowleft', 'enter'],
          ['escape', 'b', 'w'],
          ['f5', 'shift-f5', 'ctrl-m'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
          { ccw: 'ctrl-minus', press: 'ctrl-0', cw: 'ctrl-equal' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Next, Previous, Advance',
          'Row 2': 'Controls: Exit, Black Screen, White Screen',
          'Row 3': 'Present: From Start, From Current, Mute',
          'Knob 1': 'Speaker volume',
          'Knob 2': 'Zoom',
        },
      },
      'ch57x-3': {
        buttons: [
          ['arrowright', 'arrowleft'],
          ['enter', 'escape'],
          ['b', 'f5'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Row 1': 'Navigate: Next, Previous',
          'Row 2': 'Controls: Advance, Exit',
          'Row 3': 'Black Screen, Start Presentation',
          'Knob 1': 'Speaker volume',
        },
      },
      'ch57x-4': {
        buttons: [
          ['arrowright'],
          ['arrowleft'],
          ['escape'],
        ],
        knobs: [
          { ccw: 'volumedown', press: 'mute', cw: 'volumeup' },
        ],
        keyDescriptions: {
          'Button 1': 'Next Slide',
          'Button 2': 'Previous Slide',
          'Button 3': 'Exit Presentation',
          'Knob 1': 'Speaker volume',
        },
      },
      'ch57x-5': {
        buttons: [
          ['arrowright'],
          ['arrowleft'],
          ['enter'],
          ['escape'],
        ],
        knobs: [],
        keyDescriptions: {
          'Button 1': 'Next Slide',
          'Button 2': 'Previous Slide',
          'Button 3': 'Advance (Enter)',
          'Button 4': 'Exit (Escape)',
        },
      },
    },
  },
};

/**
 * Get a preset's configuration for a specific model.
 * Returns null if the preset doesn't support the model.
 */
export function getPresetConfig(presetId, modelId) {
  const preset = PRESETS[presetId];
  if (!preset) return null;
  return preset.models[modelId] || null;
}

/**
 * Apply a preset to a config object.
 * Mutates the config's first layer with the preset's button/knob assignments.
 * Handles orientation rotation if the config is in a rotated orientation.
 */
export function applyPreset(presetId, modelId, config) {
  const presetConfig = getPresetConfig(presetId, modelId);
  if (!presetConfig) return false;

  const layer = config.layers[0];
  const orientation = config.orientation || 'normal';

  // Get the model dimensions
  const model = KEYBOARD_MODELS[modelId];
  if (!model) return false;

  // Start with the preset buttons (always in normal orientation: rows × cols)
  let buttons = presetConfig.buttons.map(row => [...row]);

  // Rotate the buttons if the config is in a rotated orientation
  if (orientation === 'clockwise') {
    buttons = rotateButtonsCW(buttons, model.rows, model.cols);
  } else if (orientation === 'counterclockwise') {
    buttons = rotateButtonsCCW(buttons, model.rows, model.cols);
  } else if (orientation === 'upsidedown') {
    buttons = rotateButtons180(buttons, model.rows, model.cols);
  }

  // Apply button assignments
  for (let r = 0; r < buttons.length; r++) {
    for (let c = 0; c < buttons[r].length; c++) {
      if (layer.buttons[r] && c < layer.buttons[r].length) {
        layer.buttons[r][c] = buttons[r][c];
      }
    }
  }

  // Apply knob assignments
  for (let k = 0; k < presetConfig.knobs.length; k++) {
    if (layer.knobs[k]) {
      layer.knobs[k].ccw = presetConfig.knobs[k].ccw;
      layer.knobs[k].press = presetConfig.knobs[k].press;
      layer.knobs[k].cw = presetConfig.knobs[k].cw;
    }
  }

  return true;
}

// ─── Button Rotation Helpers ─────────────────────────────────────────

function rotateButtonsCW(buttons, rows, cols) {
  const newRows = cols;
  const newCols = rows;
  const result = [];
  for (let r = 0; r < newRows; r++) {
    const row = [];
    for (let c = 0; c < newCols; c++) {
      const oldRow = rows - 1 - c;
      const oldCol = r;
      row.push(buttons[oldRow]?.[oldCol] ?? null);
    }
    result.push(row);
  }
  return result;
}

function rotateButtonsCCW(buttons, rows, cols) {
  const newRows = cols;
  const newCols = rows;
  const result = [];
  for (let r = 0; r < newRows; r++) {
    const row = [];
    for (let c = 0; c < newCols; c++) {
      const oldRow = c;
      const oldCol = cols - 1 - r;
      row.push(buttons[oldRow]?.[oldCol] ?? null);
    }
    result.push(row);
  }
  return result;
}

function rotateButtons180(buttons, rows, cols) {
  const result = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const oldRow = rows - 1 - r;
      const oldCol = cols - 1 - c;
      row.push(buttons[oldRow]?.[oldCol] ?? null);
    }
    result.push(row);
  }
  return result;
}

/**
 * Get the description info for a preset + model combination.
 */
export function getPresetDescription(presetId, modelId) {
  const preset = PRESETS[presetId];
  if (!preset) return null;

  const modelConfig = preset.models[modelId];
  if (!modelConfig) return null;

  return {
    name: preset.name,
    icon: preset.icon,
    tagline: preset.tagline,
    description: preset.description,
    apps: preset.apps,
    keyDescriptions: modelConfig.keyDescriptions,
  };
}

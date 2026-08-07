#!/bin/bash
# Upload a YAML config to the CH57x micropad
# Usage: ./upload.sh [config-file.yaml] [--led <layer> <mode>]
#
# LED modes (k884x models):
#   off
#   backlight white|red|orange|yellow|green|cyan|blue|purple
#   shock red|orange|yellow|green|cyan|blue|purple
#   shock2 red|orange|yellow|green|cyan|blue|purple
#   press red|orange|yellow|green|cyan|blue|purple
#
# LED modes (k8890 model):
#   <number> (e.g. 1 = steady on)

set -e

# Source Rust environment
source "$HOME/.cargo/env"

# Check if ch57x-keyboard-tool is installed
if ! command -v ch57x-keyboard-tool &> /dev/null; then
    echo "❌ ch57x-keyboard-tool not found. Install with: cargo install ch57x-keyboard-tool"
    exit 1
fi

# Parse arguments
CONFIG_FILE=""
LED_MODE=""
LED_ARGS=()

while [[ $# -gt 0 ]]; do
    case "$1" in
        --led)
            LED_MODE="interactive"
            shift
            # Check if there are additional LED args
            if [[ $# -gt 0 && ! "$1" =~ ^- ]]; then
                LED_MODE="direct"
                while [[ $# -gt 0 ]]; do
                    LED_ARGS+=("$1")
                    shift
                done
            fi
            ;;
        -h|--help)
            echo "Usage: ./upload.sh <config-file.yaml> [--led [layer mode]]"
            echo ""
            echo "Options:"
            echo "  --led              Interactive LED setup menu"
            echo "  --led <layer> <mode>   Set LED directly (skip menu)"
            echo ""
            echo "LED modes (k884x models — most devices):"
            echo "  off                                    Turn LEDs off"
            echo "  backlight white|red|orange|yellow|green|cyan|blue|purple"
            echo "  shock   red|orange|yellow|green|cyan|blue|purple"
            echo "  shock2  red|orange|yellow|green|cyan|blue|purple"
            echo "  press   red|orange|yellow|green|cyan|blue|purple"
            echo ""
            echo "  Layer is 0-based (0, 1, or 2)"
            echo ""
            echo "LED modes (k8890 model — Bluetooth):"
            echo "  <number>   e.g. 1 = steady on"
            echo ""
            echo "Examples:"
            echo "  ./upload.sh config.yaml --led              # Interactive menu"
            echo "  ./upload.sh config.yaml --led 0 backlight white"
            echo "  ./upload.sh config.yaml --led 0 press cyan"
            echo "  ./upload.sh config.yaml --led 0 off"
            exit 0
            ;;
        *)
            if [ -z "$CONFIG_FILE" ]; then
                CONFIG_FILE="$1"
            fi
            shift
            ;;
    esac
done

# Default config file
CONFIG_FILE="${CONFIG_FILE:-micropad-config.yaml}"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ Config file not found: $CONFIG_FILE"
    echo ""
    echo "Usage:"
    echo "  1. Design your config in the web UI (http://localhost:8090)"
    echo "  2. Click '📥 Export YAML' to download the config"
    echo "  3. Run: ./upload.sh <downloaded-file.yaml>"
    echo ""
    echo "With LED:"
    echo "  ./upload.sh config.yaml --led 0 backlight white"
    echo "  ./upload.sh config.yaml --led 0 press cyan"
    echo ""
    echo "Run ./upload.sh --help for more info"
    exit 1
fi

echo "📟 Uploading config to CH57x micropad..."
echo "   Config: $CONFIG_FILE"
if [ "$LED_MODE" = "direct" ]; then
    echo "   LED:    ${LED_ARGS[*]}"
fi
echo ""

# Validate first
echo "🔍 Validating config..."
ch57x-keyboard-tool validate < "$CONFIG_FILE"
echo ""

# Upload
echo "📤 Uploading to device..."
ch57x-keyboard-tool upload < "$CONFIG_FILE"
echo ""

# Extract model from YAML for the --model flag
YAML_MODEL=$(grep '^model:' "$CONFIG_FILE" | awk '{print $2}' | tr -d '\r')
if [ -z "$YAML_MODEL" ]; then
    YAML_MODEL="ch57x-1"
fi

# Set LED
if [ "$LED_MODE" = "interactive" ]; then
    echo "💡 LED Configuration"
    echo "   Model: $YAML_MODEL"
    echo ""

    echo "What would you like the LEDs to do?"
    echo ""
    echo "  1) Turn off"
    echo "  2) Stay on all the time (backlight)"
    echo "  3) Flash when a key is pressed (shock)"
    echo "  4) Flash differently when pressed (shock2)"
    echo "  5) Light up only when pressed (press)"
    echo ""
    read -p "Select [1-5]: " mode_choice

    case "$mode_choice" in
        1)
            LED_ARGS=("0" "off")
            ;;
        2|3|4|5)
            # Select layer
            echo ""
            echo "Which layer? (You have layers 1, 2, 3, 4)"
            echo "  0) Layer 1"
            echo "  1) Layer 2"
            echo "  2) Layer 3"
            echo ""
            read -p "Select [0-2]: " layer

            # Select color
            echo ""
            echo "Pick a color:"
            if [ "$mode_choice" = "2" ]; then
                echo "  1) White (backlight only)"
            fi
            echo "  2) Red"
            echo "  3) Orange"
            echo "  4) Yellow"
            echo "  5) Green"
            echo "  6) Cyan"
            echo "  7) Blue"
            echo "  8) Purple"
            echo ""
            read -p "Select color: " color_choice

            # Map color choice to name
            case "$color_choice" in
                1) color="white" ;;
                2) color="red" ;;
                3) color="orange" ;;
                4) color="yellow" ;;
                5) color="green" ;;
                6) color="cyan" ;;
                7) color="blue" ;;
                8) color="purple" ;;
                *) echo "❌ Invalid color choice"; exit 1 ;;
            esac

            # White only valid for backlight
            if [ "$color" = "white" ] && [ "$mode_choice" != "2" ]; then
                echo "❌ White is only available for Backlight mode"
                exit 1
            fi

            # Map mode choice to mode name
            case "$mode_choice" in
                2) mode="backlight" ;;
                3) mode="shock" ;;
                4) mode="shock2" ;;
                5) mode="press" ;;
            esac

            LED_ARGS=("$layer" "$mode" "$color")
            ;;
        *)
            echo "❌ Invalid choice"
            exit 1
            ;;
    esac

    echo ""
    echo "💡 Setting LED: ${LED_ARGS[*]}..."
    if ch57x-keyboard-tool led --model "$YAML_MODEL" "${LED_ARGS[@]}" 2>&1; then
        echo "✅ LED setting applied successfully"
    else
        echo ""
        echo "⚠️  LED command failed. Your device may not support this mode."
        echo "   Trying simple on/off instead..."
        echo ""
        if ch57x-keyboard-tool led --model "$YAML_MODEL" 1 2>&1; then
            echo "✅ Simple LED mode (steady on) works!"
            echo "   Your device uses simple on/off LED control."
        else
            echo "❌ LED control not supported on this device"
        fi
    fi
    echo ""
elif [ "$LED_MODE" = "direct" ]; then
    echo "💡 Setting LED: ${LED_ARGS[*]}..."
    if ch57x-keyboard-tool led --model "$YAML_MODEL" "${LED_ARGS[@]}" 2>&1; then
        echo "✅ LED setting applied successfully"
    else
        echo "❌ LED command failed"
    fi
    echo ""
fi

echo "✅ Done! Your micropad has been programmed."

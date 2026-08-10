#!/usr/bin/env bash
# Rebuild the TTS environment from scratch. macOS only — the AAC encoding
# uses afconvert, which ships with the OS, so there is no ffmpeg to install.
#
#   bash tools/tts/setup.sh            # default voice: steinn
#   bash tools/tts/setup.sh salka ugla # or fetch several to compare
#
# Neither .venv-tts/ nor tts-models/ is committed (see .gitignore): together
# they are ~490 MB, and this script recreates them in a couple of minutes.
set -euo pipefail

cd "$(dirname "$0")/../.."
VOICES=("${@:-steinn}")

if ! command -v afconvert >/dev/null; then
  echo "afconvert not found. This script needs macOS." >&2
  exit 1
fi

echo "==> python venv"
[ -d .venv-tts ] || python3 -m venv .venv-tts
.venv-tts/bin/python -m pip install --quiet --upgrade pip
.venv-tts/bin/python -m pip install --quiet piper-tts
echo "    piper-tts $(.venv-tts/bin/python -m pip show piper-tts | awk '/^Version/{print $2}')"

echo "==> voices"
mkdir -p tts-models
for v in "${VOICES[@]}"; do
  base="https://huggingface.co/rhasspy/piper-voices/resolve/main/is/is_IS/$v/medium/is_IS-$v-medium.onnx"
  for suffix in "" ".json"; do
    f="tts-models/is_IS-$v-medium.onnx$suffix"
    if [ -f "$f" ]; then
      echo "    have $(basename "$f")"
    else
      echo "    fetching $(basename "$f")"
      curl -sSL --fail -o "$f" "$base$suffix"
    fi
  done
done

echo
echo "Ready. To build the audio pack:"
echo "  node tools/audio-inventory.js --plan .cache/plan.json"
echo "  .venv-tts/bin/python tools/tts/synthesize.py"

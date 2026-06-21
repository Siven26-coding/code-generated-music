# 🎵 Trap Beat Machine

A browser-based Trap Beat Machine built entirely with JavaScript and Tone.js.

No MP3 files.
No WAV samples.
No FL Studio.

Everything is generated in real time using code and the Web Audio API.

---

## 🚀 Features

- Real-time trap beat generation
- Dynamic section changes

  - Intro
  - Verse
  - Hook
  - Drop

- Chord progression system
- Kick drum synthesis
- Snare synthesis
- Hi-hat synthesis
- FFT Audio Visualizer
- Play / Stop controls
- Responsive UI
- Built using Tone.js

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Tone.js
- Web Audio API
- Canvas API

---

## 📸 Preview

![Preview](screenshot.png)

---

## 🎼 Instruments

### PolySynth
Creates melodic chords using a sawtooth oscillator.

### MembraneSynth
Generates kick drums.

### NoiseSynth
Generates snare sounds.

### MetalSynth
Creates hi-hat sounds.

---

## 🎚 Sections

The beat automatically switches between:

1. INTRO
2. VERSE
3. HOOK
4. DROP

Every few measures the arrangement changes to make the beat feel alive.

---

## 📊 Audio Visualizer

A real-time FFT spectrum visualizer is rendered using the Canvas API.

---

## ⚡ How It Works

The application generates sound waves directly inside the browser.

No audio samples are loaded.

All sounds are synthesized using Tone.js and scheduled using Tone.Transport.

The visualizer receives frequency data from Tone.Analyser and renders it to canvas in real time.

---

## Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/trap-beat-machine-js.git
```

Move into the project

```bash
cd trap-beat-machine-js
```

Open:

```bash
index.html
```

Or run using VS Code Live Server.

---

## Future Improvements

- Multiple drum patterns
- Tempo controls
- Beat sequencer
- Bass synthesizer
- Piano roll editor
- BPM slider
- Dark mode
- Download generated audio
- Save custom patterns

---

## Built With ❤️ By

Siven Kanojiya

GitHub:
https://github.com/YOUR_USERNAME

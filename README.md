# 🎙️ Text-To-Speech Converter

A lightweight, elegant web application that converts written text into natural-sounding speech using the native Web Speech API.

[🔗 Live Demo](https://houcemzaier.github.io/Text-To-Speech_Converter_With-JavaScript/) 

---

## 📋 Table of Contents

- [Overview](#overview)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [💡 Usage Guide](#-usage-guide)
- [🔧 Technical Details](#-technical-details)
- [🌐 Browser Compatibility](#-browser-compatibility)
- [🎨 Customization](#-customization)
- [🐛 Troubleshooting](#-troubleshooting)
- [📝 Future Enhancements](#-future-enhancements)
- [📄 License](#-license)

---

## 🎯 Overview

This Text-To-Speech Converter is a modern, user-friendly web application built with pure HTML, CSS, and JavaScript. It leverages the native **Web Speech API** to provide seamless text-to-speech conversion without requiring external libraries or dependencies.

**Key Highlights:**
- ⚡ Zero external dependencies
- 🎨 Modern, responsive UI with Poppins font
- 🔊 Multiple voice options
- ⌨️ Keyboard-friendly interface
- 📱 Works on desktop and tablet devices

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📝 **Text Input** | Write or paste any text into the textarea |
| 🎤 **Voice Selection** | Choose from multiple available system voices |
| ▶️ **Play Button** | Listen to your text with a single click |
| 🔄 **Real-time Voice Switching** | Change voices instantly without interruption |
| ✅ **Input Validation** | Prevents empty text submission |
| 📱 **Responsive Design** | Works seamlessly on desktop and tablets |
| 🎨 **Modern UI** | Clean, contemporary interface with Poppins font |
| ⌨️ **Keyboard Support** | Press Enter to speak |

---

## 🚀 Quick Start

### Prerequisites

- Modern web browser with Web Speech API support (Chrome, Firefox, Safari, Edge, Opera)
- No additional software or packages required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HoucemZaier/Text-To-Speech_Converter_With-JavaScript.git
   cd Text-To-Speech_Converter_With-JavaScript
   ```

2. **Open in browser** - Choose one of these methods:
   
   **Option A: Direct File Opening**
   - Double-click `index.html` in your file explorer
   
   **Option B: Local Server (Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

---

## 📁 Project Structure

```
Text-To-Speech_Converter_With-JavaScript/
├── 📄 index.html          # HTML structure and markup
├── 🎨 style.css           # Styling, layout, and typography (70.6%)
├── 📜 script.js           # Web Speech API logic (14.5%)
├── 🖼️ images/             # UI assets (play button icon)
└── 📖 README.md           # Documentation (this file)
```

### Language Composition
- **CSS**: 70.6% - Comprehensive styling and layout
- **HTML**: 14.9% - Semantic markup structure
- **JavaScript**: 14.5% - Lightweight API integration

### File Details

| File | Purpose | Key Responsibility |
|------|---------|-------------------|
| `index.html` | DOM structure | Semantic HTML5 markup for the interface |
| `script.js` | Logic layer | Web Speech API interactions & event handling |
| `style.css` | Presentation | Modern styling with Google Fonts (Poppins) |
| `images/` | Assets | UI icons (play button) |

---

## 💡 Usage Guide

### Basic Workflow

1. **Enter your text**
   - Click in the text area
   - Type or paste content

2. **Select a voice** (optional)
   - Click the voice dropdown
   - Choose your preferred voice or language

3. **Click "Listen"**
   - Press the play button
   - Or press `Enter` key

4. **Enjoy the audio output**

### Example

```
Input:   "Hello, this is a text-to-speech converter!"
Voice:   Google UK English Female
Result:  Hears the text spoken naturally in the selected voice
```

### Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Speak Text | `Enter` key |
| Change Voice | Dropdown menu |
| Clear Text | Manual selection |

---

## 🔧 Technical Details

### Core Technologies

| Technology | Role | Usage |
|------------|------|-------|
| **HTML5** | Markup | Semantic structure & form elements |
| **CSS3** | Styling | Responsive layout, Google Fonts (Poppins) |
| **JavaScript ES6** | Logic | DOM manipulation, API interaction |
| **Web Speech API** | Speech | Native browser speech synthesis |

### Key JavaScript APIs

#### 1. SpeechSynthesisUtterance
```javascript
let speech = new SpeechSynthesisUtterance();
speech.text = "Your text here";
```
Creates a speech object that holds text and voice properties.

#### 2. Voice Management
```javascript
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Dynamically populate voice dropdown
};
```
Loads available system voices and populates the selector.

#### 3. Speech Synthesis
```javascript
window.speechSynthesis.speak(speech);
```
Triggers the text-to-speech conversion using the selected voice.

### Event Flow

```
User Input (Text + Voice)
        ↓
Input Validation
        ↓
Create SpeechSynthesisUtterance
        ↓
Configure Voice & Settings
        ↓
Call speechSynthesis.speak()
        ↓
Audio Output
```

### Event Listeners

| Event | Trigger | Action |
|-------|---------|--------|
| `click` (button) | User clicks Listen | Speaks text |
| `change` (select) | Voice selection changes | Updates speech voice |
| `voiceschanged` | Voices load | Populates dropdown |
| `keypress` | Enter key pressed | Speaks text |

---

## 🌐 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| ✅ Chrome/Chromium | Full | Best performance |
| ✅ Firefox | Full | Excellent support |
| ✅ Safari | Full | iOS 14.5+ for mobile |
| ✅ Edge | Full | Full compatibility |
| ✅ Opera | Full | Compatible |
| ❌ Internet Explorer | None | Web Speech API unavailable |

**Note**: Available voices vary by operating system and browser installation.

---

## 🎨 Customization

### Change Font Family

Edit `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=FONT_NAME:wght@400;600;700&display=swap" rel="stylesheet">
```

### Modify Application Title

Edit `index.html`:
```html
<h1>Your Custom Title <span>Converter</span></h1>
```

### Adjust Speech Properties

Add to `script.js`:
```javascript
speech.rate = 1.0;      // Speed: 0.1 (slow) to 10 (fast)
speech.pitch = 1.0;     // Pitch: 0 (low) to 2 (high)
speech.volume = 1.0;    // Volume: 0 (silent) to 1 (loud)
```

### Change Color Scheme

Modify variables in `style.css`:
```css
:root {
    --primary-color: #your-color;
    --accent-color: #your-color;
    --background-color: #your-color;
}
```

---

## 🐛 Troubleshooting

### ❓ No voices appear in the dropdown

**Solution:**
- Wait a few seconds for voices to load
- Refresh the browser page
- Ensure Web Speech API is available in your browser

### ❓ Audio is not playing

**Solutions:**
1. Verify your browser supports Web Speech API
2. Check system volume is not muted
3. Ensure text input is not empty
4. Try a different browser

### ❓ Only one voice is available

**Solution:**
This is system-dependent. Different operating systems and browsers have different voice libraries. This is normal behavior.

### ❓ Audio is cutting off

**Solution:**
- Check the text length (very long text may be truncated by the browser)
- Try breaking text into smaller chunks
- Verify your browser supports streaming speech

---

## 📝 Future Enhancements

Planned features for future releases:

- [ ] ⏸️ Pause and Resume functionality
- [ ] 🎚️ Speed and Pitch control sliders
- [ ] 📥 Download audio as MP3 file
- [ ] 📚 Text input history
- [ ] 🌙 Dark mode toggle
- [ ] 🌍 Multi-language support
- [ ] ⏱️ Rate limiting for speech synthesis
- [ ] 🎯 Text highlighting during playback
- [ ] 💾 Save/Load presets
- [ ] 📊 Usage statistics

---

## 📄 License

This project is open source and available under the **MIT License**.

You are free to:
- Use commercially and privately
- Modify and distribute
- Use patent claims

See LICENSE file for details.

---

## 👨‍💻 Author & Credit

**Created by:** Houcem Zaier  
**Purpose:** Educational project for learning Web APIs and modern web development  
**Last Updated:** April 2026

---

## 🔗 Links

- **Live Demo:** [houcemzaier.github.io/Text-To-Speech_Converter_With-JavaScript](https://houcemzaier.github.io/Text-To-Speech_Converter_With-JavaScript/)
- **Repository:** [GitHub](https://github.com/HoucemZaier/Text-To-Speech_Converter_With-JavaScript)
- **Report Issues:** [GitHub Issues](https://github.com/HoucemZaier/Text-To-Speech_Converter_With-JavaScript/issues)

---

## 📸 Preview

![Text-To-Speech Converter Interface](https://github.com/user-attachments/assets/5f96f36b-8fb5-4f04-a610-3844fc8fb9c8)

---

**Made with ❤️ for web developers who love clean code and modern APIs**

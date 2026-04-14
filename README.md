# Text To Speech Converter

A simple, elegant web application that converts written text into spoken audio using the Web Speech API. 

![Project Preview](images/preview.png)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)

---

## 🎯 Overview

This Text To Speech Converter is a lightweight web application that leverages the native Web Speech API to provide users with a seamless experience of converting written text into natural-sounding speech. The application features voice selection, clean UI, and intuitive controls.

---

## ✨ Features

- **Text Input**: Write or paste any text into the textarea
- **Voice Selection**: Choose from multiple available system voices
- **Play Button**: Listen to your text with a single click
- **Real-time Voice Switching**: Change voices instantly
- **Input Validation**: Prevents empty text submission
- **Responsive Design**: Works on desktop and tablet devices
- **Modern UI**: Built with Poppins font family for a contemporary look

---

## 📁 Project Structure

```
text_to_speech/
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and typography
├── images/         # Image assets (play.png icon)
└── README.md       # Documentation (this file)
```

### File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Contains the DOM structure for the converter interface |
| `script.js` | Handles Web Speech API interactions and event listeners |
| `style.css` | Defines visual styling and Poppins font variations |
| `images/` | Stores UI assets (play button icon) |

---

## 🚀 Installation

### Prerequisites
- Modern web browser with Web Speech API support
- No external dependencies required

### Setup

1. **Clone or Download** the project files to your local machine
   ```bash
   git clone <repository-url>
   cd text_to_speech
   ```

2. **Open in Browser** - Simply open `index.html` in your web browser
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Access the Application** - Navigate to `http://localhost:8000` in your browser

---

## 💡 Usage

### Basic Steps

1. **Enter Text**: Click in the textarea and type or paste your text
2. **Select Voice** (Optional): Choose a preferred voice from the dropdown menu
3. **Listen**: Click the "Listen" button or press Enter to hear the text spoken aloud

### Example Workflow

```
1. Write: "Hello, this is a text to speech converter!"
2. Choose: Select "Google UK English Female" from voices
3. Listen: Click the play button
4. Result: Hear the text spoken in the selected voice
```

### Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle Playback | Click the Listen button |
| Change Voice | Select from dropdown menu |

---

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup and form elements
- **CSS3**: Modern styling with Google Fonts (Poppins)
- **JavaScript (ES6)**: DOM manipulation and Web Speech API
- **Web Speech API**: Browser-native speech synthesis

### Key JavaScript Components

#### SpeechSynthesisUtterance
```javascript
let speech = new SpeechSynthesisUtterance();
```
Creates a speech object that holds the text to be spoken and voice properties.

#### Voice Selection
```javascript
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // Populates dropdown with available voices
};
```
Dynamically loads available system voices and populates the voice selector.

#### Text-to-Speech Execution
```javascript
speech.text = text;
window.speechSynthesis.speak(speech);
```
Converts the input text to speech using the selected voice.

### Event Listeners

| Event | Trigger | Action |
|-------|---------|--------|
| `click` (button) | User clicks Listen button | Speaks the textarea text |
| `change` (select) | User changes voice | Updates speech voice property |
| `voiceschanged` | Voices load in browser | Populates voice dropdown |

---

## 🌐 Browser Compatibility

| Browser | Status | Notes |
|---------|--------|-------|
| Chrome/Edge | ✅ Full Support | Best performance |
| Firefox | ✅ Full Support | Compatible |
| Safari | ✅ Full Support | iOS 14.5+ required for iOS |
| Opera | ✅ Full Support | Compatible |
| Internet Explorer | ❌ Not Supported | Web Speech API not available |

**Note**: Supported voices vary by operating system and browser.

---

## 🎨 Customization

### Change Font
Edit the font import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap">
```

### Modify Title
Update the `<h1>` tag in `index.html`:
```html
<h1>Your Custom Title <span>Converter</span></h1>
```

### Adjust Speech Speed/Pitch
Add to `script.js`:
```javascript
speech.rate = 1.0;      // Speed (0.1 to 10)
speech.pitch = 1.0;     // Pitch (0 to 2)
speech.volume = 1.0;    // Volume (0 to 1)
```

---

## 🐛 Troubleshooting

### Issue: No voices appear in dropdown
**Solution**: Wait a moment for voices to load, or refresh the browser

### Issue: Audio not playing
**Solution**: 
- Ensure browser supports Web Speech API
- Check system volume settings
- Verify text input is not empty

### Issue: Only one voice available
**Solution**: This is system-dependent. Different operating systems and browsers have different voice libraries.

---

## 📝 Future Enhancements

- [ ] Pause/Resume functionality
- [ ] Speed and pitch controls
- [ ] Download audio as MP3
- [ ] Text history
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Rate limiting for speech synthesis

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

Created as a mini project for learning Web APIs and modern web development.

---


**Last Updated**: April 2026


try the project : 🔗 [Live Demo](https://houcemzaier.github.io/Text-To-Speech_Converter_With-JavaScript/)

![image](https://github.com/user-attachments/assets/5f96f36b-8fb5-4f04-a610-3844fc8fb9c8)

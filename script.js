let speech = new SpeechSynthesisUtterance();

let voices = [];

document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (text === "") {
        alert("you have to write somthing !");
        return;
    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
});

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name,i))
};

voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text =document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

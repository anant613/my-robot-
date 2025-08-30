// listen.js
export default function createListener(onSpeech) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Your browser does not support Speech Recognition.');
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    onSpeech(transcript); // send the text back to the parent
  };

  recognition.onstart = () => console.log('Listening started...');
  recognition.onend = () => console.log('Listening stopped.');

  // Functions to start and stop listening
  return {
    start: () => recognition.start(),
    stop: () => recognition.stop(),
  };
}

const greetings = ["Hi there! How are you?", "Hey! How’s it going?"];

const conversation = {
  "hello" : greetings,
  "hi": greetings,
  "hey":greetings,
  "how are you": ["I am well, what about you?", "Feeling great! How about you?"],
  "what is your name": ["I am your Jarvis assistant.", "They call me Jarvis."],
  "bye": ["Goodbye! Talk to you later.", "See you soon!"],
  "good morning": ["Good morning sir !!", "How can I serve you today sir?"],
  "good night": ["Good night sir !!", "Ok sir !! Thank you for using me, have a great night"],
  "tell me a joke": [
    "Why don’t skeletons fight each other? Because they don’t have the guts.",
    "Why did the computer go to the doctor? Because it caught a virus!",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What do you call fake spaghetti? An impasta.",
    "Why was the math book sad? Because it had too many problems.",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the robot go on a diet? Because he had too many bytes!"
  ],
  "what are you doing" : ["Just working on improving myself, what about you sir?", "Feeling great and enthusiastic! How about you?"],

  //Hinglish
  "hello bhai": greetings,
};

export function getReply(text) {
  const cleanedText = text.toLowerCase().trim();

  for (let key in conversation) {
    if (cleanedText.includes(key)) {
      const responses = conversation[key];
      return Array.isArray(responses)
        ? responses[Math.floor(Math.random() * responses.length)]
        : responses;
    }
  }

  return "Sorry, I didn't get that,Please try somethinng diferrent";
}

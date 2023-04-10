const chatIcon = document.querySelector('.chat-icon');
const chatBox = document.querySelector('.chat-box');

chatIcon.addEventListener('click', () => {
  chatBox.classList.toggle('open');
});


const botResponse = {
    "hi": "Hello there!",
    "how are you": "I'm doing well, thank you for asking.",
    "what is your name": "My name is ChatBot.",
    "default": "I'm sorry, I don't understand what you mean. Can you please rephrase your question?"
};

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    });
});

function output(input) {
    let response;
    if (botResponse[input]) {
        response = botResponse[input];
    } else {
        response = botResponse["default"];
    }
    const chat = document.getElementById("chat");
    const botBubble = document.createElement("div");
    botBubble.className = "bot-bubble";
    botBubble.innerText = response;
    chat.appendChild(botBubble);
}
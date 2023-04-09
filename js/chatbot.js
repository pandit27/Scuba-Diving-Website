
JavaScript:
```js
const chatbot = document.querySelector(".chatbot");
const chatbotBtnOpen = document.querySelector(".btn-open");
const chatbotBtnClose = document.querySelector(".btn-close");
const chatInput = document.querySelector(".chat-input input");
const chatContainer = document.querySelector(".chat-container");

chatbotBtnOpen.addEventListener("click", () => {
  chatbot.classList.add("active");
});

chatbotBtnClose.addEventListener("click", () => {
  chatbot.classList.remove("active");
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && chatInput.value !== "") {
    const message = chatInput.value;
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message", "user");
    chatMessage.innerHTML = `<p>${message}</p>`;
    chatContainer.appendChild(chatMessage);
    chatInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
    botResponse(message);
  }
});

function botResponse(message) {
  const botMessage = document.createElement("div");
  botMessage.classList.add("chat-message");

  if (message.includes("hi") || message.includes("hello")) {
    botMessage.innerHTML = `<p>Hello there!</p>`;
  } else if (message.includes("how are you")) {
    botMessage.innerHTML = `<p>I'm doing well, thank you for asking!</p>`;
  } else if (message.includes("help")) {
    botMessage.innerHTML = `<p>How can I assist you today?</p>`;
  } else {
    botMessage.innerHTML = `<p>I'm sorry, I didn't understand what you meant. Can you please try rephrasing your message?</p>`;
  }

  setTimeout(() => {
    chatContainer.appendChild(botMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 1000);
}

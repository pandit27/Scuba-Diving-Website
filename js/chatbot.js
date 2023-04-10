// Get the chatbot icon element
const chatbotIcon = document.querySelector('#chatbot-icon');

// Get the chatbot element
const chatbot = document.querySelector('#chatbot');

// Add a click event listener to the chatbot icon element
chatbotIcon.addEventListener('click', () => {
    // Toggle the chatbot element's visibility
    chatbot.classList.toggle('d-none');
});

// Add a click event listener to the close button
document.querySelector('#chatbot-close').addEventListener('click', () => {
    // Hide the chatbot element
    chatbot.classList.add('d-none');
});

// responses
const responses = {
    'hi': 'Hello!',
    'hello': 'Hi there!',
    'how are you': 'I am doing well, thank you!',
    'what is your name': 'My name is Chatbot!',
    'default': 'Sorry, I did not understand. Can you please rephrase your message?'
}

function generateResponse(message) {
    message = message.toLowerCase();
    let response = responses[message] || responses['default'];
    return response;
  }

  function sendMessage() {
    let message = document.getElementById('message-input').value;
    if (message) {
      let chatbox = document.getElementById('chatbox');
      let response = generateResponse(message);
      let messageElement = document.createElement('div');
      messageElement.className = 'user-message';
      messageElement.innerHTML = message;
      chatbox.appendChild(messageElement);
      let responseElement = document.createElement('div');
      responseElement.className = 'chatbot-message';
      responseElement.innerHTML = response;
      chatbox.appendChild(responseElement);
      document.getElementById('message-input').value = '';
    }
  }
  

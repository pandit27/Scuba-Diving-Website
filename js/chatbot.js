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

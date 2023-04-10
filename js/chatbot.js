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

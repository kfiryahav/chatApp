const myForm = document.getElementById('myForm');
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    backdrop: 'static', // Prevent closing on background click and Escape key
});

document.addEventListener("DOMContentLoaded", function () {
    // Show the modal on initial load
    myModal.show();
});

myForm.addEventListener('submit', function (event) {
    const invalidMessage = document.getElementById('invalidMessage');
    const inputValue = document.getElementById('inputValue').value;
    event.preventDefault(); // Prevent the default form submission
    // Check if the form is valid
    if (isNullOrEmpty(inputValue)) {
        // If the form is not valid, trigger Bootstrap's validation styles
        invalidMessage.classList.add('d-block');
    } else {
        invalidMessage.classList.add('d-none');
        // Retrieve the value from the input field
        const username = inputValue;
        socket.emit('join', username);
        // Close the modal
        myModal.hide();
    }
});

function isNullOrEmpty(value) {
    return value == null || value.trim() === '';
}
// Create a Socket.IO instance
const socket = io();

// Listen for 'message' events from the server
socket.on('message', (msg) => {
    // Display received messages in the 'messages' div
    const messagesDiv = document.getElementById('messages');
    const date = new Date();
    // const time = date.toLocaleTimeString();
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messagesDiv.innerHTML += `<p class='border-bottom'>${msg} <br><span class='messageTime'>${time}</span></p>`;
    // Automatically scroll to the bottom of the message display area
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Listen for 'updateUsers' events from the server
socket.on('updateUsers', (users) => {
    // Display the list of active users in the 'userList' ul element
    const userList = document.getElementById('userList');
    userList.innerHTML = users.map(user => `<li class='border-bottom p-2'>${user}</li>`).join('');
});

// Function to send messages to the server
function sendMessage() {
    // Get the message input element
    const messageInput = document.getElementById('messageInput');
    // Trim the message and check if it's not empty
    const message = messageInput.value.trim();
    if (message !== '') {
        // Emit a 'message' event with the trimmed message to the server
        socket.emit('message', message);
        // Clear the message input field
        messageInput.value = '';
    }
}

// Add event listener for key press events on the message input
document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
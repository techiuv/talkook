const socket = io();
let name;

// Prompt user for their name when they connect
name = prompt("Enter your name:");

// Emit the 'user-join' event to the server with the user's name
socket.emit('user-join', name);

const chatForm = document.getElementById('chat-form');
const msgContainer = document.querySelector('.msg-container');
const input = document.getElementById('input-msg');

// Function to create a notification when a user joins
const noticyUserJoin = (userName) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification');
    notificationDiv.innerHTML = `${userName} joined the chat`;
    msgContainer.appendChild(notificationDiv);  // Add to the DOM
};

// Listen for 'user-joined' event from the server, triggered when another user joins
socket.on('user-joined', (userName) => {
    console.log(`${userName} joined the chat`);
    noticyUserJoin(userName);  // Call the notification function with the user's name
});

const noticyUserLeft = (userName) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('notification');
    notificationDiv.innerHTML = `${userName} left the chat`;
    msgContainer.appendChild(notificationDiv);  // Add to the DOM
};

// Listen for 'user-joined' event from the server, triggered when another user joins
socket.on('user-leave', (userName) => {
    console.log(`${userName} left the chat`);
    noticyUserJoin(userName);  // Call the notification function with the user's name
});

document.body.addEventListener('DOMContentLoaded', () => {
    input.focus();
});

// Send message to server
chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value.trim() !== '') {

        sendMsg(input.value.trim())
        msgContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });

    }
})

const sendMsg = (message) => {
    let msg = {
        user: name,
        message: message
    }

    socket.emit('send', msg)  // Send the message to the server
    appendMsg(msg, 'outgoing-msg')  // Append the outgoing message to the DOM
    input.value = ''
}

const appendMsg = (msg, type) => {
    const msgContent = document.createElement('div')
    msgContent.classList.add(type, 'msg')
    msgContent.innerHTML = `
        <span class="absolute -top-5 right-0 pr-[3px] text-lg md:text-sm text-slate-200 sender font-light" >${msg.user}</span>
         <span class="font-normal  messgae-content  text-lg md:text-sm  text-white ">${msg.message}</span>
    `
    msgContainer.appendChild(msgContent)
}

socket.on('message', (msg) => {
    appendMsg(msg, 'incoming-msg')
})


const socket = io()
let name;

do {
    name = prompt("Enter your name:")
} while (!name)

const chatForm = document.getElementById('chat-form')
const msgContainer = document.querySelector('.msg-container')
const input = document.getElementById('input-msg')

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMsg(input.value.trim())
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
        <span class="absolute -top-5 right-0 text-lg md:text-sm text-slate-200 sender font-light" >${msg.user}</span>
         <span class="font-normal  messgae-content  text-lg md:text-sm  text-white ">${msg.message}</span>
    `
    msgContainer.appendChild(msgContent)
}

socket.on('message', (msg) => {
    appendMsg(msg, 'incoming-msg')  
})

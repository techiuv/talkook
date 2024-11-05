const socket = io()
let name;
do {
    name = prompt("Enter your name:")
} while (!name)

const chatForm = document.getElementById('chat-form')
const msgContainer = document.querySelector('.msg-container')
const input  =  document.getElementById('input-msg')

// const chatMessages = document.querySelector('.msg-content')
// const users = document.querySelector('user')

chatForm.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMsg(input.value.trim())
})

sendMsg = (message) => {
    let msg {
        user: name,
        message: message
    }
    
    socket.emit('send', msg)
    appendMsg(msg, 'outgoing')
}

appendMsg = (msg, type) => {
    const msgContent = document.createElement('div')
    msgContent.classList.add(type,'msg')
    msgContent.innerHTML = `
        <span class="absolute -top-10 right-0 text-sm  sender font-light">${msg.user}</span>
        <span class="font-normal  messgae-content  text-lg text-white p-2">${msg.message}</span>
    `
    msgContainer.appendChild(msgContent)

}

socket.on('message', () => {
    appendChild(msg,  'incoming')

})
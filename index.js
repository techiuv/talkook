const express = require('express')
const { dirname } = require('path')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)  

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html') 
})

// Start the server
http.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Socket.io connection event
io.on('connection', (socket) => {
    // console.log('A new connection is made')

    socket.on('send', (msg) => {
        console.log('Received message:', msg)
        socket.broadcast.emit('message', msg)  
    })

 
})

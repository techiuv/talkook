const { log } = require('console')
const express = require('express')
const { dirname } = require('path')
const app = express()
// const io = require('socket.io')
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000


app.use(express.static('public'))


http.listen(PORT, () => {
    console.log(`Server is running on port is ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'pubic/index.html');
})

const io =  require('socket.io')(http)
io.on('connection', (socket) => {
    console.log('a new connection is made')
    socket.on('send', (msg) => {
        // console.log(msg)
        socket.broadcsast.emit('message',msg)
    })
})

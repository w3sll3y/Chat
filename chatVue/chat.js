const { Socket } = require('dgram')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use('/style', express.static(__dirname + '/style'))
app.get('/',(req, res) => res.sendFile(__dirname + '/index.html'))

io.on ('connection', (socket)=>{
    socket.on('message', (msg)=> io.emit('message', msg))
})


http.listen(3030, () => console.log('Ouvindo porta 3030'))
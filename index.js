const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const socketHandler = require('./services/socketHandler'); // Adjust the path accordingly

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

socketHandler(io); // Pass the io object to the socketHandler module

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

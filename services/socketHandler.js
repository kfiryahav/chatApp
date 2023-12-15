const users = {};

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('join', (username) => {
            users[socket.id] = username;
            io.emit('message', `<span class='text-success fw-bold'>${username}</span> has joined the chat!`);
            io.emit('updateUsers', Object.values(users));
        });

        socket.on('message', (msg) => {
            io.emit('message', `<span class='fw-bold'>${users[socket.id]}</span>: ${msg}`);
        });

        socket.on('disconnect', () => {
            const username = users[socket.id];
            delete users[socket.id];
            io.emit('message', `<span class='text-danger'>${username} has left the chat</span>`);
            io.emit('updateUsers', Object.values(users));
        });
    });
};

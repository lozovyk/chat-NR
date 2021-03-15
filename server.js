const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const lobbies = new Map();

app.get('/lobbies', (req, res) => {
  res.json(lobbies);
});

io.on('connection', (socket) => {
  console.log('user socket', socket, ' ', socket.id);
});

server.listen(5555, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Server stream on');
});

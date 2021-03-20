const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
    transports: ['websocket'],
  },
});

app.use(express.json());

const lobbies = new Map();

app.get('/lobbies', (req, res) => {
  res.json(lobbies);
});

app.post('/lobbies', (req, res) => {
  const { lobbieID, userName } = req.body;
  console.log('req body =', req.body);
  if (!lobbies.has(lobbieID)) {
    lobbies.set(
      lobbieID,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ])
    );
  }
  // console.log('lobbie key:', [...lobbies.keys()]);
  res.send();
});

io.on('connection', (socket) => {
  console.log('Connected user; Socket:', socket.id);
});

server.listen(5555, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Server stream on');
});

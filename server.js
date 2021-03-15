const express = require('express');

const app = express();

const lobbies = new Map();

app.get('/users', (req, res) => {
  lobbies.set();
  res.json(lobbies);
});

app.listen(5555, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Server stream on');
});

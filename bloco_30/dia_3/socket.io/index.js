const express = require('express');
const app = express();
const http = require('http').createServer(app);
require('dotenv').config();

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',  // URL aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela URL
  }
});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);

  socket.on('ping', () => {
    console.log(`${socket.id} emitiu um ping!`);
  });
});

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
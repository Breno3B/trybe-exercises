
const express = require('express');
const app = express();
const http = require('http').createServer(app);
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(http, {
    cors: {
        origin: `http://${process.env.HOSTNAME}:${PORT}`,  // URL aceita pelo cors
        methods: ['GET', 'POST'], // Métodos aceitos pela URL
      }
    });

app.use(express.static(__dirname + '/public'));

require('./sockets/ping')(io);
require('./sockets/chat')(io);
    
app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});


http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
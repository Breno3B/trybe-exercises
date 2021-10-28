const express = require('express');
const app = express();
const http = require('http').createServer(app);
require('dotenv').config();


app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
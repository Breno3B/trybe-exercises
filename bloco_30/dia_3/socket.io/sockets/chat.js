module.exports = (io) => io.on('connection', (socket) => {
  // socket.emit: Emite a msg SOMENTE para o socket que se conectou
  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');

  // socket.broadcast.emit: Emite a msg pata TODOS, MENOS para o socket que se conectou
  socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`);

  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);

    // oi.emit: Emite a msg pata TODOS os sockets conectados
    io.emit('serverMessage', message);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });
});
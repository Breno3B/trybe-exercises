// serve para enfatizar que a função io é uma função injetada ao objeto window do DOM da página
const socket = window.io();

const button = document.querySelector('#pingButton');

button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

// cria uma `li` com o conteúdo do parâmetro 'message', coloca dentro da `ul` de `id` #mensagens
const createMessage = (message) => {
  const messageUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messageUl.appendChild(li);
};

// Quando o evento `ola` for emitido pelo servidor, vamos receber a string enviada pelo nosso evento e passar para a função `createMessage` criar a 'Li' na tela.
socket.on('ola', (mensagem) => createMessage(mensagem));

// Quando o evento `pong` for emitido pelo servidor, vamos receber a string enviada pelo nosso evento e passar para a função `createMessage` criar a 'Li' na tela.
socket.on('pong', (mensagem) => createMessage(mensagem));

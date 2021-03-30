// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

const checkIfWon = (betNumber, sortedNumber) => betNumber === sortedNumber;

const raffle = (betNumber, checkIfWon) => {
  const sortedNumber = Math.ceil(Math.random() * 5);
  // console.log(sortedNumber);
  // console.log(betNumber);
  return checkIfWon(betNumber, sortedNumber) ? 'Lucky day, you won!' : 'Try Again!';
    
};

console.log(raffle(3, checkIfWon));

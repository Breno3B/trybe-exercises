const {questionInt, question } = require('readline-sync')

function printResult(userNumber, randomNumber) {
  if (userNumber !== randomNumber) {
    return console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }
  
  return console.log('Parabéns, número correto!');
}

function game(){
  console.log('\nJogo de Adivinhação: Acerte qual foi o número aleatório gerado!\n');
  
  const randomNumber = Math.round( Math.random() * 10 );
  const userNumber = questionInt('Digite um número inteiro entre 0 e 10: ');

  printResult(userNumber, randomNumber);

  const restart = question('\n\nVocê deseja jogar novamente? (Digite s para sim, ou qualquer outra tecla para sair:)\n ');

  if (restart !== 's') {
    return console.log('\nAté breve!');
  }
  
  game();
}

game();

const {questionFloat } = require('readline-sync')

console.log('Vamos calcular seu Índice de Massa Corporal (IMC):\n');

const altura = questionFloat('Informe a sua altura (em Metros): ');
const peso = questionFloat('Informe o seu peso (em Kg): ');

const imc = (peso / Math.pow(altura, 2)).toFixed(2);

// Source: https://stackoverflow.com/questions/5464362/javascript-using-a-condition-in-switch-case/9055603#9055603
switch (true) {
  case ( imc < 18.50):
    console.log(`\nSeu IMC é ${imc} - Abaixo do peso (magreza)\n`);
    break;
  case ( imc >= 18.50 && imc <= 24.90):
    console.log(`\nSeu IMC é ${imc} - Peso normal\n`);
    break;
  case ( imc >= 25.00 && imc <= 29.90):
    console.log(`\nSeu IMC é ${imc} - Acima do peso (sobrepeso)\n`);
    break;
  case ( imc >= 30.00 && imc <= 34.90):
    console.log(`\nSeu IMC é ${imc} - Obesidade grau I\n`);
    break;
  case ( imc >= 35.00 && imc <= 39.90):
    console.log(`\nSeu IMC é ${imc} - Obesidade grau II\n`);
    break;
  case ( imc > 40.00):
    console.log(`\nSeu IMC é ${imc} - Obesidade graus III e IV\n`);
    break;
};


const { questionInt } = require('readline-sync')

console.log('Vamos calcular a velocidade média de um carro numa corrida:\n');

const distancia = questionInt('Informe a distância percorrida (em Metros): ');
const tempo = questionInt('Informe o tempo gasto (em Seg): ');

const velocidadeMedia = (distancia / tempo).toFixed(2);

console.log(`\nA velocidade média é ${velocidadeMedia} m/s\n`);

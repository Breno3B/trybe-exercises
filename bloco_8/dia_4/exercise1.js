const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // Dada uma matriz de matrizes, transforme em uma única matriz.

  const insertElement = (acc, curr) => acc.concat(curr);

  const newArray = arrays.reduce(insertElement, []);

  // console.log(`newArray = ${newArray}`);

  return newArray; 

}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
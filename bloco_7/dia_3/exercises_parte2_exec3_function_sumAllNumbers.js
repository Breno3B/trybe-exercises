const assert = require('assert');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(arr) {
  let arrayNumbersSum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    arrayNumbersSum += arr[index];
  }
  return arrayNumbersSum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
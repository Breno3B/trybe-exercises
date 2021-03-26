const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(arr){
  const arrayWordLenths = [];
  for (let index = 0; index < arr.length; index += 1) {
    arrayWordLenths[index] = arr[index].length;
  }
  return arrayWordLenths;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
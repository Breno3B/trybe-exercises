const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// 0 - Testa se é uma função
assert.strictEqual(typeof(myRemoveWithoutCopy), 'function');

// 1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// 2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// 3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const myList = [1, 2, 3, 4];
myRemoveWithoutCopy(myList,4);
assert.deepStrictEqual(myList, [1, 2, 3]); // Checa os valores do array após remover item
assert.strictEqual(myList.length, 3); // Checa tamanho do array após remover item

// 4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

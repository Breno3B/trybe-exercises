const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Exec 0
assert.strictEqual(typeof(sum), 'function');

// Exec 1
assert.strictEqual(sum(4, 5), 9, 'A soma de 4 + 5 = 9');

// Exec 2
assert.strictEqual(sum(0, 0), 0, 'A soma de 0 + 0 = 0');

// Exec 3
assert.throws(() => {
  sum(4, '5');
});

// assert.doesNotThrow(() => {
//   sum(4, '5');
// });

// Exec 4
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/); // Expressão regular = /^ <string> $/

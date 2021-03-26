const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

// 1 - Compare dois objetos (JSON) para verificar se são idênticos ou não

// assert.equal(obj1, obj2);  // AssertionError [ERR_ASSERTION]:
// assert.notEqual(obj1, obj2);  // OK
// assert.strictEqual(obj1, obj2);  // AssertionError [ERR_ASSERTION]: Values have same structure but are not reference-equal:
// assert.notStrictEqual(obj1, obj2); // OK
// assert.deepStrictEqual(obj1, obj2); // OK
// assert.notDeepStrictEqual(obj1, obj2); // AssertionError [ERR_ASSERTION]: Expected "actual" not to be strictly deep-equal to:

// assert.notDeepStrictEqual(obj1, obj3); // OK
// assert.notDeepStrictEqual(obj2, obj3); // OK
// const assertEqual = require('../assertEqual');
// const head = require('../head');

//Returns the element at Index[0] of the array.

// assertEqual(head(['hello','world']), 'hello');
// assertEqual(head(['lighthouse', 'labs']), 'labs');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

describe("#head", () => {
  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});





// module.exports = assertEqual;
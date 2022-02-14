// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

const assert = require('chai').assert;
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
  it("returns true for [1],[1]", () => {
    assert.strictEqual(eqArrays([1],[1]),true);
  });
});
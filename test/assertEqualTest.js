// const assertEqual = require('../assertEqual');

// //Runs a test to make sure that the input value matches out
// //expected value. If true it returns ✅✅✅. if false ❌❌❌.

// assertEqual(1,1)


// module.exports = assertEqual;

const assert = require('chai').assert;
const assertEqual   = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 1 for 1", () => {
    assert.strictEqual(assertEqual(1,1));
  });
});

describe("#assertEqual", () => {
  it("returns hello for world", () => {
    assert.strictEqual(assertEqual('hello','world'));
  });
});
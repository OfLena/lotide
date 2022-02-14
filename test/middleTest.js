// const assertArraysEqual = require("../assertArraysEqual");
// const middle = require("../middle")

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []

// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [2]); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
});

describe("#middle", () => {
  it("should return [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
});

describe("#middle", () => {
  it("should return [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
});



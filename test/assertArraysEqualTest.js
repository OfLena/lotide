const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['hello'],['hello'])
assertArraysEqual(['1'],['1'])
assertArraysEqual(['hello',2],['hello'])
assertArraysEqual(['1',2,'3'],['1','2',3])

// const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');


// describe("#assertArraysEqual", () => {
//   it("should return [hello] for [hello]", () => {
//     assert.strictEqual(assertArraysEqual(['hello'],['hello']),['hello']);
//   });
// });


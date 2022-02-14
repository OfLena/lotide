// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// module.exports = assertEqual;

const assert = require('chai').assert;
const tail   = require('../tail');



describe("#tail", () => {
  it('Returns the copied array with the first element removed', () => {
    assert.deepEqual(tail(['Hello','Lighthouse','Labs']),['Lighthouse','Labs']);
  });
});
const assertEqual = require('../assertEqual');
const head = require('../head');

//Returns the element at Index[0] of the array.

assertEqual(head(['hello','world']), 'hello');
assertEqual(head(['lighthouse', 'labs']), 'labs');


module.exports = assertEqual;
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['hello'],['hello'])
assertArraysEqual(['1'],['1'])
assertArraysEqual(['hello',2],['hello'])
assertArraysEqual(['1',2,'3'],['1','2',3])



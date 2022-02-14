//Runs a test to make sure that the input value matches out
//expected value. If true it returns ✅✅✅. if false ❌❌❌.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;
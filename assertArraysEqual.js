const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEq = function(actual, expected) {
  let eqArraysResult = eqArrays(actual, expected);
  if (actual === expected) {
    return `👍👍👍${actual} === ${expected}`;
  } else {
    return `👎👎👎Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertArraysEq());


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
  if (eqArrays(actual, expected) === true) {
    console.log(`👍👍👍${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    middleArray = [];
  } else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) - 1]);
    middleArray.push(array[(array.length / 2)]);
  } else if (array.length % 2 === 1) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleArray;
};

assertArraysEq(middle([1]), []); // => []
assertArraysEq(middle([1, 2]), []); // => []

assertArraysEq(middle([1, 2, 3]), [2]); // => [2]
assertArraysEq(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEq(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEq(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
const assertArraysEq = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`👍👍👍${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};



const test1 = ["ramen", "noodles", "mushrooms", "carrots", "ginger"];
const test2 = ["kalyn", "uggs", "you"];
const test3 = [3, "hello", "goodbye"];
const test4 = ["HELLO", "yes", "no"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(test1, word => word[0]);


assertArraysEq(map(test1, word => word[0]), ['r', 'n', 'm', 'c', 'g']);
assertArraysEq(map(test2, word => word[0]), ['g', 'u', 'y']);
assertArraysEq(map(test3, word => word[0]), [3, 'h', 'g']);
assertArraysEq(map(test4, word => word[0]), ['h', 'y', 'n']);
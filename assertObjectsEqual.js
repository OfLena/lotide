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

//create function that takes two objects as arguments.
const eqObjects = function(object1, object2) {
//convert to arrays
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
  //first check is to see if the arrays are the same length.
  if (arr1.length !== arr2.length) {
    return false;
  }
  //initialize for loop to get our iterator.
  for (let i = 0; i < arr1.length; i++) {
    //use the .includes method to see array 2 does not include the elements
    //from arr1.
    if (!arr2.includes(arr1[i])) {
      return false;
    }
      
    //declare a variable that stores Object1s key values
    const value1 = object1[arr1[i]];
    //declare a variable that stores object2s key values
    const value2 = object2[arr1[i]];
      
    //check to see if the variables are arrays. if they are pass them
    //to eqArrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);
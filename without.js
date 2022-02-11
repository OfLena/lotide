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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create a new function that will take in two arguments.
//The first argument will be an array.
//The second argument will be the values we wish to remove from the array.
//Store the values we want to keep in a new empty array.


const without = function(array, values) {
  //create a new empty array to store the values we want to keep.
  let keepArray = [];
  //create a loop to cycle through our arrays.
  for (let i = 0; i < array.length; i++) {
    //if values does include the elements in array
    //push the not included elements in array to our new array.
    if (!values.includes(array[i])) {
      keepArray.push(array[i]);
    }
  }
  return keepArray;
};

assertArraysEq(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]

assertArraysEq(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEq(without([1,2,3,4,5], [3,4,5,6,7,8,9,10]), [1 , 2]);
assertArraysEq(without([1, 2, 4], [1 , '2', '3', 4]), [1]);
assertArraysEq(without(["hello", 1 , 2 , "hooman"], ["hello", 2]), [1, "hooman"]);

//Takes in two arrays and compares them to check for equality.
//First it checks to see if the lengths are the same.
//Then it checks to see if each array element matches the corresponding
//array element.
//Returns a simple True if they match and False if they do not match.


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

module.exports = eqArrays;

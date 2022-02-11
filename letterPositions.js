const letterPositions = function(sentence) {
  const results = {};
  const myString = sentence.replace(/\s/g, "");

  for (let i = 0; i < myString.length; i++) {
    let letter = myString[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

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

assertArraysEq(letterPositions("hello").e, [1]);

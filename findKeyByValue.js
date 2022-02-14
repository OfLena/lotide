const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  
  let keys = Object.keys(object);
  let values = Object.values(object);

  if (!values.includes(value)) {
    return undefined;
  }

  for (let i in keys) {
    if (values[i] === value) {
      return keys[i];
    }
  }
};

module.exports = findKeyByValue;


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

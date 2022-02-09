const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  countingLetters = {}
  for (const letter of letters){
    if (countingLetters.hasOwnProperty(letter)){
      countingLetters[letter] = countingLetters[letter] + 1;
    } else {
      countingLetters[letter] = 1;
    }
    if (letter === ' '){
      delete countingLetters[letter];
    }
  }
  return countingLetters;
}

console.log(countLetters("Lighthouse in the house"));
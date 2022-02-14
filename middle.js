//Middle Takes in an array.
//If the length of the array is odd it outputs the middle element.
//If the length of the array is even it outputs the middle two elements.


const middle = function(array) {
  let evenArray = [];
  let oddArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    evenArray.push(array[(array.length / 2) - 1]);
    evenArray.push(array[(array.length / 2 | 0)]);
    return evenArray;
  } else if (array.length % 2 !== 0) {
    oddArray.push(array[(array.length / 2 | 0)]);
    return oddArray;
  }
};

module.exports = middle;
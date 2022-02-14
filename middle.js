//Middle Takes in an array.
//If the length of the array is odd it outputs the middle element.
//If the length of the array is even it outputs the middle two elements.


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

module.exports = middle;
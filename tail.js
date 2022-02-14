//The tail function makes a copy of the original array
//It then removes the first element from the array.

const tail = function(array) {
  let result = array.slice(1);
  return result;
};

module.exports = tail;
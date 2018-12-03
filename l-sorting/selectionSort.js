// selection sort
// given that this array has no duplicate values

function selectionSort(array) {
  const newArray = [];

  while (array.length !== 0) {
    // first step: look through the array once, find smallest number, add that to new array
    const smallestValue = findSmallest(array);
    newArray.push(smallestValue);
    array = array.filter(e => e !== smallestValue);
  }

  return newArray;
}

// helper function, find smallest number
function findSmallest(array) {
  return array.reduce((a, c) => (a > c) ? c : a);
}

// test
const testArray = [3, 4, 2, 6, 8, 5, 9];
console.log(selectionSort(testArray)); // [2, 3, 4, 5, 6, 8, 9]

const testArrayEmpty = [];
console.log(selectionSort(testArrayEmpty)); // []

const testArrayDups = [1, 1, 4, 5, 5, 3, 2];
console.log(selectionSort(testArrayDups)); // [1, 2, 3, 4, 5]

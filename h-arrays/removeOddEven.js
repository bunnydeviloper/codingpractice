// use array.splice, note: array.splice will modify the original array

function removeOdds (array) {
  return array;
}

function removeEvens (array) {
  return array;
}

const testInput = [1, 2, 3, 4, 5, 6, 9, 11, 12, 14, 15, 20];
const testInputCopy = testInput.slice(); // make a shallow copy

console.log(removeOdds(testInput)); // [2, 4, 6, 12, 14, 20]
console.log(removeEvens(testInputCopy)); // [1, 3, 5, 9, 11, 15]

// use array.splice and array.slice

function removeOdds (array) {
  for (let i = array.length; i >= 0; i--) {
    if (array[i] % 2) array.splice(i, 1);
  }
  return array;
}

// note: since splice method modifies the original array
// we have to make sure to loop backward
// otherwise, if we loop forward, i will be miscounted

function removeEvens (array) {
  return array.filter(e => e % 2 !== 0); // alternative
}

const testInput = [1, 2, 3, 4, 5, 6, 9, 11, 12, 14, 15, 20];
const testInputCopy = testInput.slice(); // make a shallow copy

console.log(removeOdds(testInput)); // [2, 4, 6, 12, 14, 20]
console.log(removeEvens(testInputCopy)); // [1, 3, 5, 9, 11, 15]

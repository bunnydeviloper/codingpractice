// given a sorted array and an interger > 0
// return true if you can find the number

function binarySearchSortedArray (array, num) {
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while(minIndex <= maxIndex) {
    midIndex = Math.floor((maxIndex + minIndex) / 2);
    guessValue = array[midIndex];

    if (guessValue === num) return true;
    else if (guessValue > num) maxIndex = midIndex - 1;
    else minIndex = midIndex + 1;
  }

  return false;
}

const testArraySimple = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12];
console.log(binarySearchSortedArray(testArraySimple, 4)); // true

const testArrayFalse = [];
console.log(binarySearchSortedArray(testArrayFalse, 0)); // false

const testArrayFalse2 =[2, 3, 4];
console.log(binarySearchSortedArray(testArrayFalse2, 0)); // false

const testArrayDups = [3, 5, 9, 9, 12];
console.log(binarySearchSortedArray(testArrayDups, 9)); // true

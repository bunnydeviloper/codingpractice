function twoSum(array, n) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      //
    }
  }

  return array;
}

function twoSumWithObject (array, n) {
  const hashTable = {};

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    const potentialMatch = n - currentValue;
    if (!hashTable[potentialMatch]) {
      hashTable[potentialMatch] = true;
    } else {
      return [currentValue, potentialMatch].sort((a, b) => b - a);
    }
  }

  return [];
}

const testInput = [3, 5, -4, 8, 11, 1, -1, 6]
const testResult = twoSum(testInput, 10);
console.log(testResult);

const testResultWithObject = twoSumWithObject(testInput, 10);
console.log(testResultWithObject);

// TIME: O(nlog(n)) | SPACE: O(1)
const twoSumWithSortedArray = (array, n) => {
  // sort the array, time: O(nlogn)
  array.sort((a, b) => a - b);

  let i = 0;
  let left = array[i];
  let right = array[array.length - 1];

  while (left + right !== n) {
    if (left + right > n) {
      right = array[array.length - 1 - i]; // move right down
    } else {
      left = array[i + 1]; // move left up
    }
    i++;
  }

  return (left + right === n) ? [left, right] : [];
}

const testResultWithSortedArray = twoSumWithSortedArray(testInput, 13);
console.log(testResultWithSortedArray);

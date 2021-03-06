// TIME: O(n^2), SPACE: O(1)
function twoSum(array, n) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === n) {
        return [array[i], array[j]].sort((a, b) => a - b);
      }
    }
  }

  return [];
}

const testInput = [3, 5, -4, 8, 11, 1, -1, 6]
const testResult = twoSum(testInput, 10);
console.log(testResult);

// TIME: O(n) | SPACE: O(n)
function twoSumWithObject (array, n) {
  const hashTable = {};
  const result = [];

  array.map(currentValue => {
    const potentialMatch = n - currentValue;
    if (hashTable[currentValue] !== undefined) {
      // check undefined b/c a 0 value will return falsy
      result.push(hashTable[currentValue], currentValue);
    } else hashTable[potentialMatch] = currentValue;
  });

  return result.sort((a, b) => a - b);
};

const testResultWithObject = twoSumWithObject(testInput, 10);
console.log(testResultWithObject);

// TIME: O(nlog(n)) | SPACE: O(1)
const twoSumWithSortedArray = (array, n) => {
  // sort the array, time: O(nlogn)
  array.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    const currentSum = array[leftIndex] + array[rightIndex];
    if (currentSum === n) {
      return [array[leftIndex], array[rightIndex]];
    } else if (currentSum > n) {
      rightIndex--; // move right down
    } else {
      leftIndex++; // move left up
    }
  }

  return [];
}

const testResultWithSortedArray = twoSumWithSortedArray(testInput, 13);
console.log(testResultWithSortedArray);

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

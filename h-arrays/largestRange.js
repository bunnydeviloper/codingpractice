/*
Write a function that takes in an array of unsorted integers, returns an array of length 2
output array represents the largest range of numbers contained in input array
A range is defined as a set of numbers that come right after each other
(Assume there will only be one largest range)
*/

function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;

  const visited = {};
  array.forEach(e => visited[e] = false);

  for (let e in array) {
    if (visited[e]) continue;
    visited[e] = true;
    let currentLength = 1;
    let left = e - 1;
    let right = +e + 1; // note: need to convert e to integer, otherwise it'll do string concat
    // console.log(`current e: ${e} and left: ${left} and right: ${right}`);

    while (visited[left] === false) { // constant look up in object
      visited[left] = true;
      currentLength++;
      left--;
    }

    while (visited[right] === false) {
      visited[right] = true;
      currentLength++;
      right++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  };

  return bestRange;
}

// Time: O(n), Space: O(n)

const input = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
console.log(largestRange(input)); // [0, 7]
// [0, 1, 2, 3, 4, 5, 6, 7,\\ 10, 11, 12, 15]

function largestRangeWithArraySort (array) {
  array = array.sort((a, b) => a - b); // sorting is O(nlogn) time

  /* TODO: not done...
  let longestLength = 0;
  let currentLength = 1;
  let startingRange = array[0];
  let endingRange;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1] - 1) {
      endingRange = array[i+1];
      currentLength++;
    } else {
      startingRange = array[i+1];
    }
  }
  */
}

console.log(largestRangeWithArraySort(input)); // [0, 7]

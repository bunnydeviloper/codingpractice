// find all triplets sum up to a target value

// TIME: O(n^2), SPACE: O(n)
function threeSum (array, target) {
  // first, sort the array
  array = array.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < array.length - 2; i++) {
    let leftIndex = i + 1;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
      const currentSum = array[i] + array[leftIndex] + array[rightIndex];
      if (currentSum === target) {
        result.push([array[i], array[leftIndex], array[rightIndex]]);
        leftIndex++;
        rightIndex--;
      } else if (currentSum < target) {
        leftIndex++; // move left pointer up
      } else {
        rightIndex--; // move right pointer down
      }
    }
  };

  return result;
}

const testInput = [12, 3, 1, 2, -6, 5, -8, 6];
const testResult = threeSum(testInput, 0);
console.log(testResult);

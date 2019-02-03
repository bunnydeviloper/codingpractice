const testInput = [1, 0, -4, 5, 6, 10, 12]; // unsorted arr

// TIME: O(n), SPACE: O(1)
function findMin (array) {
  if (array.length < 1) return null;
  if (array.length === 1) return array[0];

  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  return min;
}

const testResult = findMin(testInput);
console.log(testResult); // -4

const testInput = [11, 20, -4, 5, 6, 10, 12]; // unsorted arr

// TIME: O(n), SPACE: O(1)
function find2ndMin (array) {
  if (array.length <= 1) return null;
  if (array.length === 2) {
    return (array[0] > array[1]) ? array[0] : array[1];
  }

  let min = array[0];
  let min2 = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min2 = min;
      min = array[i];
    } else if (array[i] < min2) {
      min2 = array[i];
    }
  }

  return min2;
}

const testResult = find2ndMin(testInput);
console.log(testResult); // 5

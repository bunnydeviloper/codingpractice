// Quicksort
// D&C: divide and conquer

function quickSort (array) {
  let lesser = [], greater = [];
  if (array.length < 2) return array; // arrays of length 1 or 0 are already sorted
  else {
    let pivot = array[0];
    const lesser = array.filter(e => e < pivot);
    const greater = array.filter(e => e > pivot);
    return quickSort(lesser).concat([pivot], quickSort(greater));
    // same as: return quickSort(lesser) + [pivot] + quickSort(greater);
  }

}

const testInput = [10, 3, 0, 4, 8, 15];
console.log(quickSort(testInput)); // [0, 3, 4, 8, 10, 15]

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

// Time: Average case: O(nlogn), Worst case: O(n^2)
// to create 'lesser' and greater: O(n) + O(n) = O(2n) => O(n)
// each time you call recursion => increase call stack => O(n)
// total = O(n) * O(n) = O(n^2)
// interpret: total time takes to complete each level * the height of the call stack

// suppose array is already sorted, and you pick the middle element as pivot (best case) => call stack size will be O(log(n))
// total = O(n) * O(log(n)) = O(nlogn)

const testInput = [10, 3, 0, 4, 8, 15];
console.log(quickSort(testInput)); // [0, 3, 4, 8, 10, 15]

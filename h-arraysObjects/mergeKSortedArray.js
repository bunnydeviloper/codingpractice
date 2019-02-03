// Merge K sorted array
// SIMPLE: I: [[1, 3, 5, 7], [2, 4, 6, 8]], O: [1, 2, 3, 4, 5, 6, 7, 8]

// I: [4 arrays inside with average length N]
// O: [... expensive computation]

// Brute force: doing comparisons each iteration: O(N * K * K)
// Concat: concatenating and sorting: O(N * K * log(N*K)))
// Concat: but this is no diff than merging and sorting UNSORTED array

// Use Min Heap:
// TIME: O(N*K*log(K)) | SPACE: O(N*K)
// NK is total # of elems across all array
// log(K) is maximum # of bubble down operations per elem (heap height)

function mergeKSorted (arrays) {
  let result = [];
  let minHeap = [];

  // S1: create a min heap with the first elem from each array
  // (total K elem) to track the smallest number
  // NOTE: store which_array and what_index the elem came from

  return result;
}

let testInput = [
  [5, 6, 8, 10],
  [3, 7, 12, 13],
  [1, 10, 11, 15],
  [2, 4, 9, 14],
];
console.log(mergeKSorted(testInput));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// S2: remove the smallest element from heap (top value)

// S3: increment the elem_index and substitute value at the top
// for the next value in that array

// S4: Bubble down the top value until it finds the correct level


// S5: Repeat S2 - S4 until you reach the end of ONE of the array

// S6: At this point, substitute the value at the top for INFINITY
// NOTE: Infinity will always bubble all the way down

// S7: perform S6 anytime an array runs out of values
// When the top elem of the heap is INFINITY, you're done
// all the numbers are added to the result array


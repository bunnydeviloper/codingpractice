// Credit: https://medium.com/outco/how-to-merge-k-sorted-arrays-c35d87aa298e
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
// --------------------------------------------------


// ------------------- AlL HELPER FUNCTIONS ----------------------

// BINARY MIN HEAP: parents nodes are smaller than both children
// but there is no relationship between siblings nodes
function findMinChildIndex(minHeap, leftChildIndex, rightChildIndex) {
  let minChildIndex;
  let leftChild = minHeap[leftChildIndex];
  let rightChild = minHeap[rightChildIndex];

  if (leftChild !== undefined) {
    if (rightChild === undefined) {
      minChildIndex = leftChildIndex;
    } else {
      minChildIndex = (rightChild.value < leftChild.value)
        ? rightChildIndex
        : leftChildIndex;
    }
  }
  return minChildIndex; // undefined if there's no children
}

function getChildIndices(index) {
  return [(2 * index) + 1, (2 * index) + 2];
}

function bubbleDown (minHeap, index) {
  let currentIndex = index;
  let currentNode = minHeap[currentIndex];
  let [leftChildIndex, rightChildIndex] = getChildIndices(currentIndex);

  let minChildIndex = findMinChildIndex(minHeap, leftChildIndex, rightChildIndex);
  let minChild = (minChildIndex === undefined) ? undefined : minHeap[minChildIndex];

  while(minChild !== undefined && currentNode.value > minChild.value) {
    // swap currentNode and minChildNode
    [minHeap[currentIndex], minHeap[minChildIndex]] = [minHeap[minChildIndex], minHeap[currentIndex]];

    // update currentIndex, repeat bubbling down
    currentIndex = minChildIndex;

    [leftChildIndex, rightChildIndex] = getChildIndices(currentIndex);

    minChildIndex = findMinChildIndex(minHeap, leftChildIndex, rightChildIndex);

    minChild = (minChildIndex === undefined) ? undefined : minHeap[minChildIndex];
  }
}

// calls the bubbleDown fn for every elem in the heap, start from back
function heapify (minHeap) {
  for (let i = minHeap.length - 1; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }
}

// ------------------- MAIN FUNCTION ----------------------
function mergeKSorted (arrays) {
  let result = [];
  let minHeap = []; // array of nodes (objects)

  // S1: create a min heap with the first elem from each array
  // (total K elem) to track the smallest number
  // NOTE: store which_array and what_index the elem came from
  arrays.forEach((arr, arr_index) => {
    minHeap.push({
      arrayIndex: arr_index,
      elemIndex: 0,
      value: arr[0],
    });
  });
  heapify(minHeap); // O(K), helper fn

  while (minHeap[0].value !== Infinity) {
    // S2: add smallest element from heap (top value) to result arr
    let top = minHeap[0];
    result.push(top.value);

    // S3: increment elem_index and substitute top value w/ next value
    top.elemIndex++;

    // if elemIndex is greater than length of arrays at arr_index
    if (top.elemIndex >= arrays[top.arrayIndex].length) {
      // set top value to INFINITY (will bubble all the way down)
      top.value = Infinity;
    } else {
      // else, update top value to reflect the next elem in array
      top.value = arrays[top.arrayIndex][top.elemIndex];
    }

    // S4: Bubble down the top value until it finds the correct level
    bubbleDown(minHeap, 0);
  }
  // S5: Repeat S2 - S4 until you reach the end of ONE of the array

  // S6: finished while loop, top elem of the heap is INFINITY, done
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


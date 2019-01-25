// merge sort: split the array into halves and merge them recursively

function combine(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return [...result, ...left.slice(indexLeft), ...right.slice(indexRight)];
  // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function mergeSort (array) {
  if (array.length === 1) return array;

  const midIndex = Math.floor(array.length / 2);
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);

  return combine(mergeSort(left), mergeSort(right));
}

let test = mergeSort([3, 4, 2, 5, 8, 6, 7, 1]);
console.log('Should be [1, 2, 3, 4, 5, 6, 7, 8]: ', test);

const testInput = [11, 20, -4, 5, 6, 10, 12]; // unsorted arr

// TIME: O(n), SPACE: O(n)
// time analysis for recursive part:
// n (for loop) + 1/2n + 1/4n + 1/8n... = 2n

function findKthMin (array, k) {
  if (array.length < 1 || array.length < k) return null;

  let curr = array[0];
  let newArray = [curr];
  let leftLength = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < curr) {
      newArray.unshift(array[i]);
      leftLength++;
    } else {
      newArray.push(array[i]);
    }
    // no case for array[i] === curr b/c no dups value
  }

  if (leftLength === k) {
    return newArray[leftLength - 1];
  } else if (leftLength > k) { // repeat with left side
    return findKthMin(newArray.slice(0, leftLength), k);
  } else { // repeat with right side
    return findKthMin(newArray.slice(leftLength, array.length), k - leftLength);
  }
}

const testResult = findKthMin(testInput, 3);
console.log(testResult); // 6

console.log(findKthMin(testInput, 5)); // 11
console.log(findKthMin(testInput, 7)); // 20
console.log(findKthMin(testInput.slice(0, 1), 7)); // null

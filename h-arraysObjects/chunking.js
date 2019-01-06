// Array chunking: chunk (split) array into a specific length

function chunkArray (originalArr, len) {
  const chunkedArr = [];

  while (originalArr.length > 0) {
    chunkedArr.push(originalArr.slice(0, len));
    originalArr = originalArr.slice(len);
  }

  return chunkedArr;
}

const test = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(test); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const test2 = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
console.log(test2); // [[1, 2], [3, 4], [5, 6], [7, 8], [9]]

// do reverse: take a chunked array and flatten it

function flattenArray (chunkedArr) {
  return [].concat(...chunkedArr);

  // return chunkedArr.reduce((accum, curr) => accum.concat(curr));
}

const flat = flattenArray([[1, 2], [3, 4], [5]]);
console.log(flat); // [1, 2, 3, 4, 5]

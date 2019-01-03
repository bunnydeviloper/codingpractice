function rotateLeft(a, d) { // node: d is always less than a.length
  let result = a.slice(d);
  for (let i=0; i< d; i++) {
    result.push(a[i]);
  }
  return result;
}

console.log(rotateLeft([1,2,3,4,5], 3)); // [4, 5, 1, 2, 3]
console.log(rotateLeft([6,7,8,5], 3)); // [5, 6, 7, 8]

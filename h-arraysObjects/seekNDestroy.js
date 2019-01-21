// remove from the array whatever is in the following arguments
// return the leftover values numbers in an array

function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)); // [3, 4, 'hello']

function seekAndDestroy2() {
  const args = Array.from(arguments); // create an array from all the args

  function filteredArray(arr) {
    return args.indexOf(arr) === -1; // return true if NOT in array
  }

  return args[0].filter(filteredArray);
}
console.log(seekAndDestroy2([3, 4, 4, 6, 'hi'], 'hi', 2)); // [3, 4, 4, 6]

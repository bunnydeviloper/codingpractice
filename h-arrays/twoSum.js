// Find all pairs that sum to a target value
function twoSum(array, target) {
  let result = [];
  let obj = {};

  array.map(e => {
    if (obj[e] !== undefined) result.push([obj[e], e]); // check undefined b/c a 0 value will return falsy
    else obj[target - e] = e;
  });
  return result;
}

// O(n) time
// O(n) space???

console.log(twoSum([7, 0, -4, 5, 2, 3], 5)); // [[0, 5], [2, 3]]

// use two loops instead of object
function twoSum2(array, target) {
  let result = [];

  for (let i=0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      if (array[j] === target - array[i]) result.push([array[i], array[j]]);
    }
  }
  return result;
}
// time: O(n^2)
// space: ?
console.log(twoSum2([7, 0, -4, 5, 2, 3], 5)); // [[0, 5], [2, 3]]

function twoProduct (array) {
  let maxProduct = 0;
  for (let i=0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      let product = array[i] * array[j];
      if (product > maxProduct) maxProduct = product;
    }
  }
  return maxProduct;
  // time: O(n^2), double for loop

  /* using an array to store all the products and then find the max of product array
  let productArr = [];
  for (let i=0; i < array.length; i++) {
    for (let j=i+1; j < array.length; j++) {
      productArr.push(array[i] * array[j]);
    }
  }
  // console.log(productArr);
  return Math.max(...productArr);;
  */
}
const test = [7, 0, -4, 5, 2, 3];
console.log(twoProduct(test)); // 35

// using array.sort() method
function twoProductSort (array) {
  array = array.sort(); // this will sort smallest to highest
  return array[array.length-1] * array[array.length-2];
}
// time: O(n log n) b/c of the sort method

console.log(twoProductSort(test)); // 35

// using only one loop, but keep comparing highest number
function twoProductOptimal (array) {
  /*
  const twoSum = (arr) => {
    let highestInt = 0;
    let nextHighestInt = 0;
    for (let i=0; i<arr.length; i++) {
      if (arr[i] > highestInt) {
        nextHighestInt = highestInt;
        highestInt = arr[i];
      } else if (arr[i] > nextHighestInt) {
        nextHighestInt = arr[i];
      } else {
        continue;
      }
    }
    return highestInt * nextHighestInt;
  }
  // time: O(n) b/c we only loop once
  */

  let max = Math.max(...array);
  array.splice(array.indexOf(max), 1); // remove the max element
  return max * Math.max(...array);
}
// time: O(n) ? , b/c Math.max need to loop once to find the max value

console.log(twoProductOptimal(test)); // 35

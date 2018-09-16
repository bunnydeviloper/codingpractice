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


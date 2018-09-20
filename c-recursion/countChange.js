// given coins {50, 25, 10, 5, 1}, how many ways are there of making changes


// calculate the number of ways of represent n in a sum of k(s) integers
function splitSum(total, coinsArray) {
  if (total === 0) return 1;
  // if (total < coinsArray[0] || coinsArray.length === 0) return 0;
  console.log('coins array ', coinsArray);
  if (coinsArray.length === 0 || total < coinsArray[0]) return 0;
  return splitSum(total - coinsArray[0], coinsArray) + splitSum(total, coinsArray.splice(0, 1));
}

console.log(splitSum(8, [1, 3, 5])); // 8 (ways)
console.log(splitSum(10, [2, 5])); // 2 (ways)
console.log(splitSum(0, [2, 5])); // 0 (ways)
console.log(splitSum(10, [])); // 0 (ways)

/*
const countChange = (amount, list) => {
  if (amount < 0 || list.length === 0) return 0;
  if (amount === 0) return 1;
  return countChange(amount, list.slice(1)) + countChange(amount - list[0], list);

};

console.log('Number of ways to split 10 cents: ', countChange(10, [10, 5, 1]));
console.log('Number of ways to split 24 cents: ', countChange(24, [25, 10, 5, 1]));
console.log('Number of ways to split 8 cents: ', countChange(8, [10, 5, 1]));
console.log('Number of ways to split 30 cents: ', countChange(30, [25, 10, 5, 1]));
*/

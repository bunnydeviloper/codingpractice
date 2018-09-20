// given coins {50, 25, 10, 5, 1}, how many ways are there of making changes


// calculate the number of ways to represent n as a sum of multiple integers from a list
// note: n is an integer >= 1, coinsArray is a list containing integers >= 1, list doesn't have to be sorted
function splitSum(total, coinsArray) {
  if (coinsArray.length === 0 || total < 0) return 0;
  if (total === 0) return 1;
  return splitSum(total - coinsArray[0], coinsArray) + splitSum(total, coinsArray.slice(1));
}

console.log(splitSum(8, [5, 1, 3])); // 5 (ways)
console.log(splitSum(10, [2, 5])); // 2 (ways)
console.log(splitSum(10, [])); // 0 (way)
console.log(splitSum(10, [15, 20])); // 0 (way)

console.log(splitSum(0, [2, 5])); // should be 0 (way) but showing 1 (way)

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

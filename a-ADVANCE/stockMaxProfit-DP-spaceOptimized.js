// O(nk) time | O(n) space

function maxProfit (prices, k) {
  if (prices.length === 0) return 0;

  let oddRow = prices.map(e => e = 0);
  let evenRow = prices.map(e => e = 0);
  let current = oddRow;
  let previous = evenRow;

}

let input = [2, 10, 5, 20, 30, 15];
let result = maxProfit(input, 2);
console.log('result: ', result);

input = [5, 11, 3, 50, 60, 90];
result = maxProfit(input, 2);
console.log('result: ', result);

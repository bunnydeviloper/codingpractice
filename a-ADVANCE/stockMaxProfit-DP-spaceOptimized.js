// O(nk) time | O(n) space

function maxProfit (prices, k) {
  if (prices.length === 0) return 0;

  let oddRow = prices.map(e => e = 0);
  let evenRow = prices.map(e => e = 0);
  let current = oddRow;
  let previous = evenRow;

  for (let t = 1; t <=k; t++) {
    let maxThusFar = -Infinity;

    if (t % 2 === 1) { // odd
      current = oddRow;
      previous = evenRow;
    } else { // even
      current = evenRow;
      previous = oddRow;
    }

    for (let d = 0; d < prices.length; d++) {
      if (t === 0 || d === 0) current[d] = 0;
      else {
        maxThusFar = Math.max(maxThusFar, previous[d-1] - prices[d-1]);
        // console.log(maxThusFar);
        current[d] = Math.max(current[d-1], prices[d] + maxThusFar);
      }
      console.log(current);
    }
  }
  // console.log(oddRow);
  // console.log(evenRow);

  return (k % 2 === 0) ? evenRow[evenRow.length-1] : oddRow[oddRow.length-1];
}

let input = [2, 10, 5, 20, 30, 15];
let result = maxProfit(input, 2);
console.log('result: ', result);

input = [5, 11, 3, 50, 60, 90];
result = maxProfit(input, 2);
console.log('result: ', result);

/*
Max profit with K transactions
You are given an array of integers representing the prices of a single
stock on various dayIndexs (each index in the array represents a diferent dayIndex).
You are also given an integer k, which represents the number of transactions
you are allowed to make. One transaction consists of buying the stock
on a given dayIndex and selling it on another, later dayIndex.

Write a function that returns the maximum profit that you can make
buying and selling the stock, given k transactions. Note that you can
only hold 1 share of the stock at a time: in other words, you cannot
buy more than 1 share of the stock on any given dayIndex, and you cannot
buy a share of the stock if you are still holding another share.

Sample input: [5, 11, 3, 50, 60, 90], 2
Sample output: 93 (buy: 5, sell: 11, buy: 3, sell: 90)
*/

const inputPrices = [5, 11, 3, 50, 60, 90];

function maxProfitWithKTransactions(prices, k) {
  if (prices.length === 0) return 0;

  let profitMatrix = [];
  for (let tIndex = 0; tIndex <= k; tIndex++) {
    let maxThusFar = -Infinity;
    profitMatrix.push([]); // set up inner loop for matrix

    for (let dayIndex = 0; dayIndex < prices.length; dayIndex++) {
      if (tIndex === 0 || dayIndex === 0) {
        // top row (0 transaction to start) and left-most row (first stock to start)
        // values are always 0 b/c you have to buy a stock first to make a sell->profit
        profitMatrix[tIndex][dayIndex] = 0; // 0 profit

      } else {
        // calculate maxThusFar so that we can calculate current cell's value
        maxThusFar = Math.max(maxThusFar, profitMatrix[tIndex-1][dayIndex-1] - prices[dayIndex-1]);
        console.log('maxThusfar: ', maxThusFar);

        // current cell value is Math.max(profit-of-prev-day OR today-selling-price-plus-maxThusFar)
        profitMatrix[tIndex][dayIndex] = Math.max(profitMatrix[tIndex][dayIndex-1], prices[dayIndex] + maxThusFar);

        console.log('profitMatrix so far: \n', profitMatrix);
      }
    }
  }
  return profitMatrix[k][prices.length-1]; // DP grid result always the value of last cell in matrix
}

// O(nk) time where n is length of prices array and k is number of transactions
// O(nk) space since we're making the 2D array (matrix)

const result = maxProfitWithKTransactions(inputPrices, 2);
console.log(result); // 93

// NOTE: maxThusFar is current-maxThusFar OR
// max-profit-of-any-previous-day-(w-1-less-transaction)-minus-that-day's-selling-price
// because you're gaining profit for that day, but also buy that same stock to sell today

// in a sense: maxThusFar is the maximum trade-off (lost) from buying particular day's stock
// at first, maxThusFar will be negative, but slowly rise to positive when you make more $$

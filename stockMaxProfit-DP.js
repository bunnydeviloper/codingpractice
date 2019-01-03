/*
Max profit with K transactions
You are given an array of integers representing the prices of a single
stock on various days (each index in the array represents a diferent day).
You are also given an integer k, which represents the number of transactions
you are allowed to make. One transaction consists of buying the stock
on a given day and selling it on another, later day.

Write a function that returns the maximum profit that you can make
buying and selling the stock, given k transactions. Note that you can
only hold 1 share of the stock at a time: in other words, you cannot
buy more than 1 share of the stock on any given day, and you cannot
buy a share of the stock if you are still holding another share.

Sample input: [5, 11, 3, 50, 60, 90], 2
Sample output: 93 (buy: 5, sell: 11, buy: 3, sell: 90)
*/

function makeGrid(prices, k) {
  let result = [];

  for (let i = 0; i < k; i++) {
    result.push([]);
    for (let j = 0; j < prices.length; j++) {
      result[i][j] = 0;
    }
  }
  // console.log(result);
  return result;
}

const inputPrices = [5, 11, 3, 50, 60, 90];
makeGrid(inputPrices, 3);

function maxProfitWithKTransactions(prices, k) {
  if (prices.length === 0) return 0;

  // make a 2D array for our prices and k
  let profitMatrix = makeGrid(prices, k+1);
}


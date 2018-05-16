// given coins {50, 25, 10, 5, 1}, how many ways are there of making changes

const countChange = (amount, list) => {
  if (amount < 0 || list.length === 0) return 0;
  if (amount === 0) return 1;
  return countChange(amount, list.slice(1)) + countChange(amount - list[0], list); 

};

console.log('Number of ways to split 10 cents: ', countChange(10, [10, 5, 1]));
console.log('Number of ways to split 24 cents: ', countChange(24, [25, 10, 5, 1]));
console.log('Number of ways to split 8 cents: ', countChange(8, [10, 5, 1]));
console.log('Number of ways to split 30 cents: ', countChange(30, [25, 10, 5, 1]));

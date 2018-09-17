const factorial = (n, list={}) => {
  if (n === 0) {
    list[n] = 1;
    return 1;
  }
  list[n] = n * factorial(n-1, list);
  return list[n];
};

console.log('factorial of 4 is ', factorial(4));
console.log('factorial of 3 is ', factorial(3));
console.log('factorial of 0 is ', factorial(0));
console.log('factorial of 10 is ', factorial(10));

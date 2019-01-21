// pass in a number to loop up to and
// add all of the prime numbers
// Note: a prime number is a whole number > 1 whose only factors are 1 and itself

function isPrime(n) {
  if (n > 1) {
    if (n === 2) return true;

    for (let x = 2; x < n; x++) {
      if (n % x === 0) return false;
    }
    return true;
  }
  else return false;
}

console.log('isPrime(0): ', isPrime(0)); // false
console.log('isPrime(3): ', isPrime(3)); // true
console.log('isPrime(9): ', isPrime(9)); // false

function sumAllPrimes(num) {
  let total = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) total += i;
  }
  return total;
}

console.log(sumAllPrimes(10)); // 2 + 3 + 5 + 7 = 17
console.log(sumAllPrimes(100)); // 1060

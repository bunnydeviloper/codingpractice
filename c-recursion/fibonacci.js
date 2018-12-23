// FIB: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// Simple Fibbo:
const fib = (n) => {
  if (n < 2) return n; // same as: if n===1 return 1; if n===0 return 0
  return fib(n-1) + fib(n-2);
}
console.log(fib(5)); // 5
console.log(fib(0)); // 0
console.log(fib(6)); // 8
console.log(fib(2)); // 1

// note: if you start counting first elem as 1...
const getNthFib = (n) => {
  if (n === 2) return 1;
  else if (n === 1) return 0;
  else return getNthFib(n-1) + getNthFib(n-2);
};

console.log(getNthFib(5)); // 3
console.log(getNthFib(6)); // 5
console.log(getNthFib(2)); // 1
// console.log(getNthFib(0)); // can't use

// Both fib() and getNthFib() analysis: Time: O(2^n) | Space: O(n)

// Improve: Time: O(n) | Space: O(n)
function getNthFibIMP (n, memoize = {1: 0, 2: 1} /* count 1st elem as 1 */) {
  // if (Object.keys(memoize).includes(n)) return memoize[n];
  console.log(memoize);
  if (memoize[n]) return memoize[n];
  else {
    memoize[n] = getNthFibIMP(n-1, memoize) + getNthFibIMP(n-2, memoize);
    console.log(memoize[n]);
    return memoize[n];
  }
}
console.log(getNthFibIMP(7)); // 8
// console.log(getNthFibIMP(2)); // 1


// Improve2: Time: O(n) | Space: O(1)


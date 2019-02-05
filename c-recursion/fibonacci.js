// FIB: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// Simple Fibbo:
const fib = (n) => {
  if (n < 2) return n; // same as: if n===1 return 1; if n===0 return 0
  return fib(n-1) + fib(n-2);
}
console.log('simple: ', fib(5)); // 5
console.log('simple: ', fib(0)); // 0
console.log('simple: ', fib(6)); // 8
console.log('simple: ', fib(2)); // 1

// Both fib() and getNthFib() analysis: Time: O(2^n) | Space: O(n)

// note: if you start counting first elem as 1...
// TIME: O(2^n) | SPACE: O(n) b/c of the call stack
const getNthFib = (n) => {
  if (n === 2) return 1;
  else if (n === 1) return 0;
  else return getNthFib(n-1) + getNthFib(n-2);
};

console.log(getNthFib(5)); // 3
console.log(getNthFib(6)); // 5
console.log(getNthFib(2)); // 1
// console.log(getNthFib(0)); // can't use

// Improve: Time: O(n) | Space: O(n)
function getNthFibIMP (n, memoize = {1: 0, 2: 1} /* count 1st elem as 1 */) {
  // console.log(memoize);
  if (n <= 1) return 0;
  if (memoize[n]) return memoize[n]; // same as `if (n in memoize)`
  memoize[n] = getNthFibIMP(n-1, memoize) + getNthFibIMP(n-2, memoize);
  return memoize[n];
}

console.log('improve: ', getNthFibIMP(7)); // 8
console.log('improve: ', getNthFibIMP(2)); // 1

// Improve2: Time: O(n) | Space: O(1)
function getNthFibSaveSpace (n) {
  const lastTwo = [0, 1];
  let counter = 3;

  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return (n > 1) ? lastTwo[1] : lastTwo[0];
}

console.log('save space: ', getNthFibSaveSpace(7)); // 8
console.log('save space: ', getNthFibSaveSpace(8)); // 13

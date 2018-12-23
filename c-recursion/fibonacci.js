// Time: O(2^n) | Space: O(n)
const getNthFib = (n) => {
  if (n < 2) return n;
  return getNthFib(n-1) + getNthFib(n-2);

  /*
  if (n === 1) return 1;
  else if (n === 0) return 0;
  else return getNthFib(n-1) + getNthFib(n-2);
  */
};

// FIB: 0, 1, 1, 2, 3, 5, 8
console.log(getNthFib(5)); // 5
console.log(getNthFib(0)); // 0
console.log(getNthFib(6)); // 8
console.log(getNthFib(2)); // 1


// Time: O(n) | Space: O(n)


// Time: O(n) | Space: O(1)


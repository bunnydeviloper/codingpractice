// You are climbing a staircase. Each time you can go 1 step or 2 steps
// The staircase has n steps, count the number of ways you can climb

function climbStair (steps) {
  if (steps <= 1) return 1;
  // if (steps <= 2) return steps; // alternative
  return climbStair(steps - 1) + climbStair(steps - 2);
}
// Time: O(2^n) => to reduce this, use memoization

console.log(climbStair(1)); // 1 ways: 1
console.log(climbStair(2)); // 2 ways: 1-1, 2
console.log(climbStair(3)); // 3 ways: 1-1-1, 1-2, 2-1
console.log(climbStair(5)); // 8 ways: 1-1-1-1-1, 1-1-1-2, 1-2-2, 1-2-1-1, 1-1-2-1, 2-1-1-1, 2-2-1, 2-1-2

function climbStairOptimal (steps) {
  let lastTwo = [1, 2];
  let counter = 3;
  while (steps >= counter) {
    const next = climbStairOptimal(steps - 1) + climbStairOptimal(steps - 2);
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = next;
    counter++;
  }
  return (steps > 1) ? lastTwo[1] : lastTwo[0]
}
// Time: O(n), Space: O(1)

console.log(climbStairOptimal(1)); // 1
console.log(climbStairOptimal(2)); // 2
console.log(climbStairOptimal(3)); // 3
console.log(climbStairOptimal(4)); // 5
console.log(climbStairOptimal(5)); // 8

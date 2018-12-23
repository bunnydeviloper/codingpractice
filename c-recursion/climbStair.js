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

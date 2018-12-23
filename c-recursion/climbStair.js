// You are climbing a staircase. Each time you can go 1 step or 2 steps
// The staircase has n steps, count the number of ways you can climb

function climbStair (steps) {
  if (steps <= 1) return 1;
  return climbStair(steps - 1) + climbStair(steps - 2);
}

console.log(climbStair(3)); // 3 ways: 1-1-1, 1-2, 2-1
console.log(climbStair(5)); // 8 ways: 1-1-1-1-1, 1-1-1-2, 1-2-2, 1-2-1-1, 1-1-2-1, 2-1-1-1, 2-2-1, 2-1-2

function repeatedString(s, n) {
  if (s === "a") return n;
  let counter = 0;
  let repeatCount = Math.ceil(n / s.length);
  s = s.repeat(repeatCount);
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) === "a") counter++;
  }
  return counter;
}

console.log(repeatedString("a", 1000000000)); // 1000000000
console.log(repeatedString("abcda", 10)); // 3
console.log(repeatedString("aba", 10)); // 7

// as n gets very large (10^12), we will encounter error, so there's a more optimized version
// note: from my understanding, this version is still O(n), but it depends on the size of s instead of n
function countA(s) {
  let array = s.split("");
  let count = 0;
  array.forEach(e => { if (e === "a") count++ });
  return count;
}
function repeatedString2(s, n) {
  let counter = 0;
  let repeat = Math.floor(n / s.length);
  let remain = n % s.length;
  counter = countA(s)*repeat + countA(s.substring(0, remain));
  return counter;
}
console.log(repeatedString2("aba", 1000000000)); // 666666667
console.log(repeatedString2("abcdefg", 1000000000)); // 142857143

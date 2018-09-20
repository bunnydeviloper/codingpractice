// find the length of the longest increasing sub-sequence without duplicate

// ignore capitallization for now
function longestSub (s) {
  s = s.toUpperCase();
  let maxLength = 0;
  let len = s.length;
  let halfLen = len / 2;
  console.log(len);

  for (let i = 0; i < s.length; i++) {
    // TODO:
  }

  return maxLength;
}

console.log(longestSub("ABCADEFGD")); // expect 7
console.log(longestSub("ABCCBA")); // expect 3
console.log(longestSub("BBBB")); // expect 1
console.log(longestSub("ABCD")); // expect 4
console.log(longestSub("")); // expect 0
console.log(longestSub("ABDEFGABEF")); // expect 6


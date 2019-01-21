// given a string, return the first repeating character

function firstRepeatingChar (s) {
  if (s.length < 1) return null; // empty string

  let temp = {};
  for (let i = 0; i < s.length; i++) {
    if (temp[s[i]]) return s[i];
    temp[s[i]] = 1;
  }

  return null; // couldn't find any repeating character
}

console.log(firstRepeatingChar('abcdadc')); // 'a'
console.log(firstRepeatingChar('cabcdadc')); // 'c'
console.log(firstRepeatingChar('abcd')); // null
console.log(firstRepeatingChar('')); // null

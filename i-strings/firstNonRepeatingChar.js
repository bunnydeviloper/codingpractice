// given a string, return the first non-repeating char

function firstNonRepeatingChar (s) {
  if (s.length < 1) return null;

  let temp = [];
  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) temp.push(s[i]);
    else temp = temp.filter(e => e !== s[i]);
  }

  return (temp.length === 0) ? null : temp[0];
}

console.log(firstNonRepeatingChar('hello')); // 'h'
console.log(firstNonRepeatingChar('abcabc')); // null
console.log(firstNonRepeatingChar('abcdabc')); // 'd'

// write a fn to check if input string is a palindrome
// Easy version: reverse everything, ignore spaces
function palindrome (s) {
  s = s.toLowerCase().replace(/\s/g, ''); // regrex remove spaces
  return s === s.split('').reverse().join('');
}

console.log(palindrome("no x in nixon")); // true
console.log(palindrome("race cr")); // false
console.log(palindrome("Amor Roma")); // true

// Hard version: ignore punctuation: ";", ":", ",", " ", "!", "?", "-"...
// use string regrex:

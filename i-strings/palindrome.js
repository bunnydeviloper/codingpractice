// write a fn to check if input string is a palindrome
// Easy version: reverse everything, ignore spaces
function palindrome (s) {
  let array = [];
  s = s.toLowerCase();
  for (let i=0; i < s.length; i++) {
    if (s.charAt(i) !== " ") array.push(s.charAt(i));
  }

  console.log(array);
  //
}

console.log(palindrome("no x in nixon")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("Amor Roma")); // true

// Hard version: ignore capitalization, ignore punctuation: ";", ":", ",", " ", "!", "?", "-"...

// given a string, find the longest palindrome

function centeredPalindrome (left, right, string) {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    // expand in both directions
    left--;
    right++;
  }
  return string.slice(left + 1, right);
}

function longestPalindrome (string) {
  if (string.length < 1) return;
  string = string.replace(/\s/g, '').toLowerCase(); // remove whitespaces

  let longestPal = "";
  for (let i = 0; i < string.length -1; i++) {
    let evenPalindrome = centeredPalindrome(i, i+1, string);
    let oddPalindrome = centeredPalindrome(i, i, string);

    // if (oddPalindrome.length > 1) console.log('oddPal: ', oddPalindrome);
    // if (evenPalindrome.length > 1) console.log('evenPal: ', evenPalindrome);

    if (evenPalindrome.length > longestPal.length) longestPal = evenPalindrome;
    if (oddPalindrome.length > longestPal.length) longestPal = oddPalindrome;
  }

  return longestPal;
}

let result = longestPalindrome('fjasfNoonFsasf');
console.log('Expect result to be asfnoonfsa: ', result);

result = longestPalindrome('redderrr');
console.log('Expect result to be redder: ', result);

result = longestPalindrome('nan noOn is rAdar  '); // need to trim spaces
console.log('Expect result to be radar: ', result);

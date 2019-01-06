// change every letter of the string to the one that follows it
// also, capitalize the vowels

function letterChanges (string) {
  // 1st step: only convert a-z letters to the one that follows it
  let newString = string.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z' || char === 'Z') return 'a';
    else return String.fromCharCode(char.charCodeAt() + 1);
  });

  // 2nd step: capitalize all vowels and then return string
  return newString.replace(/a|i|e|u|o/gi, (vowel) => vowel.toUpperCase());
}

const test = letterChanges('hello');
console.log(test); // 'Ifmmp'

const test2 = letterChanges('zun$E');
console.log(test2); // 'AvO$f'

/*
SIMPLE SOLUTION: doesn't ignore special char
doesn't go back to 'a' when we're at letter 'z'
doesn't capitalize correct vowels

let resultString = '';
for (let i = 0; i < string.length; i++) {
  resultString += String.fromCharCode(string[i].charCodeAt() + 1);
}
return resultString;
*/

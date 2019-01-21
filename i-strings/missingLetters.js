// find the missing letter in the passed letter range and return it
// assume there's only one char missing
// if all letters are present, return undefined

function missingLetters(s) {
  let compare = s.charCodeAt(0);
  let missing;

  s.split('').map((char, i) => {
    if (s.charCodeAt(i) === compare) compare++;
    else missing = String.fromCharCode(compare);
  });

  return missing;
}

console.log(missingLetters('abce')) // 'd'
console.log(missingLetters('abcdefghjklmno')) // 'i'
console.log(missingLetters('abcdefghijklmnopqrstuvwxyz')) // undefined

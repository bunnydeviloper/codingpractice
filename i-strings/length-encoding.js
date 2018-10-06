// take in a string, return an encoded string based on duplicate characters

function lengthEncode (s) {
  let count = 1;
  let newStr = s.charAt(0) + count;
  console.log(newStr);

  for (let index in s) {
    // todo
  }
  return newStr;
}

console.log(lengthEncode("wwabbbc")); // w2a1b3c1
console.log(lengthEncode("???abcdddddee")); // ?3a1b1c1d5e2

// DECODE: take in an encoded string, and decypted it to the original string

function lengthDecode (s) {
  let orgStr = "";
  return orgStr;
}

console.log(lengthEncode("w2a1b3c1")); // wwabbbc
console.log(lengthEncode("?3a1b1c1d5e2")); // ???abcdddddee

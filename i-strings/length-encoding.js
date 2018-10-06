// take in a string, return an encoded string based on duplicate characters

function lengthEncode (s) {
  let obj = {};

  for (let index in s) {
    if (!obj[s.charAt(index)]) {
      obj[s.charAt(index)] = 1;
    } else {
      obj[s.charAt(index)]++;
    }
  }

  console.log(obj);

  return Object.keys(obj).reduce((accum, curr) => {
    accum = accum + curr + obj[curr];
    return accum;
  }, "");

}

console.log(lengthEncode("wwabbbc")); // w2a1b3c1
console.log(lengthEncode("???abcdddddee")); // ?3a1b1c1d5e2

// DECODE: take in an encoded string, and decypted it to the original string

function lengthDecode (s) {
  let orgStr = "";
  return orgStr;
}

// console.log(lengthEncode("w2a1b3c1")); // wwabbbc
// console.log(lengthEncode("?3a1b1c1d5e2")); // ???abcdddddee

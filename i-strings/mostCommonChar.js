// Max (most common) character
// return the most common character in a string


function mostCommonChar (string) {
  const tempObj = {};

  for (char of string) {
    if (!tempObj[char]) tempObj[char] = 1;
    else tempObj[char]++;
  }

  return Object.keys(tempObj).filter(c => tempObj[c] === Math.max(...Object.values(tempObj)))[0];

  // alternative: loop thru tempObj to find the key with max value:
  // let maxChar = '';
  // let maxNum = 0;
  // for (let c in tempObj) {
  //   if (tempObj[c] > maxNum) {
  //     maxNum = tempObj[c];
  //     maxChar = c;
  //   }
  // }
  // return maxChar;

}

let result = mostCommonChar('squeeze');
console.log(result); // e
result = mostCommonChar('javascriptttt');
console.log(result); // t

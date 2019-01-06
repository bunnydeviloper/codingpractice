// return the longest word in a string
// if there are more than one longest word, put them in a array

function longestWord(str) {
  // clean input, use regex to clean out special characters
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

  // sort by word length in descending order
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

  return (longestWordArr.length === 1) ? longestWordArr[0] : longestWordArr;
}

const testResult = longestWord('Today is a beautiful day');
console.log(testResult); // 'beautiful'
const test2 = longestWord('Hello there, I love the sun');
console.log(test2); // ['hello', 'there']


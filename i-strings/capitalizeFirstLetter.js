// given a string, capitalize the first letter of each word

function capitalizeFirstLetter (string) {
  /*
  // split each word, separate by spaces
  const wordArr = string.toLowerCase().split(' ');
  // when looping thru array, for...in give you index, for...of give u value
  for (i in wordArr) {
    wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
  }
  return wordArr.join(' ');;
  */

  return string
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

let result = capitalizeFirstLetter('hello my name is sophia'); // Hello My Name Is Sophia
console.log(result);

result = capitalizeFirstLetter("i love JavaScript"); // I Love Javascript
console.log(result);

result = capitalizeFirstLetter("234 hi ?there"); // Hi There
console.log(result);


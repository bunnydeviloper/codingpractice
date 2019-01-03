const testData = {
  "indie": [
    "Arctic Monkeys",
    "The Strokes",
    "Mumford and Sons",
    "The Smiths"
  ],
  "blue": [
    "Eric Clapton",
    "Buddy Guy",
    "Lead Belly",
    "Johnny Winter",
    "Freddie King"
  ],
  "pop": [
    "Rihanna",
    "Madonna",
    "Beyonce",
    "Lady Gaga",
    // "Lady Gaga",
    "Katy Perry"
  ]
};

// function to find the total ASCII value
function getASCII (string) {
  let totalValue = 0;
  for (let i=0; i< string.length; i++) {
    totalValue = totalValue + string.charCodeAt(i);
  }
  return totalValue;
}
console.log(getASCII('DISNEY')); // 460

// function to find the most common value of an array
function mostCommonNumber (numbers) {
  numbers = [].concat(...numbers);
  let counted = numbers.reduce((acc, curr) => {
    // if (curr in acc) {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  console.log('this is counted', counted);

  let maxValue = Math.max(...Object.values(counted));
  let maxKey = -1;
  if (Object.keys(counted).length > 0) {
    maxKey = Object.keys(counted).reduce((a, b) => (counted[a] > counted[b]) ? a : b );
  }
  // console.log('maxKey ', maxKey, ' and maxValue ', maxValue);

  return (maxValue === 1) ? -1 : maxKey;
}

console.log(mostCommonNumber([[2, 3, 4], [5, 4, 8], [2, 2, 2]])); // 2
console.log(mostCommonNumber([1, 2, 3, 4, 5])); // -1, means there's no common numbers

// function to find the most common ASCII value of data
function commonASCII (data) {
  let mostCommonASCII = -1;
  let allArtists = [].concat(...Object.values(data));
  let allScores = allArtists.map(e => getASCII(e));
  console.log(allScores);
  return mostCommonNumber(allScores) || mostCommonASCII;
}

console.log(commonASCII(testData));
console.log(commonASCII({}));
console.log(commonASCII({"key1" : "value1", "key2": "value2", "key3": "value3"}));
console.log(commonASCII(["first", "first1", "first2"]));

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
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});
  console.log('this is counted', counted);

  let keys = Objects.keys(counted);
  let maxKey = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);
  return maxKey;
}

console.log(mostCommonNumber([[2, 3, 4], [5, 4, 8], [2, 2, 2]])); // 2

// function to find the most common ASCII value of data
function commonASCII (data) {
  let mostCommonASCII = -1;
  let allArtists = [].concat(...Object.values(data));
  let allScores = allArtists.map(e => getASCII(e));
  console.log(allScores);
  return mostCommonNumber(allScores) || mostCommonASCII;
}

console.log(commonASCII(testData));

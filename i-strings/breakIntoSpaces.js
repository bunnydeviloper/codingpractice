// imagine your friend text you a message, but their 'space' button is broken
// write a decoder so you can read the message with spaces

// given a string without spaces and a dictionaryAPI
// return a string with spaces
// assume no special characters, no capitalization

/*
const dictionaryAPI = [
    {a: ["apple", "alert", "am"]},
    {b: ["basic", "bye", "beyond", "break", "butter"]},
    {e: ["eating", "exercise"]},
    {i: ["i", "import", "improve"]},
    {p: ["peanut"]},
];
*/

const dictionaryAPI = [
  "apple", "alert", "am", "and", "basic", "bye", "beyond", "break", "butter",
  "eating", "exercise", "i", "is", "import", "important", "improve", "peanut"
];

function breakIntoSpaces (string, answer = '') {
  if (string.length === 0) {
    console.log('Answer: ', answer);
    // return answer;
  } else {
    let prefix = '';
    let suffix = '';
    for (let i = 0; i <= string.length; i++) {
      prefix = string.substring(0, i);

      //if prefix exists in dic, add prefix to the answer, break for loop, & recurse
      if (dictionaryAPI.includes(prefix)) {
        answer += prefix + " ";
        suffix = string.slice(i);
        break;
      }
    }
    breakIntoSpaces(suffix, answer);
  }

    return newString;
}

// tips: check the length before checking the word

const input = 'iameatingpeanutbutter';

console.log(breakIntoSpaces(input)); // 'i am eating peanut butter'

/*
Some issues to consider:
1. does the returning str has to be meaningful phrase or just str of valid words
2. => how would you select the most likely solutions?
3. what if dictionary can't fit in memory?
4. what if the input str has a spelling mistake?
*/
// imagine your friend text you a message, but their 'space' button is broken
// write a decoder so you can read the message with spaces

// given a string without spaces and a dictionaryAPI
// return a string with spaces 
// assume no special characters, no capitalization

const dictionaryAPI = [
    {a: ["apple", "alert"]},
    {b: ["basic", "bye", "beyond", "break", "butter"]},
    {e: ["eating", "exercise"]},
    {i: ["i", "import", "improve"]},
    {p: ["peanut"]},
];

function searchWord (world) {
    // return word
}

funcntion breakIntoSpaces (string) {
    let newString = "";

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
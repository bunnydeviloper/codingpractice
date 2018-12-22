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
    "apple", "alert", "basic", "bye", "beyond", "break", "butter",
    "eating", "exercise", "i", "import", "improve", "peanut",
];

function breakIntoSpaces (string) {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        const currentSubstr = string.substring(0, i);
        if (dictionaryAPI.includes(currentSubstr)) {
            newString += currentSubstr + " ";
            string = string.substring(i, string.length);
            console.log(string);
        }
        // if begin>index is a word in dic, add that word, cut string, repeat
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
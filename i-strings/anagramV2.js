// check if two string are anagram of each other
// note: palindrome: you get exact same string when you reverse
// note: anagram: both has the same characters shuffling

function is_anagram (str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// helper: clean up string, remove special char... sort by characters
function formatStr (string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

const test = is_anagram('elbow', 'below');
console.log(test);

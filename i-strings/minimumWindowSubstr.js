// Minimum Window Substring
// Given a string S and a string T,
// find the minimum window in S which will contain all the characters in T in complexity O(n).

// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

const minWindowSubstring = (s, t) => {
  let shortest = [0, Infinity];

  let missingCharacters = t.length;

  let hashMap = {};
  for (let char of t) hashMap[char] = 0;

  let slowIndex = 0;
  // increment the fast pointer one char at a time
  for (let fastIndex = 0; fastIndex < s.length; fastIndex++) {

    // if find a matching char, reduce missingCharacters and also increase value in hashMap
    if (s[fastIndex] in hashMap) {
      if (hashMap[s[fastIndex]] === 0) missingCharacters--;
      hashMap[s[fastIndex]] += 1;
    }

    // if find all chars, we update the current range if it's smaller than previous range
    while (missingCharacters === 0) {
      if (fastIndex - slowIndex < shortest[1] - shortest[0]) {
        shortest[0] = slowIndex;
        shortest[1] = fastIndex;
      }

      // slow pointer will increment, which helps us find the next shorter range
      if (s[slowIndex] in hashMap) {
        hashMap[s[slowIndex]] -= 1;
        if (hashMap[s[slowIndex]] === 0) missingCharacters++;
      }
      slowIndex++;
    }
  }

  return shortest[1] === Infinity ? "" : s.slice(shortest[0], shortest[1] + 1);
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindowSubstring("ABCECODEBANC", "ABC")); // "ABC"

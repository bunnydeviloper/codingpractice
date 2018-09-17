// Reverse a given string, simple for loop, using a temporary string
const reverseStr = (s) => {
  let newS = "";
  // each iteration, you add the last letter of original string to newS
  for (let i=1; i < s.length + 1; i++) {
    newS += s.charAt(s.length - i);
  }
  return newS;
};

// time: O(n)
// space: O(n)

const test = ".tIpoleveDlriG ot kn!L a si sihT";
const test2 = "@@@ Code On @@@";
console.log(reverseStr(test)); // This is a L!nk to GirlDevelopIt.
console.log(reverseStr(test2)); // @@@ nO edoC @@@

// More advance: reverse a string "in place", without creating a new string in memory
const reverseStrInPlace = (s) => {
  // split each char to an array, use reverse() built-in array method, and join them back together
  return s.split("").reverse().join("");
};

console.log(reverseStrInPlace(test));
console.log(reverseStrInPlace(test2));

// Use recursion
const reverseStrRecurse = (s) => {
  return (s === "") ? "" : reverseStrRecurse(s.substring(1)) + s.charAt(0);
};

console.log(reverseStrRecurse(test));
console.log(reverseStrRecurse(test2));


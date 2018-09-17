// Reverse a given string, simple for loop, using a temporary string
const reverseStr = (s) => {
  let newS = "";
  for (let i=0; i < s.length; i++) {
    newS = newS + s.charAt(s.length - 1 - i);
  }
  return newS;
};

// time: O(n)
// space: O(n)

const test2 = "@@@ Code On @@@";
const test = ".tIpoleveDlriG ot kn!L a si sihT";
console.log(reverseStr(test2)); // @@@ nO edoC @@@
console.log(reverseStr(test)); // This is a L!nk to GirlDevelopIt.

// More advance: reverse a string "in place", without creating a new string in memory

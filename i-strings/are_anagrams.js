// write a fn that takes two strings as arguments, return true/false if they are_anagrams of each other
// same as: determin of string A can be formed by rearranging the letters of string B

const testA = "abcdefg"
const testB = "yummy"
const testC = "umymy"

// use array
const are_anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let tempS2 = s2.split(""); // create temporary array for string2
  s1.split("").map(curr => { // create array for string1 and map through each item
    if (tempS2.includes(curr)) { // if current char in S1 matches any of the characters in S2
      tempS2 = tempS2.filter(e => e !== curr); // then remove that char from S2
    }
  });
  return (tempS2.length === 0) ? true : false;
};

console.log(are_anagrams(testA, testB)); // false
console.log(are_anagrams(testB, testC)); // true

// use object
const are_anagrams2 = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let obj = {};
  // first loop through string1 and add each character to object with its occurance
  for (let i = 0; i < s1.length; i++ ) {
    if (!obj[s1.charAt(i)]) obj[s1.charAt(i)] = 1;
    else obj[s1.charAt(i)]++;
  }

  // second, loop through string2, check each character agains the occurance in obj
  for (let i = 0; i < s2.length; i++) {
    if (!obj[s2.charAt(i)]) return false;
    else obj[s2.charAt(i)]--;
  }
  // finally, filter the object by any values that's not zero, there should be none
  return Object.values(obj).filter(e => e !== 0).length === 0;

};

console.log(are_anagrams2(testA, testB)); // false
console.log(are_anagrams2(testB, testC)); // true

// write a function to remove the duplicate letters in a string

// Solution 1: using newStr or newArr data structure (if use array, will need to concat the characters)
function removeDups(s) {
  let newStr = ""; // initialize a newStr variable

  // iterate through each character of input string
  for (let index in s) {
    // if the character doesn't exist in newStr, add to newStr
    if (!newStr.includes(s.charAt(index))) newStr = newStr + s.charAt(index);
  }
  return newStr;
}

// Solution 2: using recursion
function removeDupsRecurse(s) {
  //
}

console.log(removeDups("Heeeelloooo")); // Helo
console.log(removeDups("google!!!")); // gole!
console.log(removeDups("Search??? En gine")); // Search Engi

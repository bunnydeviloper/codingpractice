// write a function to remove the duplicate letters in a string
function removeDups(s) {
  // Way 1: using newStr or newArr data structure
  // initialize a newStr variable
  let newStr = "";

  // iterate through each character
  for (let c in s) {
    console.log(c);
  // if the character doesn't exist in newStr, add to newStr
  }

  return newStr;

  // Way 2: using recursion
}

console.log(removeDups("Heeeelloooo")); // Helo
console.log(removeDups("google!!!")); // gole!
console.log(removeDups("Google Search Engine")); // Gogle SarchEni

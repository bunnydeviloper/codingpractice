// write a function to remove the duplicate letters in a string

// Solution 1: using newStr data structure
function removeDups(s) {
  let newStr = ""; // initialize a newStr variable

  // iterate through each character of input string
  for (let index in s) {
    // if the character doesn't exist in newStr, add to newStr
    if (!newStr.includes(s.charAt(index))) newStr = newStr + s.charAt(index);
  }
  return newStr;
}

console.log(removeDups("Heeeelloooo")); // Helo
console.log(removeDups("google!!!")); // gole!
console.log(removeDups("Search??? En gine")); // Search Engi

// Solution 2: using array reduce method
function removeDupsArr(s) {
  let arr = s.split("");
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur);
    return acc;
  }, []).join(""); // join() method needs a separator, otherwise default is ","
}

console.log('------------');
console.log(removeDupsArr("Hiiiii Maiiiii")); // Hi Ma


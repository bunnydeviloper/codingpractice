function matchingParen(s) {
  let paren = 0;

  for (let i = 0; i < s.length; i ++) {
    if (s.charAt(i) === "(") paren++;
    if (s.charAt(i) === ")") paren--;
    if (paren < 0) return false;
  }

  /* using while loop
  let i = 0;
  while (s.charAt(i)) {
    if (s.charAt(i) === "(") paren++;
    if (s.charAt(i) === ")") paren--;
    i++;
    if (paren < 0) {
      break;
    }
  }
  return (paren === 0) ? true : false;
  */

  return paren === 0;
}

console.log(matchingParen(")I lov(e)")); // False
console.log(matchingParen("(Hello)(")); // False
console.log(matchingParen("Hi()")); // True

// time: O(n)
// space: O(1)

// function moreParentheses(s, begin = ["(", "{", "["], end = [")", "}", "]"]) {
function moreParentheses(s, pairs = {"(":")", "[":"]", "{":"}"}) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // if the current character is an open bracket, push it on to the stack
    if (Object.keys(pairs).includes(s.charAt(i))) stack.push(s.charAt(i));

    // if the current character is a closing bracket
    if (Object.values(pairs).includes(s.charAt(i))) {
      // and this closing bracket matches with the last begining bracket in our stack, then pop stack
      let keyToCompare = Object.keys(pairs).find(k => pairs[k] === s.charAt(i));
      if (stack[stack.length - 1] === keyToCompare) stack.pop();
      // otherwise, return false
      else return false;
    }
  }
  return stack.length === 0;
}

console.log(moreParentheses("[Love()]{}")); // True
console.log(moreParentheses("]Love()]{}")); // False
console.log(moreParentheses("[Love(]{)}")); // False


// same as matchingParen exercise, but use recursion

function validParentheses(s, pairs = {"(":")", "[":"]", "{":"}"}, stack = [], i = 0) {
  if (i === s.length) return stack.length === 0; // base case

  // if the current character is an open bracket, push it on to the stack
  if (Object.keys(pairs).includes(s.charAt(i))) {
    stack.push(s.charAt(i));
  }
  // if the current character is a closing bracket
  if (Object.values(pairs).includes(s.charAt(i))) {
    // and this closing bracket matches with the last begining bracket in our stack, then pop stack
    let keyToCompare = Object.keys(pairs).find(k => pairs[k] === s.charAt(i));
    if (stack[stack.length - 1] === keyToCompare) stack.pop();
    // otherwise, return false
    else return false;
  }
  return validParentheses(s, pairs, stack, i+1);
}

console.log(validParentheses("[Love()]{}")); // True
console.log(validParentheses("]Love()]{}")); // False
console.log(validParentheses("[Love(]{)}")); // False


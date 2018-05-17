// Higher Order Functions:

const frankenstein = (input, action1, action2, action3) => {
  return action3(action1(input) + action2(input));
};

console.log(frankenstein('cal',
  e => e[0],	// action1: double first letter
  e => e + e,	// action2: double word
  w => w.split('').reverse().join('')));  // action3: reverse word

console.log(frankenstein('sophia',
  e => e[0],	// action1: double first letter
  e => e + e,	// action2: double word
  w => w.split('').reverse().join('')));  // action3: reverse word


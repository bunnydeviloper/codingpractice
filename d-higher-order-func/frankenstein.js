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

// recommended way:
const compose = (f, g, h) => (x) => f(g(h(x)));
const dupFront = (s) => s[0] + s;
const doubleStr = (s) => s + s;
const reverse = (s) => s.split('').reverse().join('');

const franken2 = compose(reverse, dupFront, doubleStr);

console.log('SECOND WAY: ', franken2('cal'));
console.log('SECOND WAY: ', franken2('javascript'));
console.log('SECOND WAY: ', franken2('beautiful'));
console.log('SECOND WAY: ', franken2('sophia'));

// FUN to-do: create a game: 
// user input a word, 'encrypt' the word, then console.log it
// User#2 comes, decrypt, then console.log the original message

//first you have 'laclacc'
//then you reverse 'ccalcal'
//then you remove first letter 'calcal'
//then you remove half 'cal'

const removeFront = (s) => s.substring(1);
const cutHalf = (s) => s.substring((s.length + 1)/2);

const decrypt = compose(cutHalf, removeFront, reverse);

console.log('DECRYPT: ', decrypt(franken2('cal')));
console.log('DECRYPT: ', decrypt(franken2('javascript')));
console.log('DECRYPT: ', decrypt(franken2('beautiful')));
console.log('DECRYPT: ', decrypt(franken2('sophia')));

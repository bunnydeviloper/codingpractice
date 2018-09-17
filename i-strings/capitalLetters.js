// print all capital letters from a given string
const capitalLetters = (s) => {
  let str = "";
  for (let i=0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()
      && s.charAt(i) !== s.charAt(i).toLowerCase()) { // need this to check for special characters
      str = str + s.charAt(i);
    }
  }
  return str;
};

const test = "Hello Elsa, Let it go, Let !! gO";
const test2 = "Honey OhNora Enqueue todaY";

console.log(capitalLetters(test)); // HELLO
console.log(capitalLetters(test2)); // HONEY

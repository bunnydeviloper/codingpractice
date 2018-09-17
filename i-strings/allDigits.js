// Replace all digits with * in a given string
const allDigits = (s) => {
  for (let i=0; i < s.length; i++) {
    if (!isNaN(s.charAt(i) * 1) && s.charAt(i) !== " ") { // need to check for space as well
      s = s.replace(s.charAt(i),"*");
    }
  }
  return s;
};

const test = "Today is @ 12great34 day!";
const test2 = "This text is 12345 hidden.";

console.log(allDigits(test)); // Today is a **great** day!
console.log(allDigits(test2)); // This text is ***** hidden.

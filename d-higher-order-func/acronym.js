const acronym = (string, i=0, newStr='') => {
  if (i === string.length) return newStr;
  if (string[i] === string[i].toUpperCase() && string[i] != ' ') {
  // need to add more condition to remove special characters
    newStr = newStr + string[i];
  }
  return acronym(string, i+1, newStr);
};

console.log(acronym('hello my name is Sexy Sophia'));
console.log(acronym('the Beauty and Joy of Computing'));

// second way:
const acro2 = (sentence) => {
  return sentence.split(' ').filter(e => e.length > 3).map(e => e[0]).join('');
};
console.log(acro2('The United States of America'));

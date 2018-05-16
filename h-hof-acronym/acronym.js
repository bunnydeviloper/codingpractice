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

const downup = (word) => {
  if (!word || word.length === 0) return "invalid input";
  if (word.length === 1) return word;
  return word + ' ' + downup(word.slice(0, word.length-1)) + ' ' + word;
};

console.log(downup('hello'));
console.log(downup('abcdef'));
console.log(downup());
console.log(downup(''));
console.log(downup('it'));
console.log(downup('t'));

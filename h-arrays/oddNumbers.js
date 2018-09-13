function oddNumbers(l, r) {
  let array = [];
  let number = l;

  while (number <= r) {
    if (number%2 !== 0) {
      array.push(number);
    } else {
      number = number + 1;
      array.push(number);
    }
    number = number + 2;
  }
  return [...array];
}

console.log(oddNumbers(2, 4));
console.log(oddNumbers(3, 9));

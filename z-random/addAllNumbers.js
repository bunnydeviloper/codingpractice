// return the sum of all parameters entered
// (regardless of the amount of numbers) -- NO ARRAYS

function addAll() { // using arguments param
  return Object.values(arguments).reduce((accum, curr) => {
    return accum + curr;
  });
}

function addAll2(...numbers) { // using ...rest operator
  return numbers.reduce((a, c) => a + c);
}

console.log(addAll(2, 4, 4, 5, 9, 1)); // 25
console.log(addAll2(2, 4, 4, 5, 9, 1)); // 25

const test2 = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(test2); // 55

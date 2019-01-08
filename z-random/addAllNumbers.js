// return the sum of all arguments (numbers)

function addAll() {
  return Object.values(arguments).reduce((accum, curr) => {
    return accum + curr;
  });
}

const test = addAll(2, 4, 4, 5, 9, 1);
console.log(test); // 25

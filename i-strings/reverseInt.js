// input: number, change this number to a string, reverse this string
// output: reverse number (note, need to convert back to number)

function reverseInt (int) {
  return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);
}

// note, need to use parseInt instead of '+'
// also, need to multiply with Math.sign(int) to align with negative input

let result = reverseInt(521);
console.log(result); // 125
result = reverseInt(-98765);
console.log(result); // -56789

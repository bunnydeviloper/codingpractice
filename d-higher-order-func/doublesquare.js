const square = (x) => x * x;
const mult = (f1, f2) => (n) => (f1(n) * f2(n));
const bigF = mult(square, square);

console.log(bigF(2));
console.log(bigF(3));

// const square = (x) => {
//   return x*x;
// };
// const mult = (f1, f2) => {
//   return (n) => {
//     return f1(n) * f2(n);
//   }
// };

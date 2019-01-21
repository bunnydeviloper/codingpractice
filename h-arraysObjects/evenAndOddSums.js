// take in an array and return an array with two elements
// one elem is sum of all even nums, other elem is sum of all odd nums

function evenAndOddSums (array) {
  let evenSum = 0;
  let oddSum = 0;
  array.forEach(e => (e % 2 === 0) ? evenSum += e : oddSum += e);
  return [evenSum, oddSum];
}

console.log(evenAndOddSums([50, 60, 30, 45, 71])); // [140, 116]

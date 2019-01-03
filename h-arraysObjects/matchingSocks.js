const testData = [1, 2, 1, 3, 4, 2, 4, 2, 1];
const length = testData.length; // 9

// { 1: 3, 2: 3, 3: 1, 4: 2 }
// 1 pairs of 1, 1 pairs of 2, 1 pairs of 4, total 3 pairs

function sockMerchants(n, arr) {
  const obj = arr.reduce((accum, curr) => {
    (!accum[curr]) ? accum[curr] = 1 : accum[curr]++;
    return accum;
  }, {});
  console.log(obj);
  let totalPairs = 0;
  Object.values(obj).map(e => {
    totalPairs = totalPairs + Math.floor(e/2);
  });
  return totalPairs;
}

console.log(sockMerchants(length, testData));

function findLonelyNumber (a) {
  const myobj = a.reduce((obj, curr) => {
    if (!obj[curr]) obj[curr] = 1;
    else obj[curr]++;
    return obj;
  }, {})

  // using map instead of reduce
  // let myobj = {};
  // a.map(e => {
  //   if (!myobj[e]) myobj[e] = 1;
  //   else myobj[e]++;
  // });

  return Object.keys(myobj).find(e => myobj[e] === 1);
}

console.log(findLonelyNumber([2, 6, 3, 8, 6, 2, 3])); // 8
console.log(findLonelyNumber([-1, -1, 0, 1, 1, 1])); // 0

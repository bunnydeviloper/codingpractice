// function takes one argument
// each time movingAverage.next(n) will return average number from current and all previous call

/*
const movingAverage = (num, count = 0) => {
  return function next () {
    console.log(num);
    console.log(count);
    return num / count;
  }
};
*/

const movingAverage = {
  next: function(num) {
    return num;
  }
}

movingAverage.next(3); // this should return (2+3) / 2
console.log(movingAverage.next(7));
movingAverage.next(4); // this should return (2+3+4) / 3

const test = (n) => {
  return {
    next: function(a) {
      console.log(a + n);
      return a + n;
    }
  }
}

const newTest = test(4);
newTest.next(9);
newTest.next(1);

const tryAgain = (n) => {
  return function (a) {
    n++;
    return n + a;
  }
}
const haha = tryAgain(1);
console.log((haha)(3));
console.log((haha)(4));

const hello = {
  a: 5
};
console.log(hello.next(3));
// console.log(tryAgain(1));
// console.log(tryAgain(2));

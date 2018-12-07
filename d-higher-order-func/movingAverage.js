// function takes one argument
// each time movingAverage.next(n) will return average number from current and all previous call

function MovingAverage (base=0, counter=0) {
  this.base = base;
  this.counter = counter;
}

MovingAverage.prototype.next = function(n) {
  // return this.base + n;
  return (function(a) {
  console.log(this.base + n + a);
    return this.base + n + a;
  })();
};

const testMovingAverage = new MovingAverage(2);
testMovingAverage.next(4);
testMovingAverage.next(1);
// console.log(testMovingAverage.next(5));
// console.log(testMovingAverage.next(9));

// function takes one argument, initialize with a base number
// each time movingAverage.next(n) will return average number from current and all previous call

function SimpleMovingAverage (base) {
  this.next = (function(numerator) {
    let denominator = 1; // initialize

    return function(addMore) {
      numerator += addMore; // critical, needs this to sum all inputs when calling .next()
      denominator++;
      console.log('simple: ' + numerator + ' / ' + denominator);
      return numerator / denominator;
    }
  })(base);
}

const testSimple = new SimpleMovingAverage(1);
testSimple.next(2); // 3/2
testSimple.next(3); // 6/3
testSimple.next(1); // 7/4

function MovingAverage (base) {
  // this.base = base; // for constructor, but essentially dont need

  this.next = (function(base) {
    let numerator = base;
    let denominator;

    (base === 0) ? denominator = 0 : denominator = 1;

    return function(addMore) {

      // prevent edge cases when user pass 0 into .next(), we don't increase denominator
      if (addMore === 0) {
        console.log(numerator + ' / ' +  denominator);
        return numerator/denominator;
      }

      else {
        numerator += addMore;
        denominator++;

        // prevent edge case when user pass negative num into .next() thus total sum of numerator is 0
        if (numerator === 0) {
          console.log('Error, total sum of all numbers is 0');
          return;
        } else {
          console.log(numerator + ' / ' +  denominator);
          return numerator/denominator;
        }
      }
    }
  })(base); // Self-Invoking Function
}

const testMovingAverageZeroBase = new MovingAverage(0);
testMovingAverageZeroBase.next(2); // 2/1

const testMovingAverageRegular = new MovingAverage(2);
testMovingAverageRegular.next(4); // 6/2
testMovingAverageRegular.next(0); // 6/2
testMovingAverageRegular.next(3); // 9/3

const testMovinaAverageZeroNumerator = new MovingAverage(3);
testMovinaAverageZeroNumerator.next(1); // 4/2
testMovinaAverageZeroNumerator.next(-4); // Error

// write a program that prints all the numbers from 1 to 100
// for multiple of 3, print 'fizz' instead of the number
// for multiple of 5, pring 'buzz' instead of the number
// for multiple of 3 AND 5, print 'fizzbuzz' instead of the number

function fizzBuzz () {

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
    else {
      if (i % 3 === 0) console.log('fizz');
      else if (i % 5 === 0) console.log('buzz');
      else console.log(i);
    }
  }
  return 'Finished running fizzBuzz';
}

fizzBuzz();

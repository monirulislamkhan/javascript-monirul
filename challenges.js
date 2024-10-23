'use strict';

// Challenge 1: FizzBuzz
function fizzBuzz(number) {
  // for loop
  /* for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} FizzBuzz`);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} Fizz`);
    }
  } */
  // while loop
  let i = 1;
  while (i <= number) {
    console.log(i);
    i++;
  }
}
fizzBuzz(100);

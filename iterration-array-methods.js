'use strict';
// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     console.log('7 number is lucky');
//   } else {
//     console.log('Number is ' + i);
//   }
// }

// Nested loop
// for (let i = 5; i <= 10; i++) {
//   // console.log('Number is ' + i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// Break and Continue
// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     console.log('Breaking...');
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i === 19) {
//     console.log('skiped 19');
//     continue;
//   }
//   console.log(i);
// }

// While do while
let i = 0;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

const arr = [10, 20, 30, 40, 50];
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting While loop
// while (i < 5) {
//   console.log('Outer Value '+i);
//   let j = 1;
//   while (j <= 5) {
//     console.log(i+ ' Inner Value '+j);
//     j++;
//   }
//   i++;
// }

// Do While loop  - always runs once
do {
  console.log('Number ' + i);
  i++;
} while (i <= NaN);

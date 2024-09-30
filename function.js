// function sayHello() {
//   console.log('Helo');
// }
// sayHello();

// function add(num1, num2) {
//   return num1 + num2;
//   // After return
// }

// console.log(add(1, 3));

// function substract(num1, num2) {
//   return num1 - num2;
// }
// const result = substract(10, 3);
// console.log(result, substract(20, 5));

// function registerUser(user = 'Bot') {
//   return user + ' is registered';
// }

// console.log(registerUser());

// // Rest parameter
// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(2, 3, 6, 9, 11, 45));

// Object as parameter
// function loginUser(user) {
//   return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// const user = {
//   id: 1,
//   name: 'Monirul',
// };

// console.log(loginUser(user));
// console.log(
//   loginUser({
//     id: 2,
//     name: 'Rohit',
//   })
// );

// Arrays as parameter
// function getRandam(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   return arr[randomIndex];
//   // console.log(arr[randomIndex]);
// }

// const ranNum = getRandam([1, 199]);

// console.log(ranNum);

// const x = 100;
// console.log(x, 'in global');

// function run() {
//   // console.log(window.innerHeight);
//   console.log(x);
// }
// run();

// if (true) {
//   console.log(x, 'is block');
// }

// function add() {
//   const x = 1;
//   const y = 50;
//   return console.log(x + y);
// }
// console.log(add());

// console.log(y);
// add();

// const x =  100;
// if(true){
//   console.log(x)
//   const y = 200;
// }

// for(let i =0; i<=10; i++){
//   console.log(i)
// }

// if (true) {
//   const a = 600;
//   let b = 300;
//   var c = 456;
// }
// console.log(c);

// const run = () => {
//   var d = 100;
//   return d;
//   console.log(d);
// };

// console.log(run());
// console.log(d);

// function first() {
//   const x = 100;
//   function second() {
//     const y = 3000;
//     console.log(x + y);
//   }
//   second();
// }
// first();

// const res = 100;
// if (res === 100) {
//   const x = 10;
//   if (x === 10) {
//     const y = 34567;
//     console.log(x + y);
//   }
//   console.log(y);
// }

// function Declaration
// function addDollarSign(value) {
//   return '$' + value;
// }
// console.log(addDollarSign(193));

// function addPlusSign(value) {
//   return '+' + value;
// }
// console.log(addPlusSign(12));

// Arrow function
// const add = (c) => c;
// console.log(add(12));

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;
// console.log(add(2, 5));

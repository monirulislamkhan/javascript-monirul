'use strict';
let a = 10;
let x;
// console.log(a);
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Monirul' }, { name: 'Mubasshir' }, { name: 'Mohasina' }, { name: 'Meherin' }];
// for(const item of items){
//   console.log(`Item name is ${item}`)
// }

// for (const user of users) {
//   console.log(user.name);
// }

// Loop over string
const str = 'Hello World';
// for (const letter of str) {
//   // console.log(letter)

//   console.log(letter.split(5));
// }

// items.splice(0);

// console.log(items);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumber1 = numbers.splice(4, 0);

// const newNumber = numbers.slice(1, 3);
// console.log(numbers);
// console.log(newNumber1);
// console.log(newNumber);

// // Loop over Maps
// const map = new Map();
// map.set('name', 'Monirul');
// map.set('age', 37);

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// Loop through objects
// const colorObj = {
//   color1: 'red',
//   color2: 'blue',
//   color3: 'orange',
//   color4: 'green',
// };

// for (const key in colorObj) {
//   console.log(key, colorObj[key]);
// }

// const colorArr = ['red', 'green', 'blue', 'yellow'];
// for (const key in colorArr) {
//   console.log(colorArr[key]);
// }

// forEach
const social = ['Youtube', 'Linkedin', 'facebook', 'Twitter', 'Pinterest', 'Instgram'];
// console.log(social.__proto__);

// Long form
// social.forEach(function (item) {
//   let itemName = 'Name is ';
//   console.log((itemName += item));
// });

// short form
// social.forEach((item) => console.log(item));

// using name function
// function logSocial(item) {
//   console.log(item);
// }
// social.forEach(logSocial);

// const socialObject = [
//   { name: 'Twitter', url: 'https://twitter.com' },
//   { name: 'Facebook', url: 'https://facebook.com' },
//   { name: 'Linkedin', url: 'https://linkedin.com' },
//   { name: 'Instagram', url: 'https://instagram.com' },
// ];

// socialObject.forEach((item) => console.log(item.name, item.url));

// filter Method

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// x = numbers.filter((number) => number / 2 === 0);

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// const retailCom = companies.filter((company) => company.category === 'Retail');

// const earlyCom = companies.filter((company) => company.start >= 1980 && company.end <= 2005);

// const longCom = companies.filter((company) => company.end - company.start >= 10);

// console.log(longCom);

// Arrays Map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// x = numbers.map((number) => number * 3);

// forEach Method
// const doubleNum = [];
// numbers.forEach((number) => {
//   doubleNum.push(number *)
// });

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// const companyName = companies.map((company) => company.name);

// console.log(companyName);

// Create an array of objects with name and the length of each company in years
// const companyInfo = companies.map((company) => {
//   return {
//     name: company.name,
//     companyAge: company.end - company.start + ' Years',
//   };
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Chain map methods
// const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt + 3);

// console.log(squareAndDouble);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = numbers.reduce((acc, value) => {
//   return acc + value;
// });

// console.log(sum);

// const cart = [
//   { id: 1, name: 'Product 1', price: 130 },
//   { id: 2, name: 'Product 2', price: 150 },
//   { id: 3, name: 'Product 3', price: 200 },
// ];

// const totalPrice = cart.reduce((prevValue, curValue) => {
//   return prevValue + curValue.price;
// }, 0);
// console.log(totalPrice);

// Challenge 1
// const people = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-1111',
//     age: 30,
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@gmail.com',
//     phone: '222-222-2222',
//     age: 25,
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-3333',
//     age: 45,
//   },
//   {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'Sara@gmail.com',
//     phone: '444-444-4444',
//     age: 19,
//   },
//   {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'jose@gmail.com',
//     phone: '555-555-5555',
//     age: 23,
//   },
// ];

// const youngPeople = people
//   .filter((young) => young.age <= 25)
//   .map((info) => ({
//     name: info.firstName + ' ' + info.lastName,
//     email: info.email,
//   }));

// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const positiveNum = numbers.filter((pos) => pos > 0).reduce((prev, cur) => prev + cur, 0);

// console.log(positiveNum);

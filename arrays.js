'use strict';
let age = new Date().getFullYear() - 1992;
// Array
// let x;
// // Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');
// x = numbers[0];
// x = numbers[0] + numbers[3];
// x = `My favorite fruit is an ${fruits[2]}`;
// x = numbers.length;
// fruits[2] = 'Monirul';
// fruits[3] = 'Straberry';
// x = fruits;

// console.log(x);

// let x;
/* const arr = [28, 38, 44, 29, 109, 75, 98, 10];
arr.push(100);
arr.pop();
arr.unshift(99);
arr.shift();
// arr.reverse((b) => b -a)
// arr.reverse()
// arr.includes(34);
x = arr.includes(29);
x = arr.indexOf(29);
// Return array as a string
x = arr.toString();
x = arr.join();
x = arr.slice();
x = arr.splice(2, 5);

console.log(arr);

console.log(x); */

/* let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

console.log(fruits);
console.log(berries);

fruits.push(berries);

x = fruits[3];
const allFruits = [...fruits, ...berries];
// x = allFruits
x = [...fruits, ...berries];

const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr;

x = arr.flat();
x = Array.isArray(fruits);
x = Array.from('20345689');
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x); 

*/

let x;
// Challeng 1
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();
// console.log(arr);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const result = [...arr1, ...arr2];

x = result.splice(4, 1);
x = result;

// console.log(result);
// console.log(x);

// Creating an object

const person = {
  name: 'Monirul',
  age: age,
  isAdmin: true,
  address: {
    street: '123 Kailla Bhatta',
    city: 'Ghaziabad',
    state: 'UP',
  },
  hobbies: ['Cricket', 'Footbal'],
  greet: function () {
    let message;
    return (message = `Hello, My name is ${this.name}`);
  },
};
const message = person.greet();

x = person;
x = person.name;
x = person['age'];
x = person.address.city;
person.hobbies[2] = 'Computer';
x = person.hobbies;
x = person.name = 'Rohit';
x = person;
x = person.isAdmin;
const personCopy = person;
x = person.greet();
// delete person.hobbies[2]
// console.log(personCopy);

delete person.age;
x = person;
person.hasChildren = true;
person.newGreet = function () {
  let message;
  return (message = `My hobbies are ${this.hobbies}`);
};

x = person.newGreet();

/* const person2 = {
  'first Name': 'Monirul',
  'last Name': 'Khan',
  fullName: function () {
    return console.log(`My full name is ${this['first Name']} ${this['last Name']}`);
  },
};
person2.fullName();
x = person2.fullName; */

// console.log(x);
// console.log(person);

// Create object using the object constructor
const todo = new Object();
todo.id = 1;
todo.name = 'Monirul';
todo.isValide = false;

x = todo;

// Object Nesting
const person1 = {
  address: {
    state: 'UP',
    city: 'Ghaziabad',
    cords: {
      lat: 12.12340101,
      lan: 23.234566,
    },
  },
};

x = person1;
x = person1.address.cords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const speardOperator = { ...obj1, ...obj2 };
x = speardOperator;

const obj3 = Object.assign({ familyName: 'Khan', members: 19 }, obj2);
x = obj3;

// Array of objects
const todos = [
  {
    id: 1,
    name: 'Water',
  },
  { id: 2, name: 'Milk' },
];
x = todos;
x = todos[1].name;

// Get array object keys

x = Object.keys(todos);
x = Object.keys(todos).length;
x = Object.values(todos);
x = Object.entries(todos);
x = todo.hasOwnProperty('isValide');
// x = todo;
console.log(x);

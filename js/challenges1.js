'use strict';

const reverseString = (strValue) => {
  // Method 1
  // const value = strValue.split('').reverse().join('');

  // Method 2 loop
  let newStr = '';
  for (let i = strValue.length - 1; i > 0; i--) {
    newStr += strValue[i];
  }
  return newStr;
};

console.log(reverseString('doctor'));
// reverseString('hello');

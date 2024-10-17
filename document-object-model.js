'use strict';
// console.log(window);
// console.log(document.querySelectorAll('*'));
// const allEl = document.querySelectorAll('*');
// for (let i = 0; i < allEl.length; i++) {
//   console.log(allEl[i]);
// }
// console.dir(allEl);
// allEl.forEach((element) => {
//   console.log(element);
// });
// console.log(document.head);
// console.log(document.body);
// document.body.innerHTML = '<h1>Hello from body</h1>';
// console.log(document.links);
// const allLinks = document.links;
// console.log(allLinks);
// const linkConvert = allLinks.form.Array;
// allLinks.forEach((linka) => {
//   console.log(linka);
// });

// const customSelector = document.querySelector('#h1');
// console.log(customSelector);
// customSelector.innerText = 'Hi';
// console.log(document.querySelectorAll('*').length);
let output;
// Everything in all html tags
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;
output = document.doctype;
output = document.domain;
output = location.hostname;
output = location.host;
output = document.URL;
output = document.characterSet;
output = document.contentType;
// Forms
output = document.querySelector('.form-control');
// output = document.forms.children;
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Change id
output = document.forms[0].id = 'test';
// Get all links
output = document.links;
output = document.links[0];
output = document.links[0].href;
// output = document.links[0].href = 'https://www.google.com';
// output = document.links[0].textContent = 'Hello';
output = document.links[0].id = 'google-link';

// output = document.links[0].className = 'nirul';
output = document.links[0].classList;

console.log(output);

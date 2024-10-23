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
/* output = document.head;
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
// Get all images
output = document.images;
output = document.images.length;
// output = document.__proto__;
// output = document.images;
const allImages = document.images;
const forms = Array.from(allImages);

forms.forEach((element) => {
  console.log(element.URL);
});

console.log(allImages);

*/
// console.log(document.getElementById('app-title'));
// Get attribute
/* const title = document.getElementById('app-title');
output = title.id;
output = title.className;
output = title.getAttribute('id');

// Set attribute
output = title.title = 'Shoping List';
title.setAttribute('class', 'title');
output = title; */

// Get/ Change content
// output = title.textContent = 'textContent';
// output = title.innerText = 'innerText';
// output = title.innerHTML = 'innerHTML';
// output = title.outerHTML;

// change style
// output = title.style.color = '#234591';
// output = title.style.backgroundColor = 'blue';
// output = title.style.padding = '20px';
// output = title.style.transform = 'translateY(-42px)';
// output = title.style.

//Query Selector
/* const query = document.querySelector('h1');
output = query;
const allinputs = document.querySelectorAll('input[type="text"]');
// const inputs = document.querySelector('input[type="text"]');
for (let i = 0; i < allinputs.length; i++) {
  // output += allinputs[i];
  // output = allinputs[i];
  console.log(allinputs[i]);
} */
// output = allinputs;
// // output = inputs;

// const listItem = document.querySelector('li:nth-child(4)');
// output = listItem.innerHTML;

// Query Selector all
/* const listItems = document.querySelectorAll('.item');
output = listItems.forEach((item, index) => {
  if (index == 1) {
    item.innerText = 'Hello';
  }
  console.log(item.innerText);
});
output = listItems; */

// const listItems = document.querySelectorAll('.item');
// output = listItems.forEach((item, index) => {
//   if (index == 1) {
//     item.innerText = 'Hello';
//   }
//   if (index === 2) {
//     item.remove();
//   }
//   console.log(item.innerHTML);
// });
// output = listItems;

// const listItem2 = document.getElementsByClassName('item');
// output = listItem2;
// // console.log(output[2].outerHTML);
// output = Array.from(listItem2);
// output.forEach((item, index) => {
//   console.log(item);
// });

// Get child element from parent
// const parent = document.querySelector('.parent');

// output = parent.children;

// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('id', 'new');
// const text = document.createTextNode('Hello World');

// output = div.appendChild(text);
// div.appendChild(text);
// output = document.querySelector('ul').appendChild(div);

// function createListItem(item) {
//   const li = document.createElement('li');
//   li.className = 'item';
//   li.innerHTML = `${item} <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   document.querySelector('.items').append(li);
// }
// createListItem('Mango');

// const createListItems1 = (item) => {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   // Button
//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';

//   // Close icon
//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';

//   // Appendchild
//   button.appendChild(icon);
//   li.appendChild(button);

//   button.appendChild(icon);
//   document.querySelector('ul').append(li);
// };

// createListItems1('Some value');
// createListItems1('Some value');

// console.log(res);

// Refactor
// const createList = (item) => {
//   const li = document.createElement('li');
//   li.textContent = item;

//   const btn = createButton('remove-item btn-link text-red');
//   li.append(btn);

//   const newListItem = document.querySelector('.items').appendChild(li);
//   return newListItem;
// };

// const createButton = (className) => {
//   const button = document.createElement('button');
//   button.className = className;

//   const icon = iconFun('fa-solid fa-xmark');
//   button.appendChild(icon);
//   return button;
// };

// const iconFun = (className) => {
//   const icon = document.createElement('i');
//   icon.className = className;
//   return icon;
// };

// console.log(createList('Lemon'));
// createList('Lemon');

// insertAdjacentElement
// const insertAdjacentElement = () => {
//   const filter = document.querySelector('.filter');
//   const h1 = document.querySelector('h1');
//   h1.textContent = 'insertAdjacentElement';

//   filter.insertAdjacentElement('afterend', h1);

//   console.log(filter);
// };

// insertAdjacentElement();

// Child to parent
// const child = document.querySelector('.child');
// const secondChild = document.querySelector('.child:nth-child(2)');
// // child.style.border = 'red 1px solid';
// // child.parentElement;
// // output = child.parentElement;
// output = child.textContent = 'First Child';
// output = child.style.color = 'red';
// // Second
// output = child.nextElementSibling.textContent = 'Second child';
// output = child.nextElementSibling.style.color = 'green';

// // Third child
// output = secondChild.nextElementSibling.textContent = 'Third Child';
// output = secondChild.nextElementSibling.style.color = '#884741';

// const parent = document.querySelector('.parent');
// // output = parent.childNodes;
// output = parent.childNodes[0];
// // output = parent.lastChild.previousElementSibling.textContent;

// console.log(parent.childNodes, output);

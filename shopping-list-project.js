'use strict';
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function adItem(e) {
  e.preventDefault();

  const li = document.createElement('li');

  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);
  // alert('Data added successfull');
  return;
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icons = icon('fa-solid fa-xmark');
  button.appendChild(icons);
  return button;
}
// console.log(createButton('test'));

function icon(iconClass) {
  const iTag = document.createElement('i');
  iTag.className = iconClass;
  return iTag;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

itemForm.addEventListener('submit', adItem);
itemList.addEventListener('click', removeItem);
// console.log(itemList);

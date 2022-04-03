let itemList= document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

console.log(itemList.childNodes);
console.log(itemList.children);

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello last';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

let newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
let newDivText= document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
let container = document.querySelector('header.container');
let h1= document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

let dDiv = document.createElement('div');
dDiv.className='hello';
dDiv.id='hello1';
dDiv.setAttribute('title','Div');
let dDivText= document.createTextNode('Hello');
newDiv.appendChild(dDivText);
let container = document.querySelector('header.container');
let h1= document.querySelector('header h1');
console.log(dDiv);
dDiv.style.fontSize='30px';
container.insertBefore(dDiv,h1);

let cDiv = document.createElement('div');
cDiv.className='hello';
cDiv.id='hello1';
cDiv.setAttribute('title','Div');
let cDivText= document.createTextNode('Hello World');
cDiv.appendChild(cDivText);
let container = document.querySelector('header.container');
let li= document.querySelector('list-group-item');

console.log(cDiv);
newDiv.style.fontSize='30px';
container.insertBefore(cDiv,li);
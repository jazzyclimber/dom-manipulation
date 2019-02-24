// Select Container to append children nodes
const container = document.querySelector('#container');

// Elements to be created and placed
const par = document.createElement('p')
const heading3 = document.createElement('h3');
const div = document.createElement('div');
const childH1 = document.createElement('h1');
const childP = document.createElement('p');

// Set Styles
par.setAttribute('style', 'color: red;');
heading3.setAttribute('style', 'color: blue');

//append children to div
div.appendChild(childH1);
div.appendChild(childP)

//append new elements into the container
container.appendChild(par);
container.appendChild(heading3);
container.appendChild(div);

//Add Text Content
par.textContent = 'Hey I\'m red';
heading3.textContent = 'Hey I\'m a blue h3';
childH1.textContent = 'Im in a div';
childP.textContent = 'Me too!';

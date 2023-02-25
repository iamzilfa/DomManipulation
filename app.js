// ADDING ELEMENT TO THE PAGE

// const body = document.body

//WE CAN A STRING WITH APPENDING ELEMENT, you can append multiple things at once

// body.append('Hello world');

// 'appendChild' on 'Node': parameter 1 is not of type 'Node'. append one thing at a time

// body.appendChild('Hello world');

//APPEND AN ELEMNT

const body = document.body;
const div = document.createElement('div');

// PRINT THE VISIBLE ELEMENT
// div.innerText = 'Hello world!';

// PRINT ALL THE ELEMENT EVEN THE INVISIBLE AND INDENTATION
// div.textContent = 'Hello world!';

// IF YOU WANT TO RENDER HTML INSIDE ANY ELEMENT

// div.innerHTML = '<strong>Hello world!</strong>';

const strong = document.createElement('strong');
strong.innerText = 'Hello World 2';
div.append(strong);

body.append(div);

// const div = document.querySelector('div');

// console.log(div.innerText);
// console.log(div.textContent);

 

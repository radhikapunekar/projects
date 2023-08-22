 let itemList = document.querySelector('#items');
 //1. parentElement
 console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor='#f4f4f4';
 console.log(itemList.parentElement.parentElement);

 //children
 console.log(itemList.children);
 //2.lastElementChild
 console.log(itemList.lastElementChild);

 //3.lastchild
 console.log(itemList.lastChild);
  
 //5.firstElementChild
 console.log(itemList.firstElementChild);

 //6.firstchild
 console.log(itemList.firstChild);

 //7.nextSibling
 console.log(itemList.nextSibling);

 //8.nextElementSibling
 console.log(itemList.nextElementSibling);

 //9.previousSibling
 console.log(itemList.previousSibling);

 //10.previousElementSibling
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color='green';

//5.createchild
let newListItem=document.createElement('li');
newListItem.textContent='Item 5';
console.log(newListItem);

 //11.createElement
 let newDiv= document.createElement('div');
 newDiv.className='hello';
 newDiv.id='hello1';

 //12.setAttribute
 newDiv.setAttribute('title','Hello Div');

 //13.createtextNode
 let newDivText = document.createTextNode('HEllo');

 //14.appendChild
 newDiv.appendChild(newDivText);

 //1
 let container = document.querySelector('header .container');
 let h1=document.querySelector('header h1');

 console.log(newDiv);
 container.insertBefore(newDiv,h1);

// //2.
 let items= document.getElementById('items');
 let firstchild=items.firstElementChild;
items.insertBefore(newDiv,firstchild);
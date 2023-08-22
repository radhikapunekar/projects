
// //GETELEMENTBYID//
// //console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header')
// //console.log(headerTitle);
// //headerTitle.textContent='Hello';
// //headerTitle.innerText='Goodbye';
// //console.log(headerTitle.innerText);
// //headerTitle.innerHTML='<h3>Hello <h3>'
// header.style.borderBottom=' solid 3px #000';

// //GETELEMENTBYCLASSNAME//
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);console.log(items[1]);
// items[2].style.backgroundColor='green';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// //GETELEMENTBYTAGNAME//
// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }
//QUERYSELECTOR
let seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';

let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';

//QuerySelectorAll
let titles=document.querySelectorAll('.title');
console.log(titles);
let items= document.querySelectorAll('.list-group-item');
items[1].style.color='green';


let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor ='green' ;
}

// //GETELEMENTBYTAGNAME//
// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }
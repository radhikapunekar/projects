//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//document.title=123;
//console.log(document.all);
//console.log(document.forms[0]);


//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header')
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello <h3>'
header.style.borderBottom=' solid 3px #000';

//GETELEMENTBYCLASSNAME//
let items = document.getElementsByClassName('list-group-item');
console.log(items);console.log(items[1]);
items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
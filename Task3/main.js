let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;
  let newDescipt=document.getElementById('description').value;

  // Create new li element
  let li = document.createElement('li');
  
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newDescipt));

  // Create del button element
  let deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //Add edit button
  let editBtn = document.createElement('button');

  //Add class to edit button
  editBtn.className='btn btn-sm float-right edit';

  //Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  } 
}
//Filter item
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get list
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let itemdes = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || itemdes.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

let form=document.getElementById('addForm');
form.addEventListener('submit',addToDoList);

let toRemainDoList=document.getElementById('toDoRemainList');
let toDoDoneList=document.getElementById('toDoDoneList');
let itemId=undefined;
let url='https://crudcrud.com/api/c7a09187d8ba4b29a9925a2dbc5141f1/todoData';
//create ToDoList
function addToDoList(e){
    e.preventDefault();
    const item={
        toDoName:document.getElementById('toDoName').value,
        desc:document.getElementById('description').value,
        done:false
    };
    
    axios.post(url,item)
         .then(res=>{
                console.log(res);
                location.reload();
          })
         .catch(err=>console.log(err));
    
}

//load user data
window.addEventListener("DOMContentLoaded",()=>{
    axios.get(url)
         .then(res=>{
            //console.log(res);
            for(let i=0;i<res.data.length;i++){
                console.log(res.data[i]);
                if(res.data[i].done==false){
                    showRemainItem(res.data[i]);
                }else{
                    showDoneItem(res.data[i]);
                }
                
            }
         })
         .catch(err=>console.log(err));
})

//print item list
function showRemainItem(item){
    let li=document.createElement('Li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${item.toDoName} ${item.desc}`));
    toRemainDoList.appendChild(li);

    //create delete button
    let delBtn=document.createElement('button');
    delBtn.className='btn btn-primary btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    //Remove item
    delBtn.onclick=()=>{
        console.log(item._id);
        axios.delete(`${url}/${item._id}`)
             .then(res=>console.log(res))
             .catch(err=>console.log(err));
        toRemainDoList.removeChild(li);
    }
    li.appendChild(delBtn);

    //create done button
    let doneBtn=document.createElement('button');
    doneBtn.className='btn btn-primary btn-sm float-right delete';
    doneBtn.appendChild(document.createTextNode('Done'));
    doneBtn.onclick=()=>{
        const updateItem={
            toDoName:item.toDoName,
            desc:item.desc,
            done:true
        }
        userId=item._id;
        console.log(item._id);
        console.log(item);
        axios.put(`${url}/${userId}`,updateItem)
             .then(res=>{
                console.log(res);
                location.reload();
            })
             .catch(err=>console.log(err));
        toRemainDoList.removeChild(li);
        
    }
    li.appendChild(doneBtn);
    toRemainDoList.appendChild(li);
}

function showDoneItem(item){
        let liIn=document.createElement('Li');
        liIn.className='list-group-item';
        liIn.appendChild(document.createTextNode(`${item.toDoName} ${item.desc}`));

        let delBtnDone = document.createElement('button');
    delBtnDone.className = 'btn btn-danger btn-sm float-right delete';
    delBtnDone.appendChild(document.createTextNode('Delete'));

    // Remove item from done list
    delBtnDone.onclick = () => {
        axios.delete(`${url}/${item._id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        toDoDoneList.removeChild(liIn);
    };

    liIn.appendChild(delBtnDone);
    toDoDoneList.appendChild(liIn);
      
}

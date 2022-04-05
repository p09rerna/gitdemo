let form= document.getElementById('addForm');
let itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click', removeItem);
function addItem(e){
    e.preventdefault();
    let newItem = document.getElementById('item').value;
    let li= document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    //Create Dlt btn
    let deleteBtn= document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

let edit= document.createElement('div');
edit.className='list-group-item';
edit.appendChild(document.createTextNode('Edit'));
console.log(edit);
if(deletBtn){
deleteBtn.insertAdjacentElement(afterend,edit);
}

let filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function filterItems(e){
    //convert text to lowercase
    let text= e.target.value.toLowerCase();
    let items= itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        let descname= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || descname.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
    }
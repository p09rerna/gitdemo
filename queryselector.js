let secondItem= document.querySelector('.list-group-item:n-th chlid(2)');
secondItem.style.backgroundColor = 'green';

let lastItem = document.querySelector('.list-group-item: last-child');
lastItem.textContent=' ';

let sItem= document.querySelectorAll('.list-group-item:n-th chlid(2)');
sItem.style.textColor = 'green';

let odd= document.querySelectorAll('li: n-th child(odd)');
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}


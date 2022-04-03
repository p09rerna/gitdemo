var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
li[2].style.backgroundColor='green';
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
//var li=document.getElementsByClassName('li');
//li[3].textContent='Hey!!!';
li[3].style.textcolor='white';
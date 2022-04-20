const posts=[
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

let intervalId=0;

function getPosts(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
      let output='';
      for(let i=0;i<posts.length;i++){
          output+= `<li>${posts[i].title}- last updated ${(new Date().getTime()-posts[i].createdAt)/1000} seconds ago</li>`;
      }
      document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        },1000); 
    });
}
const user={
    username: 'abc',
    lastseen:'13th of Jan'
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastseen=new Date().getTime();
                resolve(user.lastseen);
        },1000);
    });
}

function userUpdatedPost(){
    Promise.all([createPost,updateLastUserActivityTime]).then((values) =>{
    console.log(values)
    deletePost()
    .then(()=>{
        getPosts();
    })
})
    .catch(err=> console.log('Error: Something went wrong'))
}

getPosts();

createPost({title:'Post Three', body:'This is post three',createdAt: new Date().getTime()})
.then(getPosts)
.catch(err=> console.log(err));
/*
function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()})
        callback();
    },6000)
}

//create4thPost({title:'Post Four', body:'This is post four', createdAt: new Date().getTime()},getPosts);

var timer;
var count=0;
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++;
        console.log(count);
    },5000);
}*/

function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.value!==0){
                resolve(posts.pop());
            }
            else{
                reject('Array is empty now');
            }
        },1000)
    });
}

createPost({title:'New Post', body:'This is new post',createdAt: new Date().getTime()})
.then(()=>{
    getPosts()
    deletePost().then(()=>{
        getPosts();
    })
})
.catch(err=>console.log(err))


//Promise.all
/*
const promise1= Promise.resolve('Hello World');
const promise2= 10;
const promise3= new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye')
);
Promise.all([promise1,promise2,promise3]).then((values)=>
console.log(values));*/

userUpdatedPost();
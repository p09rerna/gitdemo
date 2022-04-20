console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const promiseWifeBringingTicket= new Promise((resolve,reject)=>{
  setTimeout(()=>{
     resolve('ticket');
  },3000)
});

const getPopcorn = promiseWifeBringingTicket.then((t)=>{
    console.log('wife: i got tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    });
});

const getButter=getPopcorn.then((t)=>{
    console.log('husband: i got popcorn');
    console.log('husband: we should go in');
    console.log('wife: i want butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
    });
});

const getColdDrinks=getButter.then((t)=>{
    console.log('husband: i got butter');
    console.log('wife: i want cold drinks as well');
    return new Promise((resolve,reject)=>{
        resolve(`${t} ColdDrinks`);
    });
});

getColdDrinks.then((t)=>{
    console.log(t);
})

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');

console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  const getcoldDrinks= new Promise((resolve,reject)=>{
      setTimeout(()=> resolve('cold drinks'),3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);

  let coldDrinks= await getcoldDrinks;
  console.log(`got the ${coldDrinks}`);
   
  console.log(`Husband:Anything else darling`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');
console.log('person5 shows ticket');


const PreMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn =  new Promise((resolve, reject) => {
          resolve('popcorn');
    });
    
    const addButter =  new Promise((resolve, reject) => {
          resolve('butter');
    });
  
    const getcoldDrinks= new Promise((resolve,reject)=>{
         resolve('cold drinks');
    });

    let ticket= await person3PromiseToShowTicketWhenWifeArrives;
    let [popcorn,butter,coldDrinks]= await Promise.all([getPopcorn,addButter,getcoldDrinks])
    console.log(`${popcorn},${butter},${coldDrinks}`);
    return ticket;
}
PreMovie().then((t) => console.log(`person3 shows ${t}`));


const posts= async() =>{
const createPost= new Promise((resolve,reject)=>{
       setTimeout(() => resolve(posts.push()),1000);
});

const deletePost= new Promise((resolve,reject)=> {
       setTimeout(()=> {
        if(posts.value!==0){
            resolve(posts.pop());
        }
       },1000);
});

const newPost= await createPost;
console.log('Post Created');
const oldPosts=await deletePost;
console.log('Post Deleted');
};

posts().then((t)=> console.log(t));
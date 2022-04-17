//Different types of usage of "this" keyword:-

//1 'this' inside global scope-

this.table='window table';

console.log(this.table);//same as window

//2 'this' inside an object

var johnsRoom={

table:'johns table'

};

console.log(johnsRoom.table);

//3 'this' inside a method

var johnsRoom={

table:'johns table',

cleanTable(){

console.log(`cleaning ${this.table}`);

}
};

johnsRoom.cleanTable();

//4 'this' inside a function

const clean_Table= function(){

console.log(`cleaning ${this.table}`);

}

clean_Table.call(this);

//5 'this' inside an inner function

const cleanTable_= function(){

let that= this;

const innerFunction=()=>{

console.log(`cleaning ${that.table}`);

}

innerFunction();

};

//6 'this' inside a constructor

let createRoom= function(){

this.table=`${name}s room`

}

createRoom.prototype.cleanTable= function{

console.log(`cleaning ${this.table}`);

}

const jillsRoom=new createRoom('jill');

jillsRoom.cleanTable();

//7 'this' inside a class

class create_Room{

constructor(name){

this.table=`${name}s table`

}

cleanTable(){

console.log(`cleaning ${this.table}`);

}

}

const jills_Room=new createRoom('jill');

jills_Room.cleanTable();


class Student{

    constructor(name,age,number,marks){
    
    this.name=`${name}`,
    
    this.age=`${age}`,
    
    this.phoneNumber=`${number}`,
    
    this.boardMarks=`${marks}`
    
    }
    
    checkMarks(marks){
    
    if(marks>40)
    
    console.log("eligible for college");
    
    else
    
    console.log("not eligible");
    
    }

    static noOfStudents= ()=>{
    
        console.log('There are 50 new students');
        
        };
    
    display(){
       console.log(`Student's name is ${this.name} and age is ${this.age}`);
    }
    
    }
    
    const student1=new Student("James",12);
    
    const student2=new Student("Jane",14);
    
    const student3=new Student("Raj",15);
    
    const student4=new Student("Yash",13);
    
    const student5=new Student("Rohit",14);

    //fat-arrow functions

    var getA = function(a){
        return a;
    };

    let getA = a => a;

    console.log(getA(1));

    let square = (a) => { a*a } ;

    console.log(square(2));

     var a =4;
     let square1 =() => { return a*a};
     console.log(square1());

     let mult = (a,b) => { return a*b};
     console.log(mult(2,4));

     var x = function(){
         var that=this;
         this.val=1;
         setTimeout(function(){
             that.val++;
             console.log(that.val)
         },1)
     };
     var xx = new x();


      var x = function(){
         this.val=1;
         setTimeout(()=>{
             this.val++;
             console.log(this.val)
         },1)
     };
     var xx = new x();

     var a= function(){
         console.log(arguments[0])
     };
     a(1,2,3);

     var a =(...n) => {
         console.log(n[0])
     };
     a(1,2,3);

     class Student{

        constructor(name,age,number,marks){
        
        this.name=`${name}`,
        
        this.age=`${age}`,

        this.boardMarks=`${marks}`,
        
        this.phoneNumber=`${number}`
        
        }
        
         eligibleForPlcements=(age)=>{
        var min_age=18,min_marks=40;

        if(age>min_age && this.marks>min_marks)
        
        return true;
        
        }
        
        }
        
        const student1=new Student("James",22,57);
        
        const student2=new Student("Jane",24,89);
        
        const student3=new Student("Raj",25,34);
        
        const student4=new Student("Yash",23,24);
        
        const student5=new Student("Rohit",24,78);
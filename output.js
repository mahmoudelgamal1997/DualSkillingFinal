
////////// a-
var obj1={name:"aly"}
var obj2 = obj1
obj2.name = "omar"
console.log(obj1.name)
// output is omar 
// because var obj2 = obj1;: obj2 is assigned the reference to the same object as obj1. In JavaScript, objects are passed by reference, so both obj1 and obj2 now refer to the same object in memory.


///////////////////////////

//b- 
console.log(1+1+"1")

// output is 21 
// because 1+1 = 2 and 2+"1" = 21

console.log("1"+1+1)
//output is 111 
// js will convert 1 to string and will be 111 as string 


console.log(1+"1"+1)
// output 111 for the same reason


console.log("1"-1) 
// output 0 
// substraction  convert 1 string to number and perform 1-1 = 0 

console.log(1-"ss")
//output is NaN because it can't do number - string 

console.log(1+"ss")
//output is:  1ss    because js will convert number to string 

console.log(10-null)
// 10
// js will consider not exist and act  10 -0 =10


////////////////////////////////////////////////
// --- C   -
console.log(x)
var x = 10
console.log(y)
let y = 100;
console.log(x)
console.log(y)

//output is 
//undefined for x because x is hoisted 
//Uncaught ReferenceError: Cannot access 'y' before initialization because let isn't hoisted    

//////////////////////////////////////////////////////////////
// D- 
var obj = {
  name: "aly",
  f1: function () {
    console.log(this.name);
  },
  f2: function () {
    console.log(this.name);
  }
};

obj.f1();
obj.f2();


//output  :  aly
// aly 
   
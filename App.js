import React from "react";
import  ReactDOM  from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const heading0 = React.createElement("h1" , {} , "Hello World!");
const heading1 = React.createElement("h1" , {} , "heading 1");
const heading2 = React.createElement("h1" , {} , "heading 2");
const container = React.createElement("div" , {} , [heading0 , heading1 , heading2]);
  
root.render(container); 

// const x = function jaanu () { 
//   console.log("jaanu i am coming for you"); 
// } 

// function laila (x) { 
//   alert("laila i am coming for you"); 
// } 

// const x = () => { 
//   console.log(this);   
// } 

// const obj = { 

//   fun1: function () { 
//     console.log(this); 
//   }, 

//   fun2: () => { 
//     console.log(this); 
//   } 

// } 


// x(); 

// obj.fun1(); 
// obj.fun2(); 


// const person = { 
//   name : "John", 
// } 

// const person2 = { 
//   name : "soniya",  
// } 

// function x () { 
//   console.log(this); 
// } 

// x(); 
// x.call(person); 
// x.call(person2); 


// const obj = {

//    firstName : "john",
//    printName : () => {
//      console.log(this);
//    }, 

//    firstName : "alex",
//    printName2 : function ()  {
//      console.log(this);
//    }
// }

// obj.printName();
// obj.printName2();





 
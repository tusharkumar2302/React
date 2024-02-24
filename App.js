import React from "react";
import  ReactDOM  from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

const heading0 = React.createElement("h1" , {key : "h0"} , "Hello World!");
const heading1 = React.createElement("h1" , {key : "h1"} , "heading 1");
const heading2 = React.createElement("h1" , {key : "h2"} , "heading 2");
const container = React.createElement("div" , {} , [heading0 , heading1 , heading2]);
  
root.render(container); 

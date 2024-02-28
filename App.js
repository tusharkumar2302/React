import React from "react";
import  ReactDOM  from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 Header 
     logo 
     Home 
     About 
     contact 
     cart

Body 
    Restaurant card 
        name of the restaurant
        img of the restaurant


Footer 
      

*/


function Header () {
  return (
  <div className = "navbar">
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
  </div>
  )
 }

 function Body () {
  return (
  <h1>This is the body</h1>
  )
 }

 function Footer () {
  return (
  <h1>This is the footer</h1>
  )
 }



const App = function App () {
  return (
  <>
   <Header />
   <Body />
   <Footer />
  </>
  )
}
  
root.render(<App />);

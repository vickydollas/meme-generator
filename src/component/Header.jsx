import logo from "../Images/logo.svg";
import React from "react";
import "./Header.css"

function Header(){
   return (
      <div className="nav--style">
         <div>
               <img 
               src={logo} 
               alt='logo'
               className="header--sizing"
               />
         </div>
         <p>React Course - Project 3</p>
      </div>
   );
}

export default Header;
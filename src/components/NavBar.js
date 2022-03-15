 import React from "react";
 import { Link } from "react-router-dom"


const NavBar = ({user}) => {
   return (
     <div>
      
       <h2> Stranger's Things</h2>

       {user ? (
         <div id="navLinks">
           <Link to="/home">Home</Link>
           <Link to="/posts">Posts</Link>
           <Link to="/profile">profile</Link>
         </div>
       ) : (
         <div id="navLinks">
           <Link to="/">Home</Link>
           <Link to="/posts">Posts</Link>
           <Link to="/login">Login</Link>
         </div>
       )}
     </div>
   );    

};

export default NavBar
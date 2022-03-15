import React from "react";
import ReactDOM from "react-dom";
import App from "./App";




// const Login = (props) => {
//     return (
//        <div className= "LogingIn">
//            <h1> Login </h1>
//        </div>
//     )
// }

// const PostList = (props) => {
//     return (
//         <div className= "Posts">
//             <h1> Post Lists</h1>
//         </div>
//     )
// }

// const Register = (props) => {
//     return (
//         <div className = "Register">
//             <h1> Sign Up </h1>
//         </div>
//     )
// }


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);


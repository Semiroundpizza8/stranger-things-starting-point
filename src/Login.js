import React, { useState } from "react";
import { loginUser, logOutUser, registerUser } from "./api";
import HomePage from "./HomePage";



const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const [hasTriggeredError,setHasTriggeredError] = useState(false);
  
  


  const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log("Making a submit request...");
    
    const dummyBody = {
      user: {
      username: userName,
      password: password
      
      },

    };

    if(userName.length < 5) {
      setHasTriggeredError(true);
    } 

    if(password.length < 5) {
      setHasTriggeredError(true)
    }

  
  
    else {
      loginUser(dummyBody);

    setUserName("");
    setPassword("");
    
    }

    console.log(userName);

  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleLogout = () => {
    logOutUser();
    
  }

  if(hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>

  return (
    
    <div>
      
      <label>Username</label>
      <input value={userName} onChange={handleUserName} required />

      <label>Password</label>
      <input value={password} type="password" onChange={handlePassword} required />

     

      {hasTriggeredError && <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>}

      <button onClick={handleSubmitButton}>
        Sign In!
      </button>

      <button onClick = {handleLogout}>Sign Out!</button>

    </div>
    
  );
};

export default UserRegistration;


// button onClick={() => {
//   const dummyCreds = {
//     user: {
//       username: "BenOdisho1000",
//       password: "2112IsAwesome"
//     }
//   }
//   registerUser(dummyCreds);
// }}>Register User</button>
// <button onClick={testAuthentication}>Test Auth</button>
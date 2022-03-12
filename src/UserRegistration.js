import React, { useState } from "react";
import { registerUser } from "./api";
import { testAuthentication } from "./api";


const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
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
    } else {
      registerUser(dummyBody);

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
  const handleReenterPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  if(hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>

  return (
    
    <div>
      
      <label>Username</label>
      <input value={userName} onChange={handleUserName} required />

      <label>Password</label>
      <input value={password} onChange={handlePassword} required />

      <label>Confirm Password</label>
      <input value={password} onChange={handleReenterPassword} required/>

      {hasTriggeredError && <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>}

      <button onClick={handleSubmitButton}>
        Register!
      </button>

      <button onClick={testAuthentication}>Test Auth</button>

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
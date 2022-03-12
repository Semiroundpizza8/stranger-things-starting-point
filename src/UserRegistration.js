import React, { useState } from "react";
import { createNewPost } from "./api";


const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [hasTriggeredError,setHasTriggeredError] = useState(false);


  const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log("Making a submit request...");
    const dummyBody = {
      userName: userName,
      password: password,
      confirmPassword:confirmPassword
    };

    if(userName.length < 5) {
      setHasTriggeredError(true);
    } else {
      createNewPost(dummyBody);

    setUserName("");
    setPassword("");
    }

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

    </div>
    
  );
};

export default UserRegistration;
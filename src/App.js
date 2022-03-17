
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import PostForm from "./PostForm";
import PostList from "./PostList";
import { loginAsUser, registerUser, testAuthentication } from "./api";

const dummyCreds = {
  user: {
    username: "BenOdisho1990",
    password: "2112IsAwesome"
  }
}

const App = (props) => {
  const { name } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function isValidJWT() {
    const token = localStorage.getItem("stranger_things_JWT");
    if (!token) setIsLoggedIn(false);
    else {
      const isValid = await testAuthentication();
      setIsLoggedIn(isValid);
    }
  }

  useEffect(() => {
    isValidJWT();
  }, []);

  console.log("IS LOGGED IN: ", isLoggedIn);

  return (
    <>
      <div>
        <h1>Hot Reload is working?</h1>
      </div>
      <h1>Welcome, {name}</h1>
      <button onClick={() => {
        registerUser(dummyCreds);
        isValidJWT();
      }}>Register User</button>
      <button onClick={async () => {
        await loginAsUser(dummyCreds);
        await isValidJWT();
      }}>Attempt Login</button>
      <button onClick={testAuthentication}>Test Auth</button>
      <button onClick={() => {
        localStorage.removeItem("stranger_things_JWT");
        isValidJWT();
      }}>Log Out</button>
      <PostForm />
      {isLoggedIn && <PostList />}
      {isLoggedIn ? <PostList /> : <p>Please Log In...</p>}
    </>
  );
}

export default hot(App);


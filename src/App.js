
import React from "react";
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

  return (
    <>
      <div>
        <h1>Hot Reload is working?</h1>
      </div>
      <h1>Welcome, {name}</h1>
      <button onClick={() => {

        registerUser(dummyCreds);
      }}>Register User</button>
      <button onClick={testAuthentication}>Test Auth</button>
      <button onClick={() => {
        loginAsUser(dummyCreds);
      }}>Attempt Login</button>
      <PostForm />
      <PostList />
    </>
  );
}

export default hot(App);


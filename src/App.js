
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostForm from "./PostForm";
import PostList from "./PostList";
import { registerUser, testAuthentication } from "./api";

const App = (props) => {
  const { name } = props;

  return (
    <>
      <div>
        <h1>Hot Reload is working?</h1>
      </div>
      <h1>Welcome, {name}</h1>
      <button onClick={() => {
        const dummyCreds = {
          user: {
            username: "BenOdisho1000",
            password: "2112IsAwesome"
          }
        }
        registerUser(dummyCreds);
      }}>Register User</button>
      <button onClick={testAuthentication}>Test Auth</button>
      <PostForm />
      <PostList />
    </>
  );
}

export default hot(App);


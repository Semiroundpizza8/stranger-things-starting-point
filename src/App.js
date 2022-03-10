import React from "react";
import { hot } from 'react-hot-loader/root';
import PostForm from "./PostForm";
import PostList from "./PostList";

const App = (props) => {
  const { name } = props;

  return (
    <>
      <div>
        <h1>Hot Reload is working?</h1>
      </div>
      <h1>Welcome, {name}</h1>
      <PostForm />
      <PostList />
    </>
  );
}

export default hot(App);
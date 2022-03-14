
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import Login from "./Login";

const App = (props) => {
  const { name } = props;
  return (
    <>
      <h1 className="welcome">Welcome, {name}</h1>
      <PostList />
      <Login/>
    </>
  );
}

export default hot(App);

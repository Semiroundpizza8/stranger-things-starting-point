import React from "react";
import { hot } from 'react-hot-loader/root';
// import PostForm from "./PostForm";
// import PostList from "./PostList";
// import UserRegistration from "./UserRegistration";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserRegistration from "./UserRegistration"

const App = (props) => {
  const { name } = props;

  return (
    <BrowserRouter>
    {/* <Routes> */}
      <div>
        <h1>Hot Reload is working?</h1>
      </div>
      <h1>Welcome, {name}</h1>
      {/* <PostForm />
      <PostList /> */}
      <Link to = "/register">Register</Link> 
      <Route path = "/register">
        <UserRegistration />

      </Route>
      {/* </Routes> */}
      
    </BrowserRouter>
  );
}
//newItem
export default hot(App);
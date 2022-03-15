import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "../logo.svg";
import "./App.css";

import { Home, NavBar } from "./";

import { getPosts } from "../API";

//import { Home, NavBar } from "./";

// import { getPosts } from "../API";

// App should control everything.
// Data you should keep track of:
//

function App() {
  const [token, setToken] = useState(""); // token from the login
  const [user, setUser] = useState({}); // use this value to check if someone
  const [posts, setPosts] = useState([]); // an array of objects; this will be updated with API
  const [status, setStatus] = useState({}); // used for status bar
  const [open, setOpen] = useState(false); //used to show status or not

  useEffect(() => {
    const fetchPosts = getPosts();
    // console.log("got posts" + fetchPosts);
  });

  return (
    <div>
      <NavBar user={user}></NavBar>
      {/* ALL Routes need to live in this folder */}
      <Routes>
        {/* <Home user={user}></Home> */}
        <Route exact path="/" element={<Home user={user} />} />
      </Routes>
    </div>
  );
}

// NavBar does not need to be within a route. //
// Status does not need to be within a route
// Old way - <Route exact path="/">

export default App;

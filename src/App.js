
import React, { useState, useEffect }from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import Login from "./Login";
import RegisterLogin from "./RegisterLogin";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PostForm from "./PostForm";




const App = () => {
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <>
      <Main posts={posts} setPosts={setPosts} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      
      <PostForm posts={posts} setPosts={setPosts} loggedIn= {loggedIn}/>
      
    </>
  );
};


const Main = (props) => {
 const {loggedIn, setLoggedIn} = props
  const [userData, setUserData] = useState ({});
 
  useEffect(() => { setLoggedIn(!!localStorage.getItem("UserToken"))
 }, []);

 //creategetMe function that takes data once user is logged in - populate prrofile, etc.

useEffect(async ()=> {const user = await getMe()
  setUserData(user);
}, [loggedIn])

  return (
    <>
      
      
    <BrowserRouter>
      <div id="Container"> 
      
        <div className="Navbar">
          <h2>Stranger Things</h2>
          
          <Link to= "/register">Sign Up </Link>
          <Link to= "/login">Login</Link>
    
          
              
        </div>
        <h1 className="welcome"  >Welcome, {userData.username}</h1>
        <PostList posts={props.posts} setPosts={props.setPosts}/>
    <Switch>
     
        {<Route path= "/register">
          <RegisterLogin setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
          {loggedIn }
        </Route> }

        <Route path = "/login">
         { <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/> }
         {loggedIn }
        </Route>

        <Route path = "/posts">
        <PostList />
        </Route>

        

      </Switch>
      </div>
      </BrowserRouter></>
  )
}

export default hot(App);


import React, { useState }from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import Login from "./Login";
import RegisterLogin from "./RegisterLogin";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PostForm from "./PostForm";




const App = () => {
  

  
  return (
    <>
      <Main/>
      
      <PostForm />
      
    </>
  );
};


const Main = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { name } = props;
//   useEffect(() => { setIsLoggedIn(!!localStorage.getItem("stranger_things_JWT");
// }, []);

  return (
    <>
      
      
    <BrowserRouter>
      <div id="Container"> 
      
        <div className="Navbar">
          <h2>Stranger Things</h2>
          {/* set up a ternary that shows SIGN UP AND LOGIN if loggedIn = false */}
          <Link to= "/register">Sign Up </Link>
          <Link to= "/login">Login</Link>
      
          
          {/* if loggedIn is TRUE, display link to sign out */}
              
        </div>
        <h1 className="welcome"  >Welcome, {name}</h1>
        <PostList />
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

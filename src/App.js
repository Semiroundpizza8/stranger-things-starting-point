
import React, { useState }from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import Login from "./Login";
import RegisterLogin from "./RegisterLogin";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";



const App = (props) => {
  

  const { name } = props;
  return (
    <>
      <Main />
      <h1 className="welcome">Welcome, {name}</h1>
      
      
    </>
  );
}

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() => { setIsLoggedIn(!!localStorage.getItem("stranger_things_JWT");
// }, []);

  return (
    <BrowserRouter>
      <div id="Container"> 
      
        <div className="Navbar">
          <h2>Stranger Things</h2>
          {/* set up a ternary that shows SIGN UP AND LOGIN if loggedIn = false */}
          <Link to= "/register">Sign Up </Link>
          <Link to= "/login">Login</Link>
          {/* if loggedIn is TRUE, display link to sign out */}
              
        </div>

    <Switch>
      {/* you can set a useEffect that checks if a user is loggedIn
          when loading the login/register components. 
          If loggedIn is TRUE, can redirect to "/" route
      */}
      
        <Route path= "/login">
          <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        </Route>

        <Route path= "/register">
          <RegisterLogin setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        </Route>

        <Route exact path = "/">
         {!loggedIn && <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/> }
         {loggedIn && <PostList />}
        </Route>

      </Switch>
      </div>
      </BrowserRouter>
  )
}

export default hot(App);

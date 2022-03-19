
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import PostForm from "./PostForm";
import PostList from "./PostList";
import { testAuthentication } from "./api";
import LoggedOutExperience from "./LoggedOutExperience";
import LoggedInExperience from "./LoggedInExperience";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();
  function handleNavClick() {
    history.push("/posts");
  }

  // ONLY FOR REACT-ROUTER-DOM v6
  // const navigate = useNavigate();
  // function handleNavClick() {
  //   navigate("/posts");
  // }

  return (
    <Router>

      <button onClick={() => handleNavClick()}>Go To Posts</button>

      <div>
        <h1>Hot Reload is working?</h1>
      </div>
      <h1>Welcome, {name}</h1>
      <Route path={"/"}>
        {isLoggedIn ?
          <Route path="/">
            <LoggedInExperience setIsLoggedIn={setIsLoggedIn} />
          </Route> :
          <Switch>
            <Route exact path={"/posts"}>
              <PostForm />
            </Route>
            <Route path={"/posts/:postId"}>
              <p>This is a single post!</p>
            </Route>
            <Route path={"/logOut"}>
              <LoggedOutExperience setIsLoggedIn={setIsLoggedIn} />
            </Route>
          </Switch>
        }
      </Route>



      {isLoggedIn && <PostList />}
      {isLoggedIn ? <PostList /> : <p>Please Log In...</p>}
    </Router>
  );
}

export default hot(App);

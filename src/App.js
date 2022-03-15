import React from "react";
import { hot } from "react-hot-loader/root";
import PostList from "./PostList";
import { registerUser, login, logout } from "./services/auth.service";

const App = (props) => {
  const { name } = props;

  return (
    <>
      <div>
        <h1>Welcome,{name}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            const userObject = {
              user: {
                username: "",
                password: "",
              },
            };
            login(userObject);
          }}
        >
          login
        </button>
      </div>
      <button
        onClick={() => {
          const userObject = {
            user: {
              username: "",
              password: "",
            },
          };
          registerUser(userObject);
        }}
      >
        Register User
      </button>
      <div>
        <button onClick={logout}>logout</button>
      </div>

      <PostList />
    </>
  );
};

export default hot(App);

import React from 'react';
import { hot } from 'react-hot-loader/root';
// import PostForm from './PostForm';
// import PostList from './PostList';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import Login from './Login';
import styles from './RegistrationStyles.styles';
import AboutMe from './AboutMe';

const App = () => {
	// const { name } = props;

	return (
		<div style={styles.linkStyle}>
			<BrowserRouter>
				<Link to="/register">Register</Link>

				<Route path="/register">
					<UserRegistration />
				</Route>
				<Link to="/login">Login</Link>

				<Route path="/login">
					<Login />
				</Route>

				<Link to="/about">About Me</Link>
				<Route path = "/about"><AboutMe /></Route>
			</BrowserRouter>
		</div>
	);
};
//newItem
export default hot(App);

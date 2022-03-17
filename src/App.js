import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import PostForm from './PostForm';
import PostList from './PostList';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import Login from './Login';
import styles from './RegistrationStyles.styles';
import { logOutUser } from './api';
import Header from './Header';
import Home from './Home';
import { testAuthentication } from './api';
import MyPosts from './MyPosts';


const App = () => {
	const [isLoggedIn,setIsLoggedIn] = useState(false);

	async function isValidJWT() {
		const token = localStorage.getItem("stranger_things_JWT");
		if (!token) setIsLoggedIn(false);
		else {
		const isValid = await testAuthentication();
		setIsLoggedIn(isValid);
		// setIsLoggedIn(true);
		
		}
		console.log("isLoggedIn",isLoggedIn);
	}
	
	useEffect(() => {
		isValidJWT();
	}, []);

	const [posts, setPosts] = useState([]);
	const handleLogout = () => {
    
		logOutUser();
		setIsLoggedIn(false);
	}

	return (
		<>

			<div> <Header /></div>
			<BrowserRouter>

			
				{isLoggedIn && <><Route path ="/home">
					<Home isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
					</Route>
					</>}

				<div style={styles.RegisterlinkStyle}>
				{!isLoggedIn && <Route path="/register">
					<UserRegistration isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
				</Route>}
				</div>

				{!isLoggedIn && <Route path="/login">
					<Login isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
					
				</Route> }

				{isLoggedIn && <Route path="/posts">
					<PostForm isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} posts = {posts} setPosts = {setPosts}/>
					
				</Route> }

				{<Route path="/posts">
					<PostList posts = {posts} setPosts = {setPosts}/>
					
				</Route> }

				{<Route path="/myposts">
					<MyPosts isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn} posts = {posts} setPosts = {setPosts}/>
					
				</Route> }

				

				{isLoggedIn ? <><Link to = "/logout" onClick={handleLogout}>Logout</Link> <Link to ="/posts">Posts</Link> <Link to = "/myposts">My Posts</Link><Link to = "/home">Home</Link> </>: <><Link to="/register">Register</Link><Link to="/login">Login</Link><Link to ="/posts">Posts</Link></>}

				
			</BrowserRouter>
		</>
	);
};
//newItem
export default hot(App);

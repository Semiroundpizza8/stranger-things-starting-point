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
import AboutMe from './AboutMe';
import SearchForm from './SearchForm';


const App = () => {
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const [posts, setPosts] = useState([]);
	

	async function isValidJWT() {
		const token = localStorage.getItem("stranger_things_JWT");
		if (!token) setIsLoggedIn(false);
		else {
		const isValid = await testAuthentication();
		setIsLoggedIn(isValid);
		
		}
		console.log("isLoggedIn",isLoggedIn);
	}
	
	useEffect(() => {
		isValidJWT();
	}, []);

	
	const handleLogout = () => {
    
		logOutUser();
		setIsLoggedIn(false);
	}

	return (
		<>

			<div> <Header /></div>
			<BrowserRouter>

			
			{<Route path = "/messages"><AboutMe isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>
				</Route>}

				{<Route path = "/search"><SearchForm posts = {posts} setPosts = {setPosts} />
				</Route>}


			
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
					<>
					<Login isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
					
					</>
					
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

				

				{isLoggedIn ? <><Link to = "/logout" onClick={handleLogout}>Logout</Link> <Link to ="/posts">Posts</Link> <Link to = "/myposts">My Posts</Link><Link to = "/home">Home</Link> <Link to ="/messages">Messages</Link> <Link to ="/search">Search</Link> </> : <><Link to="/register">Register</Link><Link to="/login">Login</Link><Link to ="/posts">Posts</Link> <Link to ="/search">Search</Link> </>}

				
			</BrowserRouter>
		</>
	);
};
//newItem
export default hot(App);

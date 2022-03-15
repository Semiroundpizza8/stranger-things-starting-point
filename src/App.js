import React, {useState} from 'react';
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


const App = () => {
	const [isLoggedIn,setIsLoggedIn] = useState(false);
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
					<PostList isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
					
				</Route> }

				{isLoggedIn && <Route path="/posts">
					<PostForm isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
					
				</Route> }

				{isLoggedIn ? <><Link to = "/logout" onClick={handleLogout}>Logout</Link> <Link to ="/posts">Posts</Link> <Link to = "/home">Home</Link> </>: <><Link to="/register">Register</Link><Link to="/login">Login</Link></>}

				
			</BrowserRouter>
		</>
	);
};
//newItem
export default hot(App);

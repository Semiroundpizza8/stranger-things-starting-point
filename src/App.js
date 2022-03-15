import React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';
// import PostForm from './PostForm';
import PostList from './PostList';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import Login from './Login';
import styles from './RegistrationStyles.styles';
// import AboutMe from './AboutMe';
import { logOutUser } from './api';


const App = () => {
	// const { name } = props;
	const [isLoggedIn,setIsLoggedIn] = useState(false);
	const handleLogout = () => {
    
		logOutUser();
		setIsLoggedIn(false);
	}

	return (
		<div style={styles.linkStyle}>
			<BrowserRouter>
				{/* <Link to="/register">Register</Link> */}

				{!isLoggedIn && <Route path="/register">
					<UserRegistration isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
				</Route>}
				
				
				{/* <Link to="/login">Login</Link> */}

				{!isLoggedIn && <Route path="/login">
					<Login isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
					
				</Route> }

				

				{isLoggedIn && <Route path="/posts">
					<PostList isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
					
				</Route> }




				

				{/* {!isLoggedIn ?  <Link to = "/logout">LogOut</Link> : <UserRegistration/>} */}

				{isLoggedIn ? <><Link to = "/logout" onClick={handleLogout}>Logout</Link> <Link to ="/posts">Posts</Link></>: <><Link to="/register">Register</Link><Link to="/login">Login</Link></>}

				
				
			</BrowserRouter>
		</div>
	);
};
//newItem
export default hot(App);

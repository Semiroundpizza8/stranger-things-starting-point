import React, { useState } from 'react';
import { loginUser } from './api';
import styles from './RegistrationStyles.styles';

const Login = (props) => {
	const [ userName, setUserName ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ hasTriggeredError, setHasTriggeredError ] = useState(false);
	const { setIsLoggedIn } = props;

	const handleSubmitButton = async (event) => {
		event.preventDefault();
		console.log('Making a submit request...');

		const dummyBody = {
			user: {
				username: userName,
				password: password
			}
		};

		if (userName.length < 5) {
			setHasTriggeredError(true);
		}

		if (password.length < 5) {
			setHasTriggeredError(true);
		} else {
			try {
				await loginUser(dummyBody);
				setIsLoggedIn(true);

				setUserName('');
				setPassword('');
			} catch (error) {
				console.error(error);
			}
		}

		console.log(userName);
	};

	const handleUserName = (event) => {
		setUserName(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	if (hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>;

	return (
		<div style={styles.loginStyle}>
			<label>Username</label>
			<input value={userName} onChange={handleUserName} required />

			<label>Password</label>
			<input value={password} type="password" onChange={handlePassword} required />

			{hasTriggeredError && <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>}

			<button onClick={handleSubmitButton}>Login</button>
		</div>
	);
};

export default Login;

// button onClick={() => {
//   const dummyCreds = {
//     user: {
//       username: "BenOdisho1000",
//       password: "2112IsAwesome"
//     }
//   }
//   registerUser(dummyCreds);
// }}>Register User</button>
// <button onClick={testAuthentication}>Test Auth</button>

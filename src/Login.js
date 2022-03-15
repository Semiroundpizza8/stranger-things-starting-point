import React, { useState } from 'react'
import { login } from './api/index';




const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [hasTriggeredError, setHasTriggeredError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (username.length < 5) {
            setHasTriggeredError(true);
        }
        else {
            console.log('username: ', username);
            console.log('password: ', password);
            setUsername('');
            setPassword('');
        }
        
        const dataObject = {
            user: {username: username,
                   password: password},
        }

        login(dataObject)
       

    }


    const handleChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value)

    if (hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>

    return (
        <div id='container'>
            {username.length === 0 ?
                <div id='navbar'> Please enter in a name below: </div> :
                <div id='navbar'> Hello, {username}, please enter in your information </div>
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={handlePasswordChange} />
                {hasTriggeredError &&
                    <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>
                }
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}



 export default Login;
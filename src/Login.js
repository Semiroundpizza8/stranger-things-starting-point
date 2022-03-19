import React, { useState } from 'react'
import { login } from './api/index';



const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [hasTriggeredError, setHasTriggeredError] = useState(false);
    const {setLoggedIn, loggedIn} = props

    const handleSubmit = async (event) => {


        event.preventDefault();
        if (password.length < 5) {
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

        const didLoggedInWork = await login(dataObject);
        setLoggedIn(didLoggedInWork);
       

    }



    const logOut =  () => {
        localStorage.removeItem("UserToken");
        setLoggedIn(false);
       
      }
     


    const handleChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value)

    if (hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>
    return (
        <div id='Login-container'>
            {!loggedIn? <>
           { username.length === 0 ?
                <div id='div-navbar'> Please sign in below: </div> :
                <div id='div-navbar'> Hello {username}, please enter in your information </div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={handlePasswordChange} />
                {hasTriggeredError &&
                    <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>
                }
                <button id="summit" type='submit'>Submit</button>
            </form> </> :
            <button className="LogOut" onClick={logOut}>Log out</button>}
        </div>
    )
}



 export default Login;
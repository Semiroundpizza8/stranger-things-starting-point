import React, {useState} from "react";
import { registerUser } from "./api";

const RegisterLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 

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
            setName('');
            setEmail('');
        }
        
        const dataObject = {
            user: {
                name: name,
                email: email,
                username: username,
                password: password},
        }

    
        registerUser(dataObject)
        

    }


    const handleChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value)
    const handleName = (event) => setName(event.target.value)
    const handleEmail = (event) => setEmail(event.target.value)

    if (hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>

    return (
        <div id='Register'>
            {username.length === 0 ?
                <div id='navbar'> Please enter in a name below: </div> :
                <div id='navbar'> Hello, {username}, please enter in your information </div>
            }
            <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Name:</label>
                <input type='text' name='Name' value={name} onChange={handleName} />
                <label htmlFor='Name'>Email:</label>
                <input type='text' name='Email' value={email} onChange={handleEmail} />
                <label htmlFor='email'>Create Username:</label>
                <input type='text' name='Username' value={username} onChange={handleChange} />
                <label htmlFor='password'>Create Password:</label>
                <input type='password' name='Password' value={password} onChange={handlePasswordChange} />
                {hasTriggeredError &&
                    <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>
                }
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}



export default RegisterLogin

const baseUrl = 'https://strangers-things.herokuapp.com';

const postUrl = 'https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts';

export const getPosts = async () => {
    try{
    const response = await fetch(postUrl)
    const returnedPost = await response.json()
    return returnedPost;
} catch(error){
    console.log("error in getPost!")
    throw error;
}

} 

export const createNewPost = async (newPost) => {
    const URL = 'https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/newPost';
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer TestCaseHere'
        },
        body: JSON.stringify(newPost)
    });
    console.log(response)
    const createdPost = await response.json();
    console.log(createdPost)
    return createdPost;
}







export const registerUser = async (userObject) => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/api/2112-FTW-ET-WEB-PT/users/register`;

    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    });

    console.log("this is the response", response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    // TOKEN : json.data.token
    localStorage.setItem('stranger_things_JWT', json.data.token);

    return json;
}



//   Login(dummyCreds);



export const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [hasTriggeredError, setHasTriggeredError] = useState(false);

    const handleSubmit = (event) => {
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
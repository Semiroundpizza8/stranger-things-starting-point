export const getPosts = async () => {
    // URL that we're gonna reach out to
    const url = 'https://jsonplaceholder.typicode.com/posts/';

    // Grab the body given back by the API
    const response = await fetch(url);
    console.log(response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    return json;
};


export const createNewPost = async (newPost) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const json = await response.json();
    console.log(json);
    return json;
};

export const updateNewPost = async (newPost) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const json = await response.json();
    console.log(json);
    return json;
};

export const deletePostById = async (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await fetch(url, {
        method: "DELETE"
    });

    const json = await response.json();
    console.log(json);
    return json;
};

const baseUrl = 'https://strangers-things.herokuapp.com';
const hardCodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJjYmM2MjRiYWE0YzAwMTc4Y2E3NmIiLCJ1c2VybmFtZSI6IkJlbk9kaXNobyIsImlhdCI6MTY0NzA5ODk3OH0.LtAXxoKmxtK1_-jS5sr9UXtezvx6gPDAzgUHUokqKrs";


export const testAuthentication = async () => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/api/2112-FTW-ET-WEB-PT/test/me`;
    const token = localStorage.getItem('stranger_things_JWT')

    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    return json;
};

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

    console.log(response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    // TOKEN : json.data.token
    localStorage.setItem('stranger_things_JWT', json.data.token);

    return json;
};
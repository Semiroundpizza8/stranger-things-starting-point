
const baseUrl = 'https://strangers-things.herokuapp.com/2112-FTW-ET-WEB-PT';

const postUrl = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT/posts';

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
    const URL = `${baseUrl}/newPost`;
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer TestCaseHere'
        },
        body: JSON.stringify(newPost)
    });
    const createdPost = await response.json();
    return createdPost;
}







export const registerUser = async (userObject) => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/users/register`;

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
    localStorage.setItem('UserToken', json.data.token);

    return json;
}



//   Login(dummyCreds);

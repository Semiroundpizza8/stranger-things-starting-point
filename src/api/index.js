
const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT';

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





export const login = async (userObject) => {
    const URL = `${baseUrl}/users/login`; 
    
    const response = await fetch (URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
      });
      console.log("this is the response", response)

      const json = await response.json();
      console.log(json)

      if(json.data === null){
          return false;
      }
      else {
         localStorage.setItem('UserToken', json.data.token);
         return true;
      }
  
}



export const registerUser = async (userObject) => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/users/register`;
    console.log(url);

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
    if(json.data === null){
        return false;
    }
    else {
       localStorage.setItem('UserToken', json.data.token);
       return true;
    }
}


export const createNewPost = async (postObject) => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/posts`;
    console.log(url);

    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObject)
    });

    console.log("this is the response to create a post", response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    
}



  




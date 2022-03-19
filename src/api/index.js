
const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT';

const postUrl = 'https://strangers-things.herokuapp.com/api/2112-FTW-ET-WEB-PT/posts';

export const getPosts = async () => {
    const token = localStorage.getItem('UserToken');
    let response;
    try{
        if (token){
        response = await fetch(postUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }})

    }else {
        response = await fetch(postUrl);
    }
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
    

      const json = await response.json();
      
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
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    });


    // Take the body we got back and convert it to JS Object
    const json = await response.json();

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
    try {
    const url = `${baseUrl}/posts`;
    const token = localStorage.getItem('UserToken')
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify({post: postObject})
    });

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    return json;
    } catch(error){ 
        console.error("this is my create post error!", error)
    }  

}

export const updateNewPost = async (postId, newPost) => {
    const url = `${baseUrl}/posts/${postId}`;
    const token = localStorage.getItem('UserToken')
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json",
            "Authorization": 'Bearer ' + token
        },
        body: json.stringify(newPost)
    });
    const json = await response.json();
    console.log(json);
    return json;
};

// export const deletePost = async (postId) => {
//     const url = `${baseUrl}/posts/${postId}`;
    
//     const response = await fetch(url, {
//         method: "DELETE"
//     });
// }

export const getMe = async () => {
    // URL that we're gonna reach out to
    try {
    const url = `${baseUrl}/me`;
    console.log(url);
const token = localStorage.getItem('UserToken')
    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    });

    console.log("this is the response to get my user profile", response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)
    return json;
} catch(error){ 
    console.error("this is my getMe error!", error)
}  
}
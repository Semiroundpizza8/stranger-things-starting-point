const baseUrl = 'https://strangers-things.herokuapp.com';
export const getPosts = async () => {
    const token = localStorage.getItem('stranger_things_JWT')
    console.log(token);
	// URL that we're gonna reach out to
	const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/posts`;

	// Grab the body given back by the API

	const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': token ? `Bearer ${token}`:null,
        }
    });
	console.log(response);

	// Take the body we got back and convert it to JS Object
	const json = await response.json();
	console.log("post",json);

	return json;
};

export const createNewPost = async (newPost) => {
	const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/posts`;
    const token = localStorage.getItem('stranger_things_JWT')
    console.log(token);
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({post:newPost})
        
	});

	const json = await response.json();
	console.log("response",json);
	return json;
};

export const updateNewPost = async (newPost,postId) => {
	const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/posts/${postId}`;
    const token = localStorage.getItem('stranger_things_JWT')
	const response = await fetch(url, {
		method: 'PATCH',
        
		headers: {
			'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
		},
		body: JSON.stringify({post:newPost})
	});

	const json = await response.json();
	console.log(json);
	return json;
};

export const deletePostById = async (postId) => {
    const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/posts/${postId}`;
    const token = localStorage.getItem('stranger_things_JWT')


    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
    });

    const json = await response.json();
    console.log(json);
    return json;
};


export const createMessages = async (postId,content) => {
	const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/posts/${postId}/messages`;
    const token = localStorage.getItem('stranger_things_JWT')
    
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({message:content})
        
	});

	const json = await response.json();
	console.log("response",json);
	return json;
};

//const hardCodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJjYmM2MjRiYWE0YzAwMTc4Y2E3NmIiLCJ1c2VybmFtZSI6IkJlbk9kaXNobyIsImlhdCI6MTY0NzA5ODk3OH0.LtAXxoKmxtK1_-jS5sr9UXtezvx6gPDAzgUHUokqKrs";


export const testAuthentication = async () => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/test/me`;
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
    console.log("responsejwt",json)
    console.log("success",json.success)
    return json.success ? true : false;
};

export const registerUser = async (userObject) => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/users/register`;
	console.log(userObject)
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

export const loginUser = async (userObject) => {
    // URL that we're gonna reach out to
    const url = `${baseUrl}/api/2112-FTB-ET-WEB-PT/users/login`;
	console.log(userObject)
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
     localStorage.setItem('stranger_things_login', json.data.token);
     localStorage.getItem('stranger_things_JWT')
    return json;
}; 

export const logOutUser = async () => {

localStorage.removeItem('stranger_things_login');
	
}; 

export const aboutMe = async () => {
	// URL that we're gonna reach out to
	const url =  `${baseUrl}/api/2112-FTB-ET-WEB-PT/users/me`;
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

    
}





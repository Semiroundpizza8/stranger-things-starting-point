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
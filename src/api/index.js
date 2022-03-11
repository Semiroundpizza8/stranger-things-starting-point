export const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url)
    const json = await response.json()
    return json;


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
    const json = await response.json();
    console.log(json)
    return json;
}
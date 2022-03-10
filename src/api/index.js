export const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url)
    const json = await response.json()
    return json;

<<<<<<< HEAD
    
=======
    // hello
    //this is Co
>>>>>>> fc0dfaf30b307ec842c6beb86ff82109c51ecaec
} 
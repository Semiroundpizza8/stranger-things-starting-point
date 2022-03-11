
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

// export const createNewPost = async (newPost) => {
//     const URL = 'https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/newPost';
//     const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Authorization': 'Bearer TestCaseHere'
//         },
//         body: JSON.stringify(newPost)
//     });
//     console.log(response)
//     const createdPost = await response.json();
//     console.log(createdPost)
//     return createdPost;
// }
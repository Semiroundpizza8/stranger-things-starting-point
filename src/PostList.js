import React, { useEffect, useState } from 'react';
import { getPosts, createMessages } from './api';

const PostList = (props) => {
    
    const {posts, setPosts} = props;
    // const {isLoggedIn} = props;

    console.log("author",posts)
    
    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        console.log("posts",posts);
    }, []);

    
    return (
        
       <div>
            {posts.map(post =>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p> Description : {post.description}</p>
                    <p> Price : {post.price}</p>
                    <p> WillDeliver : {post.willDeliver ? "true" : "false"}</p>
                    
                   {/* // Ternary operator for isLoggedIn and not is author of the post then show messages */}
                 {(!(post.isAuthor))? <SendMessage post = {post}/> : null}
            </div>)} 
        </div>

    );
};




function SendMessage(props) {
    const [content, setContent] = useState("");
    const {post} = props;
    const handleMessage = (event) => {
        event.preventDefault()
        setContent(event.target.value)
      }

      const handleClickMessage = async (postId) => {
        const data = await createMessages(postId,dummyBody);
        const newMessage = data.message && data.message.content;
        setContent(newMessage);
      }

        const dummyBody = {
          content:content
        };

  return (
    <div key = {post._id}>
    <input value={content} onChange={handleMessage}/>
    {/* <button onClick={() => handleDeletePost(post._id)}>Delete Post</button> */}
  <button onClick={() => handleClickMessage(post._id)}>Send Message</button>
  </div>
  )
}


export default PostList;
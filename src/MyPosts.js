import React from 'react';
import {useState, useEffect} from 'react';
import { getPosts } from './api';

const MyPosts = (props) => {
    
    const {posts, setPosts} = props;
    // const [isAuthor,setIsAuthor] = useState(false);
    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        // setIsAuthor(posts.data.isAuthor);
        console.log("isAuthorposts",posts);
    }, []);

    return (
        
        <div>
            {posts.map(post => post.isAuthor && <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>)}
          </div>
    );
}

export default MyPosts;

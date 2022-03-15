import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        console.log("posts",posts);
    }, []);

    return (
        // <div>
        //     <h1>Hello</h1>
        // </div>
       
        <div>
            {posts.map(post =>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;
import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const posts = await getPosts();
        console.log(posts)
        setPosts(posts.data.posts);
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;
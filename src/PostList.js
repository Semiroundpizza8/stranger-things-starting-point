import React, { useEffect } from 'react';
import { getPosts } from './api';

const PostList = (props) => {
    
    const {posts, setPosts} = props;
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
                    <p>{post.description}</p>
                </div>
            )}
        </div>

    );
};

export default PostList;
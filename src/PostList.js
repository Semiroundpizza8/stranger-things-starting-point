import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import { deletePostById, updateNewPost } from "./api";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    function handleTestUpdate(id) {
        updateNewPost(id, { title: "New Post = Update Made" });
    }

    function handleDeletePost(id) {
        deletePostById(id);

        // WHAT TO DO AFTER A MUTATION:
        //    We could grab our posts and refresh them after deleting
        //    const posts = await getPosts();
        //    setPosts(posts);

        // Or we can assume that the delete op will succeed and remove the post right away
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts);
    }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => handleTestUpdate(post.id)}>Update Post</button>
                    <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                </div>
            )}
        </div>
    );
};

export default PostList;
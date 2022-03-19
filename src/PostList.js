import React, { useState, useEffect } from 'react';
import { getPosts } from './api';
import UpdateForms from "./UpdateForms"

const PostList = (props) => {
    const [editOpen, setEditOpen] = useState(false)
    const {posts, setPosts, loggedIn} = props;

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
    }, []);

    console.log(posts)
    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    {/* if the edit button is clicked, i'd want the form to show up below it */}
                    {post.isAuthor && <button onClick={() => {setEditOpen(!editOpen)}}editOpen={editOpen}>Edit</button>}
                    {post.isAuthor && editOpen && <UpdateForms loggedIn={loggedIn} postId={post.id}/>}
                </div>
            )}
        </div>
    );
};

export default PostList;
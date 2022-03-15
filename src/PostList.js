import React, { useState, useEffect } from "react";
import { getPosts } from "./api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const posts = await getPosts();
    setPosts(posts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h3>{post.price}</h3>
          <h4> {post.author.username}</h4>
          <h5>{post.location}</h5>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;

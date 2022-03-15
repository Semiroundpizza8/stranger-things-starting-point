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
      {/* {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))} */}
    </div>
  );
};

export default PostList;

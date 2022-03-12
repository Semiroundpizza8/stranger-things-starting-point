import React, { useState } from "react";
import { createNewPost } from "./api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePostButtonClick = () => {
    console.log("Making a post request...");
    const dummyBody = {
      title: title,
      body: body
    };

    createNewPost(dummyBody);

    setTitle("");
    setBody("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  return (
    <div>
      <input value={title} onChange={handleTitleChange} />
      <input value={body} onChange={handleBodyChange} />
      <button onClick={handlePostButtonClick}>
        Make Post Request!
      </button>
    </div>
  );
};

export default PostForm;
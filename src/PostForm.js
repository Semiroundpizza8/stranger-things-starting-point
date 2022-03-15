import React, { useState } from "react";
import { createNewPost } from "./api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [willDeliver, setWillDeliver] = useState(false);
  const handlePostButtonClick = () => {
    console.log("Making a post request...");
    const dummyBody = {
      title: title,
      description: description,
      price:price,
      willDeliver:willDeliver
    };

    createNewPost(dummyBody);

    setTitle("");
    setDescription("");
    setPrice(0);
    setWillDeliver(false)
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleDescription = (event) => {
    setDescription(event.target.value);
  }
  const handlePrice = (event) => {
    setPrice(event.target.value);
  }
  const handleWillDeliver = (event) => {
    setWillDeliver(event.target.value);
  }

  return (
    <div>
      <input value={title} onChange={handleTitleChange} />
      <input value={description} onChange={handleDescription} />
      <input value={price} onChange={handlePrice} />
      <input value={willDeliver} onChange={handleWillDeliver} />

      <button onClick={handlePostButtonClick}>
        Make Post Request!
      </button>
    </div>
  );
};

export default PostForm;
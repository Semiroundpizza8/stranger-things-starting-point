import React, { useState } from "react";
import { createNewPost } from "./api";
import styles from "./RegistrationStyles.styles";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [willDeliver, setWillDeliver] = useState(false);
  


  
  const {posts, setPosts} = props;
  
  const handlePostButtonClick = async () => {
    console.log("Making a post request...");
    const dummyBody = {
      title: title,
      description: description,
      price:price,
      willDeliver:willDeliver
    };

    const data = await createNewPost(dummyBody);
    const newPost = data.data.post;

    
    console.log("newPost",newPost)

    const newPostList = [newPost, ...posts]
    setPosts(newPostList);
    
    setTitle("");
    setDescription("");
    setPrice("0");
    setWillDeliver(false)
  };

//   Send a message to the author of any post for which they are not the author
// See all messages for any post for which they are the author
// See all messages they've received in a special view

 

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
    <div style={styles.postFormStyle}>
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
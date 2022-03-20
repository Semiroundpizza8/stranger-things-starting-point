import React from 'react';
import { useEffect,useState} from 'react';
import { getPosts, updateNewPost } from './api';
import { deletePostById } from './api';
import styles from './RegistrationStyles.styles';

const MyPosts = (props) => {
    
    const {posts, setPosts} = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("0");
    const [willDeliver, setWillDeliver] = useState(false);
    const [location, setLocation] = useState("")
  
    // const [isAuthor,setIsAuthor] = useState(false);
    function handleDeletePost(id) {
        deletePostById(id);

        // WHAT TO DO AFTER A MUTATION:
        //    We could grab our posts and refresh them after deleting
        //    const posts = await getPosts();
        //    setPosts(posts);

        // Or we can assume that the delete op will succeed and remove the post right away
        const newPosts = posts.filter(post => post._id !== id);
        setPosts(newPosts);
    }

    async function handleUpdatePost(id) {
        
    const dummyBody = {
      title: title,
      description:description,
      price:price,
      location:location,
      willDeliver:willDeliver
    };

    const newupdatedPost = await updateNewPost(dummyBody,id);
    console.log("updatedpost",newupdatedPost);

    const newPost = newupdatedPost.data.post;

    const found = posts.find(post => post._id === id);
    setPosts([...posts, newPost, found]);
    
}


    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts); 
        // setIsAuthor(posts.data.isAuthor);
        console.log("isAuthorposts",posts);
    }, []);

    const handleEditTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleLocation = (event) => {
        setLocation(event.target.value)
    }
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleWillDeliver = (event) => {
        setWillDeliver(event.target.value)
    }

    return (
        
        <div>
            {posts && posts.map(post => post.isAuthor && <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button onClick={() => handleDeletePost(post._id)}>Delete Post</button>
                    
                    <div style={styles.updateStyle}>
                    <label>New Title</label>
                    <input onChange={handleEditTitle}></input>
                    <label>New Description</label>
                    <input onChange={handleDescription}></input>
                    <label>New Location</label>
                    <input onChange={handleLocation}></input>
                    <label>New Price</label>
                    <input onChange={handlePrice}></input>
                    <label>New WillDeliver</label>
                    <input onChange={handleWillDeliver}></input>
                    <button onClick={() => handleUpdatePost(post._id)}>Update Post</button>
                    </div>
                </div>)}
          </div>
    );
}

export default MyPosts;

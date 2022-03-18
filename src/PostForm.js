import React, {useState} from "react";
import { createNewPost } from "./api";

const PostForm =  (props) => {

    // post (object, required)
    // title (string, required): the title/name of the item for sale
    // description (string, required): the description of the posted item
    // price (string, required): the price of the posted item
    // location (string, optional): the location of the posted item, will default to [On Request] if not supplied
    // willDeliver (boolean, optional): whether or not the poster will deliver the item, default is false

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState(''); 
    const [willDeliver, setWillDeliver] = useState(false);
    const [posts, setPosts] = useState([]);
    const {loggedIn} = props

    const [hasTriggeredError, setHasTriggeredError] = useState(false);
   

    const handleSubmit = async (event) => {
        event.preventDefault();
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setWillDeliver(false);
        
        const postObject = {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver
            
        }

        const sendPost = await createNewPost(postObject);
        //i really doubt this might work. Should I pull the posts array, 
        //check for the last index, and create an additional object to add that will contain
        //the information entered and the info of the person logged in? Is there an easier route?
        posts.data.posts.push(sendPost);
    }

    
    const handleTitle = (event) => setTitle(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value)
    const handlePrice = (event) => setPrice(event.target.value)
    const handleLocation = (event) => setLocation(event.target.value)
    const handleDeliver = (event) => setWillDeliver(event.target.value)

    if (hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>

    return (
        <div id='PostForm'>
            {loggedIn? 
            <>
            <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='Title' value={title} onChange={handleTitle} />
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' value={description} onChange={handleDescription} />
             <label htmlFor='price'>Price $ </label>
            <input type='number' name='price' value={price} onChange={handlePrice} /> 
            <label htmlFor='location'> location </label>
            <input type='text' name='location' value={location} onChange={handleLocation} />
            <label htmlFor='willDeliver'> Will deliver? </label>
            <input type='checkbox' name='willDeliver' value={willDeliver} onChange={handleDeliver} />
                {hasTriggeredError &&
                    <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>
                }
                <button id="summit" type='submit'>Submit</button>
            </form> </> :  null}
        </div>
    )
}



export default PostForm

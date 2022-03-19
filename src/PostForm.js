import React, {useState} from "react";
import { createNewPost } from "./api";


const PostForm =  (props) => {

    // const [posts, setPosts] = props;
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
    const {loggedIn, posts, setPosts} = props

    const [hasTriggeredError, setHasTriggeredError] = useState(false);
   

    const handleSubmit = async (event) => {
        event.preventDefault();
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            setWillDeliver(false);
        
        const postObject = {
                title: posts.data.posts.title,
                description: posts.data.posts.description,
                price: posts.data.posts.price,
                location: posts.data.posts.location,
                willDeliver: posts.data.posts.willDeliver
            
        }


        // {
        //     "success": true,
        //     "error": null,
        //     "data": {
        //         "posts": [
        //             {
        //                 "location": "[On Request]",
        //                 "willDeliver": true,
        //                 "messages": [],
        //                 "active": true,
        //                 "_id": "622cba014baa4c00178ca766",
        //                 "author": {
        //                     "_id": "622cba014baa4c00178ca763",
        //                     "username": "jane1234"
        //                 },
        //                 "cohort": "622cba014baa4c00178ca761",
        //                 "title": "Golden Retriever puppies",
        //                 "description": "Not looking for any money, just want to find a good home for these four beautiful pups.",
        //                 "price": "free",
        //                 "createdAt": "2022-03-12T15:19:29.543Z",
        //                 "updatedAt": "2022-03-12T15:19:29.609Z",
        //                 "__v": 0,
        //                 "isAuthor": false
        //             },
        //             {
        //                 "location": "[On Request]",
        //                 "willDeliver": false,
        //                 "messages": [],
        //                 "active": true,
        //                 "_id": "622cba014baa4c00178ca765",
        //                 "author": {
        //                     "_id": "622cba014baa4c00178ca762",
        //                     "username": "joe1234"
        //                 },
        //                 "cohort": "622cba014baa4c00178ca761",
        //                 "title": "Practically new Stradivarius",
        //                 "description": "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
        //                 "price": "$14.3 million",
        //                 "createdAt": "2022-03-12T15:19:29.543Z",
        //                 "updatedAt": "2022-03-12T15:19:29.603Z",
        //                 "__v": 0,
        //                 "isAuthor": false
        //             },
        //             {
        //                 "location": "Ames, IA",
        //                 "willDeliver": true,
        //                 "messages": [],
        //                 "active": true,
        //                 "_id": "622cba014baa4c00178ca767",
        //                 "author": {
        //                     "_id": "622cba014baa4c00178ca764",
        //                     "username": "caesar1234"
        //                 },
        //                 "cohort": "622cba014baa4c00178ca761",
        //                 "title": "NordicTrack Freestrider Elliptical Trainer",
        //                 "description": "To be honest, it is more amazing than my resolve.",
        //                 "price": "$1400, OBO",
        //                 "createdAt": "2022-03-12T15:19:29.543Z",
        //                 "updatedAt": "2022-03-12T15:19:29.614Z",
        //                 "__v": 0,
        //                 "isAuthor": false
        //             },
        //             {
        //                 "location": "[On Request]",
        //                 "willDeliver": true,
        //                 "messages": [],
        //                 "active": true,
        //                 "_id": "623287689c03eb0017b986d9",
        //                 "title": "New Post",
        //                 "description": "undefined",
        //                 "price": "undefined",
        //                 "author": {
        //                     "_id": "622ff0a37b4f410017da1877",
        //                     "username": "apples"
        //                 },
        //                 "cohort": "622cba014baa4c00178ca761",
        //                 "createdAt": "2022-03-17T00:57:12.229Z",
        //                 "updatedAt": "2022-03-17T00:57:12.229Z",
        //                 "__v": 0,
        //                 "isAuthor": false
        //             }
        //         ]
        //     }
        // }


console.log(postObject);
        const sendPost = await createNewPost(postObject);
        
        //i really doubt this might work. Should I pull the posts array, 
        //check for the last index, and create an additional object to add that will contain
        //the information entered and the info of the person logged in? Is there an easier route?
        setPosts(...posts, sendPost);
    }

    
    const handleTitle = (event) => setTitle(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value)
    const handlePrice = (event) => setPrice(event.target.value)
    const handleLocation = (event) => setLocation(event.target.value)
    const handleDeliver = (event) => setWillDeliver(event.target.value)

    if (hasTriggeredError) return <p style={{ color: 'red' }}> Whoopse, looks like you need to fix something! </p>

    return (
        <div id='PostForm'>
            {!loggedIn ? 
            <>
            <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='Title' value={title} onChange={handleTitle} required/>
            <label htmlFor='description'>Description</label>
            <input type='text' name='description' value={description} onChange={handleDescription} required/>
             <label htmlFor='price'>Price $ </label>
            <input type='number' name='price' value={price} onChange={handlePrice} required/> 
            <label htmlFor='location'> location </label>
            <input type='text' name='location' value={location} onChange={handleLocation} />
            <label htmlFor='willDeliver'> Will deliver? </label>
            <input type='checkbox' name='willDeliver' value={willDeliver} onChange={handleDeliver} />
                
                <button id="summit" type='submit'>Submit</button>
            </form> </> :  
            <p>Register or login to create a post!</p>}
        </div>
    )
}



export default PostForm

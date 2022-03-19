import React, {useEffect, useState} from "react";
import { getMe } from "./api"; 




// user (object)
// posts (array of post): an array of post objects made by the user
// messages (array of message): an array of messages made on posts made to or by the user
// _id (string): the database identifier of the user
// username (string): the username of the user




const Profile =  (props) => {

    
    const [userPosts, setUserPosts] = useState('');
    const [userMessages, setUserMessages] = useState('');
    const [userId, setUserId] = useState('');
    const [userUsername, setUserUsername] = useState(''); 
    
    const {loggedIn} = props


   

    useEffect(async () => {
        const userPosts = await getMe();
        console.log(userPosts)
        setUserPosts(userPosts.posts);
    }, [loggedIn]);

    useEffect(async () => {
        const userMessages = await getMe();
        console.log(userMessages)
        setUserMessages(userMessages.messages);
    }, [loggedIn]);

    useEffect(async () => {
        const userKey = await getMe();
        console.log(userKey)
        setUserId(userKey._Id);
    }, [loggedIn]);

    useEffect(async () => {
        const username = await getMe();
        console.log(username)
        setUserUsername(userUsername.username);
    }, [loggedIn]);



    return (
     <> <p> What's the problem here?</p>  <div>
<p>Welcome to your profile {userUsername}</p>
<p>Your ID is {userId}</p>
        </div>
        <div>
            {userPosts.map(post =>
                <div key={post.posts._id}>
                    <h2>{post.posts.title}</h2>
                    <p>{post.posts.description}</p>
                </div>
            )}
        </div>
        <div>
            {userMessages.map(message =>
                <div key={message._id}>
                    <h2>{message.fromUser}</h2>
                    <p>{message.content}</p>
                </div>
            )}
        </div>
        </>
    );
};

export default Profile;
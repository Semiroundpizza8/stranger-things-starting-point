import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { aboutMe } from './api';
const Home = () => {
    const [postUserName,setPostUserName] = useState([]);

    useEffect(async () => {
        const postsname = await aboutMe();
        console.log("aboutme", postsname)
        setPostUserName(postsname.data.username);
    }, []);

    return(
        <>
        <h1> Welcome to Strangers Things!</h1> 
        <h2>Logged in as {postUserName}</h2>
        </> 

               
    )
}

export default Home;

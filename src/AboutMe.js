import React, {useState, useEffect} from 'react'
import { aboutMe } from './api';

const AboutMe = () => {

  const [message,setMessage] = useState([]);
  // const {posts, setPosts} = props;

    useEffect(async () => {
        const postsname = await aboutMe();
        console.log(postsname);
        console.log("aboutmeresponse", postsname)
        setMessage(postsname.data.messages);
    }, []);

    return(
      <div>
      {message.map(post =>
          <div key={post.id}>
            <p>{post.content}</p>
             
      </div>)}  

      <p> test about me </p>

      
  </div>
               
    )
}

export default AboutMe;

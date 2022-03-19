import React, {useState,useEffect} from 'react'
import { getPosts } from './api';

const SearchForm = (props) => {

    const {posts, setPosts} = props;
    // const {isLoggedIn} = props;

    console.log("author",posts)
    
    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        console.log("posts",posts);
    }, []);

    const postMatches = (post,searchTerm) => {
        if(post.title.includes(searchTerm) || post.description.includes(searchTerm)) {
            return true;
        } else {
            return false;
        }
    }

const [searchTerm, setSearchTerm] = useState('');
const filteredPosts = posts && posts.filter(post => postMatches(post, searchTerm));
console.log("filter",filteredPosts);
console.log("search", searchTerm);

// const postsToDisplay = searchTerm.length ? filteredPosts : posts;



const inputHandler = (event) => {
 
   const searchval =  event.target.value;
   setSearchTerm(searchval)
}   

const handleSearch = (event) => {
    event.preventDefault();
    filteredPosts;
}



  return (
    <div>
        <label>Search Post: </label>
        <input value={searchTerm} onChange={inputHandler} />
        <ul>
            {filteredPosts && filteredPosts.map((post) => (
               <> 
                <li key={post.id}>{post.title}</li>
                <li key={post.id}>{post.description}</li> 
                </> 
            ))}
        </ul>
            <button onClick={handleSearch}>SEARCH</button>
        
    </div>
  )
}



export default SearchForm;

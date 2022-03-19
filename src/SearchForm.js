import React, {useState} from 'react'

const SearchForm = (post,text) => {

    const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;



const inputHandler = (event) => {
    
    setSearchTerm(event.target.value);

}

const handleSearch = (event) => {
    event.preventDefault();
}

  return (
    <div>
        
        <input type="text" onChange={inputHandler}>
        <ul>
            {filteredPosts.map((item) => (
               <> 
                <li key={item.id}>{item.title}</li>
                <li key  = {item.id}>{item.description}</li> 
                </> 
            ))}
        </ul>
            <button onClick={handleSearch}>SEARCH</button>
        
        </input>
       
        
    </div>
  )
}



export default SearchForm;

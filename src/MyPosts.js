import React from 'react';
import { useEffect} from 'react';
import { getPosts } from './api';
import { deletePostById } from './api';

const MyPosts = (props) => {
    
    const {posts, setPosts} = props;
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
    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        // setIsAuthor(posts.data.isAuthor);
        console.log("isAuthorposts",posts);
    }, []);

    return (
        
        <div>
            {posts.map(post => post.isAuthor && <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button onClick={() => handleDeletePost(post._id)}>Delete Post</button>
                </div>)}
          </div>
    );
}

export default MyPosts;

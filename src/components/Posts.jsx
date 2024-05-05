import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import './Posts.css'

function Posts ({postData, isLoading}) {
    return(
        <div>  
            <h3>Latest posts</h3>  
            <Link to="newPost"><h3>New post</h3></Link>
            <PostCard postData = {postData} isLoading={isLoading} />
        </div>
    )
}

export default Posts
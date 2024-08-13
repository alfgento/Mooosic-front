import PostCard from "./PostCard";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";
import './Posts.css'

function Posts ({postData, isLoading}) {
    return(
        <div className="posts-zone">  
            <h3 className="latest-posts">Latest posts</h3>  
            <LogOut />
            <div className="postsdiv">
                <Link className="link" to="newPost"><h3>New post</h3></Link>
                <PostCard postData = {postData} isLoading={isLoading} />
            </div>
        </div>
    )
}

export default Posts
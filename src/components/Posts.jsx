import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import './Posts.css'

function Posts ({postData, isLoading}) {
    return(
        <div>
            
            <h2>Últimos posts</h2>
            <PostCard postData = {postData} isLoading={isLoading} />
            
        </div>
    )
}

export default Posts
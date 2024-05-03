import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function Posts ({postData, isLoading}) {
    return(
        <div>
            <h2>Últimos posts</h2>
            <PostCard postData = {postData} isLoading={isLoading} />
            <Link to="./PostForm">Nuevo post</Link>
        </div>
    )
}

export default Posts
import PostCard from "./PostCard";

function Posts ({postData, isLoading}) {
    return(
        <div>
            <h2>Ultimos posts</h2>
            <PostCard postData = {postData} isLoading={isLoading} />
        </div>
    )
}

export default Posts
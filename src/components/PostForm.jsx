function PostForm () {
    return(
        <form action="http://localhost:3000/create" method="POST" enctype="application/json">
            <h2>New post</h2>
            <label for="title">User</label>
            <input type="text" id="title" name="userName" />
            <input type="text" id="content" name="content" />
            <button type="submit">Post</button>
        </form>
    )
}
export default PostForm
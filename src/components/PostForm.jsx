function PostForm () {
    return(
        <form action="submit" method="post">
            <h2>Nuevo post</h2>
            <label for="title">Título</label>
            <input type="text" id="title"/>
            <input type="text" id="content"/>
            <button type="submit">Publicar</button>
        </form>
    )
}
export default PostForm
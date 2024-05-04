import moment from 'moment'

function PostCard  ({postData, isLoading}) {
    let date = []

    const deleting = (id) => {
        fetch(`http://localhost:3000/id/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    // Recargar la página después de eliminar la publicación con éxito
                    window.location.reload();
                } else {
                    console.error('Error al eliminar la publicación');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    postData.forEach(post => {
         const dateFormated = moment.utc(post.createdAt).format('DD-MM-YYYY HH:mm');
        date.push(dateFormated)
    });
     if(isLoading){
        return(<p>Cargando...</p>)
        }else{
                
            return(
                <>
                {postData.map((post, index) =>(
                    <div className='post' key={post._id}>
                        <div className='top-post'>
                            <h3>{post.title}</h3>
                            <p>{post.userName}</p>
                        </div>
                        <p>{post.content}</p>
                        <div className='bot-post'>
                            <p>{date[index]}</p>
                            <button>Like</button>
                            <button onClick={()=>{deleting(post._id)}}>Delete</button>
                        </div>
                    </div>
                ))}
                </>
            )
        }
        
}

export default PostCard
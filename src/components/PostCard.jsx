import moment from 'moment'
function PostCard  ({postData, isLoading}) {
    let date = []
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
                        </div>
                    </div>
                ))}
                </>
            )
        }
        
}

export default PostCard
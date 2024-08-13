import React, { useState } from 'react';
import moment from 'moment';
import { FaRegHeart } from 'react-icons/fa';

function PostCard({ postData, isLoading }) {
    const [likedPosts, setLikedPosts] = useState({});

    const handleLike = (id) => {
        setLikedPosts((prevLikedPosts) => ({
            ...prevLikedPosts,
            [id]: !prevLikedPosts[id]
        }));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/id/${id}`, { method: 'DELETE' })
            .then((response) => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Error al eliminar la publicación');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    if (isLoading) {
        return <p>Cargando...</p>;
    } else {
        return (
            <>
                {postData.map((post) => (
                    <div className="post" key={post._id}>
                        <div className="top-post">
                            <p>{post.userName}</p>
                        </div>
                        <p>{post.content}</p>
                        <div className="bot-post">
                            <p>{moment.utc(post.createdAt).format('DD-MM-YYYY HH:mm')}</p>
                            <button className='like-btn' onClick={() => handleLike(post._id)}>
                                <FaRegHeart className={likedPosts[post._id] ? 'heart red' : 'heart'} />
                            </button>
                            <button onClick={() => handleDelete(post._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default PostCard;

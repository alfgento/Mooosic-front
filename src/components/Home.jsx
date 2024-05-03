import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import VacaImage from '../assets/logo-cow.png'
import './Home.css'
import Posts from './Posts'


function Home ({postData, isLoding}) {
    return (
        <>
            <div className='title'>
                <img className='logo' src={VacaImage} />
                <h1>MOOOSIC</h1>
                <div className='login'>
                    <Link to=''>Login</Link>
                    <Link to='sign-in'>Sign In</Link>
                </div>
            </div>
            <div className='dashboard'> 
                <Link to="newPost">Nuevo post</Link>
                <Posts postData={postData} isLoading={isLoding}/>
            </div>
        </>
    )
}
export default Home;
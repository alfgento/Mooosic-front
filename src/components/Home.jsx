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
                <Posts postData={postData} isLoading={isLoding}/>
            </div>
        </>
    )
}
export default Home;
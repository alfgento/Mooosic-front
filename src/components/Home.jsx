import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import VacaImage from '../assets/vaca.jpg'
import './Home.css'


function Home () {
    return (
        <>
            <div className='title'>
                <img className='logo' src={VacaImage} />
                <h1>MOOOSIC</h1>
            </div>
        </>
    )
}
export default Home;
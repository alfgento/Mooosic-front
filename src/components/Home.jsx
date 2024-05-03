import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import VacaImage from '../assets/logo-cow.png'
import './Home.css'
import Posts from './Posts'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




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
               
                <Posts postData={postData} isLoading={isLoding}/>
            </div>
            <footer>
                <Link>About Us</Link>
                <Link>Work with us</Link>
                <Link>GDPR</Link>
                
                <h3>Follow us!</h3>
                <div className='isocial'>
                    
                    <Link><FaFacebook /></Link>
                    <Link><FaXTwitter /></Link>
                    <Link><FaInstagram /></Link>
                    <Link><FaYoutube /></Link>
                </div>
            </footer>
        </>
    )
}
export default Home;
import React from 'react';
import { auth } from '../../firebase';
import {useNavigate} from 'react-router-dom';
import './LogOut.css'

function SignOut () {
   
    const navigate = useNavigate()

    
    const logOut = () => {
        try {
        auth.signOut().then(() => {
            alert('Log out successful')
            navigate('/')})
        } catch (error) {
            console.error('Error signing out: ', error)
        
        }
    }
    return (
        <button className='logout_btn' onClick={logOut}>Logout</button>
    )
}

export default SignOut;
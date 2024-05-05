import React from 'react'
import './Home.css'
import Posts from './components/Posts'
import Header from './components/Header'
import Footer from './components/Footer'

function Home ({postData, isLoding}) {
    return (
        <>
            <div className='header'>
                <Header />
            </div>
            <div className='dashboard'> 
                <Posts postData={postData} isLoading={isLoding}/>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>
    )
}
export default Home;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css'

function App() {

  const [postData, setPostData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:3000')
  .then(res => res.json())
  .then(data => {
    setPostData(data);
    setIsLoading(false);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    setIsLoading(false);
  });
    
  },[])

  

  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home postData = {postData} isLoading={isLoading} />} />
      </Routes>
    </Router>
    
  )
}

export default App

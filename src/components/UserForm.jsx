import './UserForm.css';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import {useNavigate} from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [surname, setSurname] = useState('');
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      navigate('/')
      
      alert(`Account created succesfully. Welcome ${name}!, please login to access your account.`);
      
    } catch (error) {
      console.log(error);
     
    }
  };

  return (
    <form className='sign-in-form' action="http://localhost:3000/user/createUser" method="POST" encType="application/json" >
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        id="surname"
        value={surname}
        name="surname"
        onChange={(e) => setSurname(e.target.value)}
      /> 

      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        value={age}
        name="age"
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={signIn}>
        Sign Up
      </button>
    </form>
  );
}

export default SignIn;

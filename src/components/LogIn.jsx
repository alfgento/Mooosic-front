import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import {useNavigate} from 'react-router-dom'


function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const logIn = async () => {
    try {
      const loginInput = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/')
      
      alert(` Welcome ${user.name}!`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" onClick={logIn}>
        Log In
      </button>
    </form>
  );
}

export default LogIn;
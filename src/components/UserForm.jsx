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
  
  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      navigate('/')
      // Perform additional actions to set the user's username, age, and surname
      // For example, you could use the Firebase Realtime Database or Firestore to store this information
      alert(`Account created succesfully. Welcome ${name}!}`);
      // Redirect the user to the home page or perform other actions
    } catch (error) {
      console.log(error);
      // Show an error message to the user
    }
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        value={age}
        name="age"
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        id="surname"
        value={surname}
        name="username"
        onChange={(e) => setSurname(e.target.value)}
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

      <button type="button" onClick={signIn}>
        Sign Up
      </button>
    </form>
  );
}

export default SignIn;

// function UserForm () {
//     return(
//         <form action="http://localhost:3000/user/createUser" method="POST" enctype="application/json" className="sign-in-form">
//             <h2>Sign In</h2>
//             <label htmlFor="username">User name</label>
//             <input type="text" id="username" name="username"/>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name='name'/>
//             <label htmlFor="surname">Surname</label>
//             <input type="text" id="surname" name='surname'/>
//             <label htmlFor="age">Age</label>
//             <input type="text" id="age" name='age'/>
//             <label htmlFor="email">Email</label>
//             <input type="text" id="email" name='email'/>
//             <button type="submit" >Create user</button>
//         </form>
//     )
// }
 
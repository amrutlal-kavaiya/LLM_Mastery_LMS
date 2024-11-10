// pages/signup.js

import { useState } from 'react';
import firebase from '../firebase/clientApp';
import { useRouter } from 'next/router';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      router.push('/');
    } catch (error) {
      console.error('Signup error', error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

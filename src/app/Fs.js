// src/SignUp.js
'use client'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './fire/page';
import { toast } from 'react-toastify';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      setError('');
      toast.success("Account created successfully")
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form className='  bg-orange-400 mx[22vw] py-4 ' onSubmit={handleSignUp}>
        <div className='flex justify-center  my-4 '>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex justify-center my-4 '>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
   <div  className=' flex justify-center'>
   <button className=' bg-white'  type="submit">Sign Up</button>
   </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default SignUp;

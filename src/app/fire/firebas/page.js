// src/SignInButton.js
'use client'
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../page';
import { FcGoogle } from "react-icons/fc";
import Fbb from '../../Fs';
import { IoLogoFacebook } from "react-icons/io";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'


const page = () => {

    const route= useRouter()

    const [google, setgoogle] = useState();
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth,provider);
      const user = result

      setgoogle(user)
      toast.success("successfull singup ")

    //   route.push('../dasbod')
     
      // Handle user info (e.g., update state, send user to a different page)
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

 try {
    console.log(google)
 } catch (error) {
    console.log('errr',error)
 }

  return (
   <>
   <Fbb/>
 <div className=' flex justify-center'>

 <button onClick={handleSignIn}>
     Sign in with Google <FcGoogle className='  size-10 mx-5'/>
    </button> 
 </div>

 <div className=' flex justify-center'>

 <button onClick={handleSignIn}>
     Sign in with Facebook<IoLogoFacebook className='  size-10 mx-5'/>
    </button> 
 </div>

 {/* {
    google.email
 } */}
   </>
  );
};

export default page

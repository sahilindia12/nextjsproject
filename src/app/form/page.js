
'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function page() {


const [dta, setdta] = useState();
const [username, setusername] = useState();
const [email, setgmail] = useState();
const [password, setpas] = useState();


console.log(password,username,email)
  
const fun=async()=>{
    const call= await (await axios.post("http://localhost:4000/singup",{username,email,password})).data
setdta(call)

// const local= await localStorage.setItem('dta','token')
    
}      
    
          
  

    console.log('dta',dta)

    const google=async()=>{
    
  window.open("http://localhost:4000/auth/google/callback","_self")

  toast.success("loging susse")

    }
  return (
    <div className=' mx-[22vw]'>

<form className=' my-9 bg-gray-400  p-4'>
<div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label">username</label>
    <input  onChange={(e)=>setusername(e.target.value)} type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setgmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setpas(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>


</form>
<button type="submit" class="btn btn-primary" onClick={()=>fun()}>Submit</button> 


<div><button onClick={()=>google()} className= 'text-2xl rounded-md bg-green-400'>loging with google</button></div>
    </div>
  )
}

export default page
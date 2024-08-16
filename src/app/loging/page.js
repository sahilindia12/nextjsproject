
'use client'

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function page() {


const [dta, setdta] = useState();
const [username, setusername] = useState();
const [email, setgmail] = useState();
const [password, setpas] = useState();


console.log(password,username,email)
  
const fun=async()=>{
try {
    const call= await  axios.post("http://localhost:4000/loging",{email,password})
    setdta(call.data)
} catch (error) {
    console.log('err',error)
}

// const local= await localStorage.setItem('dta','token')
    
}      
    
          
  

    console.log('dta',dta)
  return (
    <div className=' mx-[22vw]'>

<form className=' my-9 bg-gray-400  p-4'>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setgmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setpas(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>


</form>

<div>

    <Link href={'/reset'}>forget password</Link>
</div>
<button type="submit" class="btn btn-primary" onClick={()=>fun()}>Submit</button> 
    </div>
  )
}

export default page
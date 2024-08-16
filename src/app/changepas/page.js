
'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'

function page() {


const [dta, setdta] = useState();
const [username, setusername] = useState();
const [email, setgmail] = useState();
const [password, setpas] = useState();


console.log(password,username,email)
  
const fun=async()=>{
    const call= await  axios.post("http://localhost:4000/video/password",{email})
setdta(call.data)

// const local= await localStorage.setItem('dta','token')
    
}      
    
          
  

    console.log('dta',dta)
  return (
    <div className=' mx-[22vw]'>

<form className=' my-9 bg-gray-400  p-4'>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">email</label>
    <input onChange={(e)=>setgmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>



</form>
<button type="submit" class="btn btn-primary" onClick={()=>fun()}>Submit</button> 
    </div>
  )
}

export default page
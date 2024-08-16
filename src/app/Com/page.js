
'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Comm() {


const [dta, setdta] = useState();
const [name, setusername] = useState();
const [email, setgmail] = useState();
const [clas, setclass] = useState();


console.log(clas,name,email)
  
const fun=async()=>{
    const call= await  axios.post("http://localhost:4000/data",{name,clas,email})
setdta(call.data)
console.log(call)
// const local= await localStorage.setItem('dta','token')
    
}      
    
          
  

    console.log('dta',dta)

    const google=async()=>{
    
  window.open("http://localhost:4000/auth/google/callback","_self")

  toast.success("loging susse")

    }
  return (
    <div className=' mx-[22vw]'>
<h1>addd task</h1>
<form className=' my-9 bg-gray-400  p-4'>
<div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label">name</label>
    <input  onChange={(e)=>setusername(e.target.value)} type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setgmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">class</label>
    <input onChange={(e)=>setclass(e.target.value)} type="Number" class="form-control" id="exampleInputPassword1"/>
  </div>


</form>
<button type="submit" class="btn btn-primary" onClick={()=>fun()}>Submit</button> 



    </div>
  )
}

export default Comm
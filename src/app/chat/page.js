
'use client'

import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

function page() {

  const [id, setid] = useState([]);
  const [input, setin] = useState([]);
const [seichat, setseichat] = useState([]);
const [seichatt, setseichatt] = useState([]);
  const [room, setroom] = useState();
  const socket = io('http://localhost:4000'); // Replace with your server URL if different
  
useEffect(() => {
  
socket.on("sendd",(data)=>{
  console.log(data.id)
 


})


socket.on("private",(d)=>{
  console.log('first',d)
  setseichatt([...seichatt,d])
})


console.log(seichat)
  return () => {
    
  };
}, []);

const btn=async()=>{
  socket.emit("sendcl",{'data':input,'id':room})
  setseichat([...input,seichat])
}
console.log(id)
  return (
    <div className=' bg-green-300 mx-[13vw] p-3'>



      <h1>sjocket is</h1>


      <div>
   
        <input type="text" placeholder=' inter the chat' onChange={(e)=>setin(e.target.value)} /> <br/>

<br/>
        <input placeholder='intr id' type="text" onChange={(e)=>setroom(e.target.value)} />
      </div>

      <button className='  text-2xl bg-white text-green-400  rounded-md' onClick={()=>btn()}>click</button>



      <br/>  

      <br/>

 {
  seichatt.map((item)=>{
    return <>
      <h1 className=' w-5'>{item.data}</h1>
    </>
  })
 }

          </div>
  )
}

export default page
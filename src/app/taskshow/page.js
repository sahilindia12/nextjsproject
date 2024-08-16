
'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function page() {
const [dadta, setdadta] = useState();

    const fun=async()=>{
        const dat= (await axios.get("http://localhost:4000/get")).data
setdadta(dat)
    }
    useEffect(() => {
     
        fun()
    }, []);

console.log(dadta)
  return (
    <div>

<h1>task show</h1>

    </div>
  )
}

export default page
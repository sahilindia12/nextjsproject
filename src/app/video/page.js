'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {

    const [image, setimg] = useState();

    const handalcahnge=async(e)=>{
        console.log(e.target.files[0])
        setimg(e.target.files[0])
    }


    const handalsubmit =async(e)=>{
        e.preventDefault();


        const formData  = new FormData();
formData.append('image',image);

        try {
            const res = await axios.post('http://localhost:4000/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            console.log(res.data);
        } catch (err) {
       
            console.error(err);
        }
    }
const [getimg, setgetimg] = useState([]);

const getv=async()=>{
    const videoget = await  (await axios.get('http://localhost:4000/video/imgget/66b8dbd5b39494d3ebcdb1c4')).data

    
    setgetimg(videoget)
 }
  useEffect(() => {
 getv()

   
  }, []);

  console.log(getimg)

  return (
    <div>
     <h1>this i s vidoe upload </h1>

{/* {getimg} */}

     <form onSubmit={(e)=>handalsubmit(e)}>


        <input  type="file"  accept='image/*' onChange={(e)=>handalcahnge(e)}/> <br/>

        <button>upload</button>
     </form>
    




    <button onClick={()=>getv()}>videoget</button>


  
                        <img src={`upload/${getimg}`} alt={'hh'} style={{ width: '200px' }} />





           


    </div>
  )
}

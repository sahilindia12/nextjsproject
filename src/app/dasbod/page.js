
'use client'
import React, { useEffect, useState } from 'react'


import axios from "axios"
import Link from 'next/link';
import { toast } from 'react-toastify';
import Comm from '../Com/page';

const page = () => {
    const [userdata, setUserdata] = useState({});
    console.log("response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:4000/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = ()=>{
        toast.success("logout success full")
      setTimeout(() => {
        window.open("http://localhost:4000/logout","_self")
      }, 5000);
     
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            <header>
                <nav>
                    
                    <div className="right">
                        <ul>
                            <li>
                             <Link href={'/'}>
                             
                             </Link>
                            </li>
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <>
                                    <li style={{color:"black",fontWeight:"bold"}}>{userdata?.displayName}</li>
                                        <li>
                                            <Link href={'dasbod'}>
                                            
                                            dasbod</Link>
                                        </li>
                                        <li onClick={()=>logout()}>Logout</li>
                                        <li>
                                            <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
                                        </li>
                                    </>
                                ) : <li>
                                   <Link href={'/form'}>
                                   
                                   loging </Link>
                                </li>
                            }



                        </ul>
                    </div>
                </nav>
            </header>






<Comm/>


        </>
    )
}

export default page
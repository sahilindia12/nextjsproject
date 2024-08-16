
'use client'
import React, { useEffect } from 'react'
import Script from 'next/script'


function page() {

  
     <Script src="https://checkout.razorpay.com/v1/checkout.js"/>

useEffect(() => {
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
  return () => {
    
  };
}, []);
  return (
    <div>
<RazorpayCheckoutButton  amount={500}  />
<h1 className=' text-2xl align-middle'>this is pyment page get pymetn order</h1>


    </div>
  )
}

export default page
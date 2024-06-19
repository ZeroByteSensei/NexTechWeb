'use client'

import { FaWhatsapp } from "react-icons/fa6";

const FloatingWhatsapp = () => {

    const handleClick = async () => {

        // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    
        if (navigator.userAgent.toLowerCase().indexOf("android") !== -1) {
          // WhatsApp is installed
          // window.open(`whatsapp://send?phone=+917985107551`)
          window.location.href = `whatsapp://send?phone=+917985107551`
        } else {
          // WhatsApp is not installed, open WhatsApp Web
          window.open('https://web.whatsapp.com/send?phone=+917985107551', '_blank');
          // window.location.href = `https://wa.me/917985107551`
        }
      }

    return ( 
        <div className='bg-green-600 hover:bg-green-700 hover:scale-110 transition-all p-2 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8 z-50' onClick={handleClick}>
            <FaWhatsapp color='white' className='w-14 h-14 md:w-10 md:h-10' />
        </div>
     );
}
 
export default FloatingWhatsapp;
'use client'

import { FaWhatsapp } from "react-icons/fa6";

const FloatingWhatsapp = () => {

    const handleClick = async () => {

        // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    
        if (navigator.userAgent.includes('WhatsApp')) {
          // WhatsApp is installed
          window.open(`whatsapp://send?phone=+917985107551`)
        } else {
          // WhatsApp is not installed, open WhatsApp Web
          window.open('https://web.whatsapp.com/send?phone=+917985107551', '_blank');
        }
      }

    return ( 
        <div className='bg-green-600 w-min p-2 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8 z-50' onClick={handleClick}>
            <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
        </div>
     );
}
 
export default FloatingWhatsapp;
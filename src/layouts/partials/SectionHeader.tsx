'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({primaryText, secondaryText, bgColor='bg-[#8e92d5]'}:{primaryText:string, secondaryText:string, bgColor?:string}) => {
    const headRef= useRef(null);
    const mainRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(headRef.current,{
            y:-250,
        }, {
            y:0,
            duration:5,
            scrollTrigger:{
                trigger: mainRef.current,
                start: "top 50%",
                end: "50% 50%",
                // markers:true,
                scrub:2,
            }
        });
        gsap.fromTo(descRef.current, {
            y:100,
            opacity:0,
        },{
            y:0,
            opacity:1,
            duration:5,
            scrollTrigger:{
                trigger: mainRef.current,
                start: "top 50%",
                end: "50% 50%",
                // markers:true,
                scrub:2,
            }
        })
    }, [])
    
    return ( 
        <div className="relative w-full" ref={mainRef}>
            <p className="text-[7vw] font-bold text-center text-[#292d6e]" ref={headRef}>{primaryText}</p>
            <p className={`absolute top-[40%] font-extrabold left-1 ${bgColor} w-full text-center text-[2vw] bg-opacity-70 text-[#292d6e] leading-8`} ref={descRef}>{secondaryText}</p>
        </div>
     );
}
 
export default SectionHeader;
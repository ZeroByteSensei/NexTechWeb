'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const HeroSectionStatic = () => {

    const headRef= useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(imgRef.current,{
            y:200,
            rotateY: 45,
            rotateZ: 45,
        }, {
            y:-250,
            rotateY:0,
            rotateZ:0,
            duration:5,
            scrollTrigger:{
                trigger: headRef.current,
                start: "45% 50%",
                end: "bottom 80%",
                // markers:true,
                scrub:2,
            }
        });
    }, [])

    return ( 

        <div className="w-full h-full -mt-[78px] relative overflow-hidden" ref={headRef}>
            <div className="w-full h-full"
                style={{backgroundImage:"url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715357152/HeroSectionDesktopNew_lmw88g.webp)", backgroundSize:"cover",
                }}
            />
            <div className="hidden md:block w-[320px] aspect-[8/16] mt-[78px] absolute top-[10%] right-[8%]"
                style={{backgroundImage:"url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715357145/phoneHeroSection_pvpcvq.png)", backgroundSize:"cover",
                }}
                ref={imgRef}
            />
            <div className="h-full w-full absolute z-30 bottom-0 left-0 flex justify-between items-end pl-10 pr-10 pb-6">
                <div className="text-[#232429] font-grotesk font-extrabold text-[11vw] md:text-[8vh] leading-[85px] w-[70%] ">
                    We Help <span className="text-[#D02727] bg-[#FBDC6D] rounded-md px-2">Brands</span> 
                    <br />Become <span className="text-[#5e296e] bg-[#FBDC6D] rounded-md px-2">BRANDS</span>
                    <br />
                    {/* <p className="text-sm md:text-lg font-grotesk text-[#FBDC6D] bg-[#1B1E49] inline-block px-3 rounded-sm">
                        With our expertise and experience in the social media domain, <br />we make the effort worth every penny...
                    </p> */}
                </div>
                <div className="text-black animate-pulse bg-[#1B1E49] rounded-full p-1">
                <Link href="#contact-section">
                    <Image
                    alt="Schedule A Call"
                    width={80}
                    height={80}
                    src="/images/schedulecall-nextech.png"/>
                </Link>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSectionStatic;
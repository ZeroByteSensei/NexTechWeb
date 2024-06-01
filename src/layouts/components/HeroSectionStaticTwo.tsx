'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const HeroSectionStaticTwo = () => {

    const headRef= useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(imgRef.current,{
            y:-160,
            rotateY: 35,
            rotateZ: 35,
        }, {
            y:250,
            rotateY:0,
            rotateZ:0,
            duration:5,
            scrollTrigger:{
                trigger: headRef.current,
                start: "45% 50%",
                end: "bottom 70%",
                // markers:true,
                scrub:2,
            }
        });
    }, []);

    const handleScroll = (id:string) => {
        document.getElementById(id)?.scrollIntoView(true);
    };
    
// bg-[url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715357152/HeroSectionDesktopNew_lmw88g.webp)]
    return ( 
        <section ref={headRef} className="relative  bg-cover bg-center bg-no-repeat">
            <Image
                    width={900}
                    height={700}
                    alt="Hero section Image"
                    src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715357152/HeroSectionDesktopNew_lmw88g.webp"
                    className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"/>
            <div className="hidden md:block w-[320px] aspect-[8/16] mt-[78px] absolute top-[10%] right-[8%]" ref={imgRef}>
                <Image
                    width={300}
                    height={500}
                    alt="hero section mini phone image"
                    src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715357145/phoneHeroSection_pvpcvq.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl text-[#1B1E49] font-extrabold sm:text-5xl">
                        Unleash your
                        <span className="block font-extrabold text-[#D02727]"> Digital Potential. </span>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-[#1B1E49]">
                        Transform your business with a brand that resonates. We craft identities that connect and inspire.
                    </p>

                    <div className="mt-16 flex flex-wrap gap-4 text-center">
                        <button onClick={()=>handleScroll('contact-section')} className="block w-full rounded bg-[#1B1E49] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#D02727] active:bg-[#D02727] sm:w-auto"  >
                            Get Started
                        </button>

                        <Link href="/services" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#1B1E49] shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto" >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
            

        </section>
     );
}
 
export default HeroSectionStaticTwo;
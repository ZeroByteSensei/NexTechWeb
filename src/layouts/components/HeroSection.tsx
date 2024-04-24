'use client'

import { useRef } from "react";
import {motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  color:string;
  marginT:string;
}

function ParallaxText({ children, baseVelocity = 100, color="text-gray-300", marginT }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
  
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className={`parallax overflow-hidden whitespace-nowrap ${marginT} flex flex-nowrap`}>
        <motion.div className="scroller text-[29vh] font-grotesk font-extrabold flex whitespace-nowrap flex-nowrap" style={{ x }}>
          <span className="text-gray-300 block mr-[70px]">{children} </span>
          <span className="text-gray-300 block mr-[70px]">{children} </span>
          <span className="text-gray-300 block mr-[70px]">{children} </span>
          {/* <span className={`${color?color:"text-gray-300"} block mr-[70px]`}>{children} </span> */}
          {/* <span className="text-gray-300 block mr-[70px]">{children} </span> */}
          <span className="text-gray-300 block mr-[70px]">{children} </span>
        </motion.div>
      </div>
    );
  }

const HeroSection = () => {

  return (
    <div className="h-[90vh] max-w-[100%] overflow-x-hidden overflow-y-hidden relative bg-gray-100">

        <div className="h-full w-full absolute z-30 flex justify-between items-end pl-8 pr-10 pb-24">
            <div className="text-gray-800 font-grotesk font-extrabold text-[11vh] leading-[80px] w-[70%] ">
                We Help <span className="text-blue-400">BRANDS</span> <br />Become <span className="text-red-700">BRANDS</span>
                <br />
                <p className="text-lg font-grotesk text-gray-600">
                    With our expertise and experience in the social media domain, <br />we make the effort worth every penny...
                </p>
            </div>
            <div className="text-black animate-pulse">
                <Image
                alt="Schedule A Call"
                width={100}
                height={100}
                src="/images/schedulecall-nextech.png"/>
            </div>
        </div>

            {/* <div className="animate-[scrolll_40s_linear_infinite] flex -mt-20 z-10 transition-all">
                    <Span title="BUILDING"/>
                    <Span title="BUILDING" color="text-red-400"/>
                    <Span title="BUILDING"/>
                    <Span title="BUILDING"/>
                    <Span title="BUILDING"/>
            </div> */}
            {/* <div className="animate-[scrollr_45s_linear_infinite] flex -mt-32 transition-all">
                    <Span title="TRUST"/>    
                    <Span title="TRUST"/>    
                    <Span title="TRUST" color="text-yellow-400"/>    
                    <Span title="TRUST"/>    
                    <Span title="TRUST"/>    
            </div> */}
            {/* <div className="animate-[scrolll_40s_linear_infinite] flex -mt-32 transition-all">
                    <Span title="EVERYDAY"/>    
                    <Span title="EVERYDAY" color="text-blue-400"/>    
                    <Span title="EVERYDAY"/>    
                    <Span title="EVERYDAY"/>    
                    <Span title="EVERYDAY"/>    
            </div> */}
            <section className="w-full relative">
                <ParallaxText baseVelocity={-1} color="text-red-400" marginT="-mt-20">BUILDING</ParallaxText>
                <ParallaxText baseVelocity={1} color="text-yellow-400" marginT="-mt-32">TRUST</ParallaxText>
                <ParallaxText baseVelocity={-1} color="text-blue-400" marginT="-mt-32">EVERYDAY</ParallaxText>
            </section>
    </div>
  );
};

export const Span=({title, color}:{title:string, color?:string})=>{
    return (
        <span className={`text-[29vh] font-grotesk ${color?color:"text-gray-300"} font-extrabold`}>{title}<span className="text-gray-100">-</span></span>
    )
}

export default HeroSection;
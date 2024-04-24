"use client"
import {motion} from 'framer-motion';
import { useState } from 'react';

const AnimatedLink = ({title}:{title:string}) => {
    const [isHovered, setHovered] = useState(false);
    return ( 
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative overflow-hidden cursor-pointer"
        >
            <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered} />
            <div className="absolute top-0 text-pink-400">
                <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered} />
            </div>
        </motion.div>
     );
}
const titleAnimation = {
    rest: {
      transition: {
        staggerChildren: 0.003,
      },
    },
    hover: {
      transition: {
        staggerChildren: 0.003,
      },
    },
  };
  
  const letterAnimation = {
    rest: {
      y: 0,
    },
    hover: {
      y: -45,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };
  
  const letterAnimationTwo = {
    rest: {
      y: 45,
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      },
    },
  };

const AnimatedWord = ({ title, animation, isHovered }:{title:string, animation:any, isHovered:boolean}) => {
    return (
      <motion.span
        variants={titleAnimation}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        className="whitespace-nowrap relative"
      >
        {title
          .split("")
          .map((character:any, i:number) =>
            character === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
                <motion.span
                key={i}
                variants={animation} 
                className='relative inline-block whitespace-nowrap'>
                    {character}
                </motion.span>
            )
          )}
      </motion.span>
    );
  };

export default AnimatedLink;
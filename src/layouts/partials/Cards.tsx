import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import styles from "../../app/styles.module.css"
import { markdownify } from '@/lib/utils/textConverter';
import Link from 'next/link';

const Card = ({i, Heading, ServiceImg, Description, link, progress, range, targetScale}:
    {i:number, Heading:string, ServiceImg:string, Description:string, link:string, progress:any, range:any, targetScale:any}) => {

        const container = useRef(null);
        const { scrollYProgress } = useScroll({
          target: container,
          offset: ['start end', 'start start']
        })
      
        const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
        const scale = useTransform(progress, range, [1, targetScale]);
       
        return (
          <div ref={container} className={`${styles.cardContainer}`} >
            <motion.div 
              style={{backgroundColor: `${i% 2 === 0 ? "#1b1e49":"#FBDC6D"}`, scale, top:`calc(-5vh + ${i * 25}px)`}} 
              className={`${styles.card} ${i% 2 === 0 ? "border border-[#FBDC6D]":"#FBDC6D"} `}
            >
              <h2 className={`${i% 2 === 0 ? "text-[#FBDC6D]":"text-[#1b1e49]"} `}
               dangerouslySetInnerHTML={markdownify(Heading)}/>
              <div className={styles.body}>
                <div className={styles.description}>
                  <p className={`desc ${i% 2 === 0 ? "text-[#FBDC6D]":"text-[#1b1e49]"} text-justify`} dangerouslySetInnerHTML={markdownify(Description)}/>

                  <span className={`spsp flex items-center gap-x-3 mt-12 ${i% 2 === 0 ? "bg-[#FBDC6D]":"bg-[#1b1e49]"} rounded-full w-fit px-4 py-2 hover:shadow-xl hover:scale-105 transition-all duration-500`}>
                    <Link className={`linkk ${i% 2 === 0 ? "text-[#1b1e49]":"text-[#FBDC6D]"}`} href={link}>Read more</Link>
                      <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill={i% 2 === 0 ? "#1b1e49":"#FBDC6D"}/>
                    </svg>
                  </span>
                </div>
      
                <div className={styles.imageContainer}>
                  <motion.div
                    className={styles.inner}
                    style={{scale: imageScale}}
                  >
                    <Image className='imgg'
                      fill
                      src={ServiceImg}
                      alt="image" 
                    />
                  </motion.div>
                </div>
      
              </div>
            </motion.div>
          </div>
          // <div className={styles.cardContainer}>
          //   <div style={{backgroundColor:"orange"}} className={styles.card}>
      
          //   </div>
          // </div>
        )
}

export default Card
'use client';
import styles from '../../app/page.module.css'
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from '@/partials/Cards';
import SectionHeader from '@/partials/SectionHeader';
import { Service } from '@/types';

export default function OurServicesParallax({data}:{data:Service[]}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // console.log(data)

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  return (
    // {styles.main}
    <main ref={container} className={styles.main}>
          <SectionHeader primaryText="OUR SERVICES" secondaryText="WHAT DO WE DO" bgColor='bg-[#1B1E49]' textColor='text-[#8e92d5]'/>
          {
            data.map( (service, i) => {
              const targetScale = 1 - ( (data.length - i) * 0.05);
              return <Card key={`p_${i}`} i={i} service={service} progress={scrollYProgress} range={[i * .15, 1]} targetScale={targetScale}/>
            })
          }
    </main>
  )
}
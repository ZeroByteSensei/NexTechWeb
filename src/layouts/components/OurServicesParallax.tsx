'use client';
import styles from '../../app/page.module.css'
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from '@/partials/Cards';
import SectionHeader from '@/partials/SectionHeader';

export default function OurServicesParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  const servicesContent = [
    {
      Heading: "SOCIAL MEDIA MANAGEMENT",
      Description:
        "At NexTech Media, we excel in social media management. Our expert team crafts engaging posts, schedules timely updates, and interacts with your audience. Boost your online presence, connect with customers, and grow your brand effortlessly. You focus on what you do best, and let us do the rest.",
        ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505845/socialMediaManagement_tfzif4.webp",
    },
    {
        Heading: "SOCIAL MEDIA MARKETING",
        Description:
        "We'll help you reach your audience, boost your brand, and grow your business. From eye-catching posts to targeted ads, we've got you covered. Plus, we deliver top-notch results with Google quality leads and high-performing ad campaigns. You focus on what you do best, and let us do the rest. ",
        ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505845/socielMediaMarketingwebp_zkoags.webp",
    },
    {
      Heading: "CONTENT MARKETING",
      Description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions. You focus on what you do best, and let us do the rest. ",
        ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505845/contentMarketing_ohjolm.webp",
    },
    {
      Heading: "COURSES & TRAINING",
      Description:
        "At Nextech we provides diverse courses, including Social Media Management and Digital Marketing, catering to aspiring social media managers and marketing experts. Their offerings equip individuals with skills essential for pursuing careers in these fields, simplifying complex concepts for easy understanding.",
        ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/coursesTrainings_xv2xxs.webp",    
    },
    {
      Heading: "WORDPRESS/ CMS DEVELOPMENT",
      Description:
        "We specialize in creating top-notch designs that elevate your brand or product. We firmly believe that superior designs yield superior outcomes. Let us take your visuals to the next level for exceptional results. Our expertise ensures professional, attention-grabbing content that resonates with audiences. ",
        ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/webDevelopment_tmvat9.webp",
    },
    {
      Heading: "GRAPHIC DESIGNING & VIDEO EDITING",
      Description:
        "We specialize in creating top-notch designs that elevate your brand or product. We firmly believe that superior designs yield superior outcomes. Let us take your visuals to the next level for exceptional results. Our expertise ensures professional, attention-grabbing content that resonates with audiences. ",
        ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/graphicDesign_pcuv3z.webp",
    },
  ];

  return (
    // {styles.main}
    <main ref={container} className={styles.main}>
          <SectionHeader primaryText="OUR SERVICES" secondaryText="WHAT DO WE DO" bgColor='bg-[#1B1E49]' textColor='text-[#8e92d5]'/>
          {
            servicesContent.map( (service, i) => {
              const targetScale = 1 - ( (servicesContent.length - i) * 0.05);
              return <Card key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
            })
          }
    </main>
  )
}
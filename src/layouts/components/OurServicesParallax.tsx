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
        "Take the power of social media to the next level. At NexTech Media, we handle everything from content creation and scheduling to community engagement and analytics. We ensure your social media platforms are vibrant, engaging, and aligned with your brand’s voice to build an amazing online presence.",
      ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505845/socialMediaManagement_tfzif4.webp",
      link:"/services#socialMediaManagement"
    },
    {
      Heading: "SOCIAL MEDIA MARKETING",
      Description:
        "Reach your brand goals with targeted social media marketing campaigns. Our team at NexTech Media leverages data-driven strategies to create compelling ads on platforms like Facebook, Instagram, LinkedIn, Google, etc. We focus on reaching your ideal audience, maximizing ROI, and driving conversions.",
      ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505845/socielMediaMarketingwebp_zkoags.webp",
      link:"/services#socialMediaMarketing"
    },
    {
      Heading: "CONTENT MARKETING",
      Description:
        "Content is king, and at NexTech Media, we create content that rules. Our content marketing services include crafting high-quality blog posts, articles, infographics, and more. We focus on producing SEO-optimized content that attracts, engages, and converts your target audience. Trust us to tell your story and amplify your brand's message.",
      ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505845/contentMarketing_ohjolm.webp",
      link:"/services#contentMarketing"
    },
    {
      Heading: "COURSES & TRAINING",
      Description:
        "Empower yourself and your team with our expert-led courses and training programs. NexTech Media offers comprehensive training in digital marketing, social media management, content creation, and more. Our courses are designed to provide practical skills and insights that you can apply immediately.",
      ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/coursesTrainings_xv2xxs.webp",
      link:"/services#coursesNtraining"    
    },
    {
      Heading: "GRAPHIC DESIGNING & VIDEO EDITING",
      Description:
        "Visual appeal is crucial in capturing your audience's attention. Our graphic designing team at NexTech Media excels in creating stunning visuals that resonate with your brand identity and our video editing services bring your vision to life.",
      ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/graphicDesign_pcuv3z.webp",
      link:"/services#graphicDesigning"
    },
    {
      Heading: "WORDPRESS/ CMS DEVELOPMENT",
      Description:
        "A robust online presence starts with a great website. Our WordPress/CMS development services at NexTech Media offer custom website solutions tailored to your business needs. We specialize in creating responsive, user-friendly, and SEO-optimized websites that enhance your brand’s digital footprint.",
      ServiceImg: "https://res.cloudinary.com/dncar4d7j/image/upload/v1715505846/webDevelopment_tmvat9.webp",
      link:"/services#wordpressCMSdevelopment"
    },
  ];

  return (
    // {styles.main}
    <main ref={container} className={styles.main}>
          <SectionHeader primaryText="OUR SERVICES" secondaryText="WHAT DO WE DO" bgColor='bg-[#1B1E49]' textColor='text-[#8e92d5]'/>
          {
            servicesContent.map( (service, i) => {
              const targetScale = 1 - ( (servicesContent.length - i) * 0.05);
              return <Card key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .15, 1]} targetScale={targetScale}/>
            })
          }
    </main>
  )
}
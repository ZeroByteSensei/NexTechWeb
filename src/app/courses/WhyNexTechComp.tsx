'use client'

import SectionHeader from '@/partials/SectionHeader';
import {motion} from 'framer-motion';


const WhyNexTechComp = () => {
    const specialities = [{
        Index: 1,
        Title: "Internship Opportunities",
        Description: "At Nextech, we believe in learning by doing. Our program begins with a one-month practice-oriented training, where you’ll gain hands-on experience in social media management. After this initial training, you’ll enter a three-month internship designed to nurture your skills further. During this period, you'll work on real-world projects, applying the concepts you've learned and gaining valuable industry experience."
    },{
        Index: 2,
        Title: "International Exposure",
        Description: "Expand your horizons with Nextech’s international exposure opportunities. During the internship phase, you’ll have the chance to work on projects for well-known international brands that Nextech is associated with. This experience not only enhances your portfolio but also gives you a global perspective on social media strategies and practices. At the end of your internship, you will receive a certificate of completion, adding significant value to your professional credentials."
    },{
        Index: 3,
        Title: "Job Opportunities",
        Description: "Your journey with Nextech doesn’t end with the internship. We are dedicated to helping you launch your career. Throughout your training and internship, your performance will be closely monitored. Based on your achievements and growth, you may be offered a position to join the Nextech team. Additionally, we provide comprehensive hiring assistance, helping you build an impressive resume and preparing you for job interviews, ensuring that you secure a rewarding position in a reputable company."
    }]
    return ( 
        <div className='mt-16'>
            <SectionHeader primaryText='Why Nextech Only?' secondaryText='our speciality' textColor='text-[#8e92d5]' bgColor="bg-[#1B1E49]"/>
            {specialities.map((speciality, index: number) => (
                <section key={index}
                    className="mt-16">
                    <div className="container ">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-x-4">
                            <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className={`md:mb-0 mb-6 mt-8 md:mt-1 text-[30vh] text-[#8e92d5]  leading-3 flex-grow h-fit aspect-square ${index % 2 !== 0 ? "md:order-2 bg-[#FBDC6D]" : "bg-gray-300"}`}>
                                {speciality.Index}
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}

                            className={`flex-grow ${index % 2 !== 0 && "md:order-1"}`}>
                                <h2 className={`mb-4 ${index % 2 === 0 ? "text-[#cbcbcb]":"text-[#FBDC6D] text-right"}`}>
                                    {speciality.Title}</h2>
                                <p className={`mb-8 text-lg text-justify ${index % 2 === 0 ? "text-[#cbcbcb]":"text-[#FBDC6D]"}`}>
                                    {speciality.Description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
     );
}
 
export default WhyNexTechComp;
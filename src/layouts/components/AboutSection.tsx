"use client"

import { useActivePath } from "@/helpers/useActivePath";
import SectionHeader from "@/partials/SectionHeader";
import Image from "next/image";
import Link from "next/link";


  // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727

const AboutSection = () => {

    const checkActivePath= useActivePath();

    return ( 
        <div className="w-full bg-[#181818]">
            <div className="w-full px-12">
                <SectionHeader primaryText="ABOUT" secondaryText="US" bgColor="bg-[#181818]" textColor="text-[#8e92d5]"/>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-4 gap-y-4 md:gap-y-12 mt-8 sm:mt-12 ">
                        <div className="col-span-1 sm:col-span-2 w-full rounded-md flex flex-col justify-center md:px-6">
                            <p className="text-[#FBDC6D] text-lg capitalize font-bold border-b-4 border-[#FBDC6D] pb-2 w-fit">who are we?</p>
                            <h1 className="text-[#8e92d5] mt-4 text-[7vw] md:text-[7vh]">Transforming Brands,<br/> Empowering Success.</h1>
                            <p className="text-[#cbcbcb] text-xl mt-6 text-justify">Welcome to NexTech Media, your trusted partner in digital marketing excellence. We are a dynamic team of creative professionals dedicated to helping businesses thrive in the digital age. With years of industry experience and a passion for innovation, we provide a comprehensive range of services designed to elevate your brand and drive measurable results. Our commitment to excellence extends beyond delivering exceptional services.</p>
                        </div>
                        <div className="col-span-1 h-full w-auto rounded-md">
                            <Image width={500} height={500} alt="upcoming event info image"
                                src="https://res.cloudinary.com/dncar4d7j/image/upload/v1717160729/about_sk6ha7.webp"
                                className="inset-0 h-full w-full object-cover rounded-md"
                            />
                        </div>

                        {/* our mission image */}
                        <div className="col-span-1 w-full order-3 aspect-square md:h-full rounded-md">
                            <Image width={500} height={500} alt="upcoming event info image"
                                src="https://res.cloudinary.com/dncar4d7j/image/upload/v1717044874/mission_x7xfve.webp"
                                className="inset-0 h-full w-full object-cover rounded-md"
                            />
                        </div>
                        <div className="col-span-1 sm:col-span-2 sm:order-3 w-full rounded-md md:px-6 flex flex-col justify-center">
                        <p className="text-[#FBDC6D] text-lg capitalize font-bold border-b-4 border-[#FBDC6D] pb-2 w-fit">And Our Mission?</p>
                            <h1 className="text-[#8e92d5] mt-4 text-[7vw] md:text-[7vh]">Innovative Solutions,<br/>Measurable Growth.</h1>
                            <p className="text-[#cbcbcb] text-xl mt-6 text-justify">At NexTech Media, our mission is to empower businesses to achieve their fullest potential through innovative digital marketing solutions. We are committed to delivering excellence in every project, helping our clients build a strong online presence, engage their audience, and drive sustainable growth. Our mission drives us to continuously improve, adapt, and innovate, ensuring we deliver the best possible outcomes for our clients.
                        </p>
                        </div>
                </div>
                {!checkActivePath("/about") && ( 
                    <Link href="/about"  className="flex justify-center mb-4 mt-16 sm:mt-6">
                        <button className="bg-[#FBDC6D] text-[#1B1E49] hover:text-[#FBDC6D] hover:bg-[#1B1E49] hover:border hover:border-[#FBDC6D] px-8 py-2 rounded-full ">Know More</button>
                    </Link>
                )}
                
            </div>
        </div>
     );
}
 
export default AboutSection;
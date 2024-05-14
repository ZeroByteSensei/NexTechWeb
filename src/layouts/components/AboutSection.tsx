"use client"

import { useActivePath } from "@/helpers/useActivePath";
import SectionHeader from "@/partials/SectionHeader";
import Link from "next/link";


  // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727

const AboutSection = () => {

    const checkActivePath= useActivePath();

    return ( 
        <div className="w-full bg-[#181818]">
            <div className="w-full px-12">
                <SectionHeader primaryText="ABOUT" secondaryText="US" bgColor="bg-[#181818]" textColor="text-[#8e92d5]"/>
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-4 gap-y-4 mt-8 sm:mt-12">
                        <div className="col-span-1 sm:col-span-2 w-full aspect-[16/6] rounded-md flex flex-col justify-center px-6">
                            <p className="text-[#FBDC6D] text-lg capitalize font-bold border-b-4 border-[#FBDC6D] pb-2 w-fit">who are we?</p>
                            <h1 className="text-[#8e92d5] mt-4">About our agency heading</h1>
                            <p className="text-[#cbcbcb] text-xl mt-6 text-justify">About us content will go here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste repudiandae qui totam quisquam reiciendis obcaecati similique facilis ducimus enim, accusamus pariatur nihil fugiat odit nemo, consectetur sit illum dignissimos laudantium magnam inventore esse eum nostrum mollitia. Voluptatibus illum enim fugit expedita facere suscipit quaerat neque ad sequi, natus aut labore.</p>
                        </div>
                        <div className="col-span-1 w-full h-[40vh] sm:h-full rounded-md"
                        style={{backgroundImage:"url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715703122/about_sk6ha7.webp)", backgroundSize:'cover'}}>
                            Mariam's pic will be added here
                        </div>

                        <div className="col-span-1 w-full order-3 h-[40vh] md:h-full rounded-md"
                        style={{backgroundImage:"url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715703122/mission_x7xfve.webp)", backgroundSize:'cover'}}>
                            our mission image
                        </div>
                        <div className="col-span-1 sm:col-span-2 sm:order-3 w-full aspect-[16/6] rounded-md px-6 flex flex-col justify-center">
                        <p className="text-[#FBDC6D] text-lg capitalize font-bold border-b-4 border-[#FBDC6D] pb-2 w-fit">And Our Mission?</p>
                            <h1 className="text-[#8e92d5] mt-4">Our Mission heading</h1>
                            <p className="text-[#cbcbcb] text-xl mt-6 text-justify">Our Mission content will go here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste repudiandae qui totam quisquam reiciendis obcaecati similique facilis ducimus enim, accusamus pariatur nihil fugiat odit nemo, consectetur sit illum dignissimos laudantium magnam inventore esse eum nostrum mollitia. Voluptatibus illum enim fugit expedita facere suscipit quaerat neque ad sequi, natus aut labore.
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
"use client"

import SectionHeader from "@/partials/SectionHeader";

const AboutSection = () => {
    return ( 
        <div className="w-full bg-gray-100">
            <div className="w-full">
                <SectionHeader primaryText="ABOUT" secondaryText="US" bgColor="bg-gray-100"/>
                <div className="grid grid-cols-4 grid-rows-3 w-full h-[70vh] gap-3 px-6 py-3">
                    <div className="col-span-4 row-span-1 p-3 bg-gray-200 rounded-md">
                        <p>
                            About us content will be here
                        </p>
                    </div>
                    <div className="flex gap-2 p-3 col-span-2 row-span-2 bg-gray-50 rounded-md">
                        <p className='rotate-180 text-4xl font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black text-center' style={{writingMode:"vertical-lr",}}>
                            OUR MISSION
                        </p>
                        <div className="flex-grow">
                            Our Mission content will go here Our Mission content will go here Our Mission content will go here Our Mission content will go here
                        </div>

                    </div>
                    <div className="col-span-2 row-span-2 flex gap-2 p-3 bg-gray-400 rounded-md">
                        <div className="flex-grow">
                            Our vision content will go here Our vision content will go here Our vision content will go here Our vision content will go here
                        </div>
                        <p className='rotate-0 text-4xl font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black text-center' style={{writingMode:"vertical-lr",}}>
                            OUR VISION
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;
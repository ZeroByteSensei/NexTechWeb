'use client'
import SectionHeader from "@/partials/SectionHeader";
import { useState } from "react";

const Courses = () => {

    const [activeTab, setActiveTab] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        setActiveTab(index === activeTab ? null : index);
    };

    const courses=[{
        "Heading":"Pre-recorded Lectures",
        "Description":"Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
        "CourseImg":"https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg",
        "IsAvailable":"false"
    },{
        "Heading":"Digital Marketing Course For Individuals",
        "Description":"Lorem second ipsum second dolor sit amet second pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
        "CourseImg":"https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg",
        "IsAvailable":"true"
    },{
        "Heading":"Digital Marketing Course For Corporates",
        "Description":"Lorem third ipsum third dolor sit amet third pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
        "CourseImg":"https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg",
        "IsAvailable":"true"
    }];

    return ( 
        <>
        <SectionHeader primaryText="EXPLORE OUR COURSES" secondaryText="What We Offer" bgColor="bg-white"/>
        
        <section className="bg-gray-2 pt-20 pb-10 lg:pt-[70px] lg:pb-20 overflow-hidden">
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
                {courses.map((course, index)=>(
                    <div key={index} className="w-full px-4 md:w-1/2 xl:w-1/3">
                        <div className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
                        <img src={course.CourseImg} alt="Course-Image" className="w-full"/>
                        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                            <h3>
                                <p className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]" >
                                    {course.Heading}
                                </p>
                            </h3>
                            <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7">
                                {course.Description}
                            </p>
                            <button disabled={course.IsAvailable=='false'} onClick={()=>handleTabClick(index)} className={`inline-block py-2 text-base font-medium transition border rounded-full ${course.IsAvailable=='false'?"text-red-400":"hover:bg-primary hover:text-white hover:border-primary text-body-color"}   border-gray-3 px-7 `}>
                                {course.IsAvailable=="true"?"View Details":"Coming Soon"}
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div>
            {activeTab !== null ?
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <p>{courses[activeTab].Description}</p>
                </div>
            :
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <p>Select a Course to see the details</p>
                </div>
            }
            </div>
        </div>
        </section>
        </>

     );
}
 
export default Courses;
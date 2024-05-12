import SectionHeader from "@/partials/SectionHeader";
import { StickyScroll } from "@/partials/StickyScrollReveal";
import Image from "next/image";


const content = [
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      description:
        "At NexTech Media, we excel in social media management. Our expert team crafts engaging posts, schedules timely updates, and interacts with your audience. Boost your online presence, connect with customers, and grow your brand effortlessly. You focus on what you do best, and let us do the rest. You focus on what you do best, and let us do the rest.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715360097/2_u4tjyc.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      description:
        "We'll help you reach your audience, boost your brand, and grow your business. From eye-catching posts to targeted ads, we've got you covered. Plus, we deliver top-notch results with Google quality leads and high-performing ad campaigns. You focus on what you do best, and let us do the rest. You focus on what you do best, and let us do the rest. You focus on what you do best, and let us do the rest.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
              src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715360096/1_w7giop.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "CONTENT MARKETING",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions. You focus on what you do best, and let us do the rest. You focus on what you do best, and let us do the rest.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
              src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715360098/6_jmdq76.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "COURSES & TRAINING",
      description:
        "At Nextech we provides diverse courses, including Social Media Management and Digital Marketing, catering to aspiring social media managers and marketing experts. Their offerings equip individuals with skills essential for pursuing careers in these fields, simplifying complex concepts for easy understanding. You focus on what you do best, and let us do the rest. You focus on what you do best, and let us do the rest.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
              src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715360097/7_e8xdat.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "WORDPRESS/CMS DEVELOPMENT",
      description:
        "We crafts top-tier websites that embody your brand essence. We excel in delivering a spectrum of web development services, ensuring user-friendly designs, robust functionality, and seamless experiences. Elevate your online presence with NexTech's expertise and innovation. You focus on what you do best, and let us do the rest. You focus on what you do best, and let us do the rest.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
              src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715360096/3_vjwbqc.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "GRAPHIC DESIGNING & VIDEO EDITING",
      description:
        "We specialize in creating top-notch designs that elevate your brand or product. We firmly believe that superior designs yield superior outcomes. Let us take your visuals to the next level for exceptional results. Our expertise ensures professional, attention-grabbing content that resonates with audiences. Elevate your online presence with our tailored, high-quality video productions for maximum impact and engagement.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
              src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715360097/4_hqwahs.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
  ];
const OurServicesSection = () => {
    return ( 
        <div className="w-full bg-[#8e92d5]">
            <div className="w-full">
              <SectionHeader primaryText="OUR SERVICES" secondaryText="WHAT DO WE DO" />
                <div className="p-10">
                    <StickyScroll content={content} />
                </div>
            </div>
        </div>
     );
}
 
export default OurServicesSection;
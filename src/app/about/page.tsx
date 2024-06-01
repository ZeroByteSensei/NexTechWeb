import AboutSection from "@/components/AboutSection";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import OurTeamCard from "@/partials/OurTeamCard";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter } = data;
  const { title, meta_title, description, teamMembers } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />
      <section className="">
          <AboutSection/>

        {/* Fun Facts */}
          <div className=" grid grid-cols-1 sm:grid-cols-3 w-full my-20 px-12">
            <div className="bg-[#1B1E49] col-span-1 rounded-l-md pl-6 pr-2 sm:pl-16 py-12">
              <h1 className="text-[#8e92d5]">Our fun facts</h1>
              <p className="text-[#cbcbcb] text-justify">What makes us different from others and stand out from the crowd? It may not seem much, but once you get onboard, things will unfold positively on a different level.
              </p>
            </div>
            <div className="bg-[#1B1E49] col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 rounded-r-md py-6 gap-y-6">
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-3 text-yellow-200 pl-16">45+</span>Global Happy Clients</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-2 text-yellow-200 pl-16">15+</span>Active Clients</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-2 text-yellow-200 pl-16">20+</span>International Team Members</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-2 text-yellow-200 pl-16">80+</span>Projects Completed</h3>
            </div>
          </div>

          {/* why choose us */}
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    width={500}
                    height={500}
                    alt=""
                    src="https://res.cloudinary.com/dncar4d7j/image/upload/v1716474620/mission_ubjqp8.webp"
                    className="absolute inset-0 h-full w-full object-cover rounded-l-md"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100">
                </span>

                <div className="p-8 sm:p-16 lg:p-20">
                  <h2 className="text-2xl font-bold sm:text-3xl mb-1 lg:mb-10">
                    A few words from our founders
                  </h2>

                  <p className="mt-4 text-gray-600">
                    
                    Nextech was founded with a clear and powerful mission: to help business owners struggling to bring their operations online in today&apos;s fast-paced digital world. We ensure they stay competitive and thrive, rather than getting left behind. But our vision doesn&apos;t stop there. 
                    <br/>Nextech is also dedicated to empowering young people who dream of careers in digital marketing. We provide free or affordable, hands-on education, equipping them with the skills and knowledge they need to succeed. Nextech is a brand with a purpose. We are committed to driving growth, innovation, and opportunity for both businesses and individuals. 
                    <br/>
                    <br/>Join us, and be part of a movement that transforms challenges into opportunities and aspirations into achievements.
                  </p>

                  <Link href="/contact" className="mt-8 inline-block rounded border border-indigo-600 bg-[#1B1E49] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#1B1E49] focus:outline-none focus:ring active:text-[#1B1E49]">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* our team */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-24 mb-24 gap-x-4 gap-y-8 place-items-center overflow-hidden">
            <div className="p-2 sm:pl-12">
              <p className="text-[#FBDC6D] text-lg capitalize font-bold border-b-4 border-[#FBDC6D] pb-2 w-fit">
                Our Team
              </p>
              <h1 className="text-[#8e92d5] mt-4">Our Amazing People</h1>
            </div>
            {
              teamMembers.map((member, index) => (
                <OurTeamCard key={index} memberData={member}/>
              ))
            }
          </div>


          <CallToAction/>

      </section>
    </>
  );
};

export default About;

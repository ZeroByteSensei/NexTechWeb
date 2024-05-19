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
  const { frontmatter, content } = data;
  const { title, meta_title, description, image, teamMembers } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
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
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-3 text-yellow-200 pl-16">1</span>Global Happy Clients</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-2 text-yellow-200 pl-16">2</span>Customized Solutions</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-2 text-yellow-200 pl-16">3</span>International Team Members</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-2 text-yellow-200 pl-16">4</span>Client-Centric Approach</h3>
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
                    src="https://res.cloudinary.com/dncar4d7j/image/upload/v1715703122/mission_x7xfve.webp"
                    className="absolute inset-0 h-full w-full object-cover rounded-l-md"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100">
                </span>

                <div className="p-8 sm:p-16 lg:p-20">
                  <h2 className="text-2xl font-bold sm:text-3xl mb-1 lg:mb-10">
                    A few words of wisdom from our founders
                  </h2>

                  <p className="mt-4 text-gray-600">
                    
                    <strong>Nitish, CEO & Co-Founder</strong> <br/>
                    "Success in digital marketing requires more than just great strategies; it requires passion, persistence, and a commitment to continuous learning."
                    <br/>
                    <br/>
                    <strong>Mariam, COO & Co-Founder</strong> <br/>
                    "Operational excellence is the backbone of any successful business. It&apos;s about having the right processes in place and ensuring that every team member is aligned with the company’s mission and values."
                    <br/>
                    <br/>
                    <strong>Nitish, CEO & Co-Founder</strong> <br/>
                    "Technology is a powerful enabler in today&apos;s digital world. It&apos;s not just about having the latest tools, but about using them effectively to solve real problems."
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

import AboutSection from "@/components/AboutSection";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import OurTeamCard from "@/partials/OurTeamCard";
import SectionHeader from "@/partials/SectionHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

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
              <p className="text-[#cbcbcb]">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="bg-[#1B1E49] col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 rounded-r-md py-6 gap-y-6">
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-3 text-yellow-200 pl-16">1</span>Global Happy Clients</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-3 text-yellow-200 pl-16">2</span>Services for All</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-3 text-yellow-200 pl-16">3</span>Team Members</h3>
              <h3 className="text-lg col-span-1 text-[#8e92d5]"><span className="text-7xl opacity-85 -mr-3 text-yellow-200 pl-16">4</span>Courses & Trainings</h3>
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

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                    esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <Link href="/contact" className="mt-8 inline-block rounded border border-indigo-600 bg-[#1B1E49] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#1B1E49] focus:outline-none focus:ring active:text-[#1B1E49]">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* our team */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 mb-24 gap-x-4 gap-y-8 place-items-center overflow-hidden">
            <div className="p-2 sm:pl-12">
              <p className="text-[#FBDC6D] text-lg capitalize font-bold border-b-4 border-[#FBDC6D] pb-2 w-fit">
                Our Team
              </p>
              <h1 className="text-[#8e92d5] mt-4">Our Amazing People</h1>
            </div>
            <OurTeamCard/>
            <OurTeamCard/>
            <OurTeamCard/>
          </div>


          <CallToAction/>

      </section>
    </>
  );
};

export default About;

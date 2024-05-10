import { getSinglePage } from "@/lib/contentParser";
import BlogCard from "@/partials/BlogCard";
import SectionHeader from "@/partials/SectionHeader";
import { Post } from "@/types";
import config from "@/config/config.json";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";


const { blog_folder } = config.settings;

const OurBlogsSection = () => {
    const posts: Post[] = getSinglePage(blog_folder);
    
    const featuredPosts = posts.filter((post, index)=>(
        post.frontmatter.is_featured==true
      ))
    //   console.log(featuredPosts, "featured here");

    return ( 
        <div className="bg-gray-100 pb-12">
            <SectionHeader primaryText="OUR BLOGS" secondaryText="Explore the latest" bgColor="bg-gray-100"/>
            <div className="flex flex-col sm:flex-row w-full gap-x-4 px-6 justify-center">
                {featuredPosts.map((featuredPost, index)=>(
                    <BlogCard key={index} data={featuredPost} blog_folder={blog_folder} />
                ))}
                <div className="flex flex-col ml-4 group h-fit w-fit my-auto cursor-pointer">
                    <Link href="/blog">
                        <div className="bg-[#1B1E49] rounded-full h-fit w-fit p-4 group-hover:scale-110 duration-500">
                            <FaArrowRight color="#FBDC6D" size={24}/>
                        </div>
                        <p className="text-[#1B1E49] group-hover:scale-110 duration-500">View All</p>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default OurBlogsSection;
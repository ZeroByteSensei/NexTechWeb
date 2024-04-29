import { getSinglePage } from "@/lib/contentParser";
import BlogCard from "@/partials/BlogCard";
import SectionHeader from "@/partials/SectionHeader";
import { Post } from "@/types";
import config from "@/config/config.json";


const { blog_folder } = config.settings;

const OurBlogsSection = () => {
    const posts: Post[] = getSinglePage(blog_folder);
    
    const featuredPosts = posts.filter((post, index)=>(
        post.frontmatter.is_featured==true
      ))
    //   console.log(featuredPosts, "featured here");

    return ( 
        <div className="overflow-hidden bg-gray-100 pb-8">
            <SectionHeader primaryText="OUR BLOGS" secondaryText="Explore the latest" bgColor="bg-gray-100"/>
            <div className="flex w-full justify-around px-6">
                {featuredPosts.map((featuredPost, index)=>(
                    <BlogCard key={index} data={featuredPost} />
                ))}
            </div>
        </div>
     );
}
 
export default OurBlogsSection;
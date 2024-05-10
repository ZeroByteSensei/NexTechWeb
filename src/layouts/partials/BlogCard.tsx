import { Post } from "@/types";
import Link from "next/link";

const BlogCard = ({ data, blog_folder }: { data: Post, blog_folder:string }) => {
    return ( 
        <div className="relative group cursor-pointer rounded-md overflow-hidden duration-500 w-64 h-80 bg-[#1B1E49] p-4">
            <div className="">
                <div className={`group-hover:scale-110 w-full h-60 rounded-sm duration-500`}
                style={{backgroundImage: `url(${data.frontmatter.image})`, backgroundSize:'cover'}}>

                </div>
                {/* bg-[url('/img/hero-pattern.svg')] */}
                <Link href={`/${blog_folder}/${data.slug}`}>
                <div className="absolute w-full left-0 p-5 -bottom-20 duration-500 group-hover:-translate-y-12 group-hover:opacity-80 group-hover:bg-[#FBDC6D]">
                    <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 ">

                    </div>
                    <span className="text-lg font-bold text-gray-50 group-hover:text-[#1B1E49]">{data.frontmatter.title}</span>
                    <p className="group-hover:opacity-100 w-56 duration-500 text-gray-50 group-hover:text-[#1B1E49] opacity-0 text-sm">
                        {data.frontmatter.description}
                    </p>
                </div>
                </Link>
            </div>
        </div>

     );
}
 
export default BlogCard;
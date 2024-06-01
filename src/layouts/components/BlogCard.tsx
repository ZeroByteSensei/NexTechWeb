import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegFolder } from "react-icons/fa";

const BlogCard = ({ data }: { data: Post }) => {
  const { summary_length, blog_folder } = config.settings;
  const { title, image, author, categories, date } = data.frontmatter;
  return (
    <div className="">
      {image && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={image}
          alt={title}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3 text-[#FBDC6D]">
        <Link href={`/${blog_folder}/${data.slug}`}>{title}</Link>
      </h4>
      <ul className="mb-4">
        {/* <li className="mr-4 inline-block">
          <Link href={`/authors/${slugify(author)}`}>
            <FaRegUserCircle className={"-mt-1 mr-2 inline-block"} />
            {humanize(author)}
          </Link>
        </li> */}
        <li className="mr-4 inline-block">
          <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
          {categories?.map((category: string, index: number) => (
            <Link key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== categories.length - 1 && ", "}
            </Link>
          ))}
        </li>
        {date && <li className="inline-block">{dateFormat(date)}</li>}
      </ul>
      <p className="mb-6 text-slate-100 text-justify">
        {plainify(data.content!.slice(0, Number(summary_length)))}
      </p>
      <Link
        className="btn border border-[#FBDC6D] text-[#FBDC6D] hover:bg-[#FBDC6D] hover:text-[#1B1E49] hover:border-[#1B1E49] px-4 py-2 rounded-md transition-all duration-500"
        href={`/${blog_folder}/${data.slug}`}
      >
        read more
      </Link>
    </div>
  );
};

export default BlogCard;

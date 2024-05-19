import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const companyTnC = () => {
  const data: RegularPage = getListPage("others/companyTnC.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description} = frontmatter;

    return ( 
        <>
            <SeoMeta
            title={title}
            meta_title={meta_title}
            description={description}
            image="/"
            />
            <div className="bg-[#8e92d5] p-12 text-[#1B1E49] text-xl space-y-4">
                <h1 className="w-full text-center mb-8">Company Terms &amp; Condition</h1>
                <MDXContent content={content} />
            </div>
        </>
     );
}
 
export default companyTnC;
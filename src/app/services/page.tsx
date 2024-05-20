import { getListPage } from "@/lib/contentParser";
import SectionHeader from "@/partials/SectionHeader";
import { Feature } from "@/types";
import MotionCards from "./MotionCards";
import SeoMeta from "@/partials/SeoMeta";

const Services = () => {
    const homepage = getListPage("services/_index.md");
    const { frontmatter } = homepage;
    const {title, meta_title, description, features}: {title:string, meta_title:string, description:string, features: Feature[]} = frontmatter;

      // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727


    return ( 
        <>
        <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        />
        <div>
            <div className="bg-[#FBDC6D] border-b-8 border-[#1B1E49]">
                <SectionHeader primaryText="OUR SERVICES" secondaryText="What we offer" bgColor="bg-[#FBDC6D]"/>
            </div>
            <MotionCards features={features}/>
        </div>
        </>
     );
}
 
export default Services;
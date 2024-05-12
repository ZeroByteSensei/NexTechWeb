import { getListPage } from "@/lib/contentParser";
import SectionHeader from "@/partials/SectionHeader";
import { Feature } from "@/types";
import MotionCards from "./MotionCards";

const Services = () => {
    const homepage = getListPage("services/_index.md");
    const { frontmatter } = homepage;
    const {features}: {features: Feature[]} = frontmatter;

      // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727


    return ( 
        <div>
            <div className="bg-[#FBDC6D] border-b-8 border-[#1B1E49]">
                <SectionHeader primaryText="OUR SERVICES" secondaryText="What we offer" bgColor="bg-[#FBDC6D]"/>
            </div>
            <MotionCards features={features}/>
        </div>
     );
}
 
export default Services;
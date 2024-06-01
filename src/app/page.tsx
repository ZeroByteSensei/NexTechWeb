import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSectionStaticTwo from "@/components/HeroSectionStaticTwo";
import { HireUsSection } from "@/components/HireUsSection";
import OurBlogsSection from "@/components/OurBlogsSection";
import OurServicesParallax from "@/components/OurServicesParallax";
import TestimonialSectionSlider from "@/components/TestimonialSectionSlider";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature, Service } from "@/types";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const { frontmatter } = homepage;
  const { services }: {services: Service[];} = frontmatter;

  return (
    <>
      <SeoMeta />

      <section className="overflow-hidden">
        <HeroSectionStaticTwo/>
      </section>

      <section className="">
        <HireUsSection/>
      </section>

      <section className="overflow-hidden">
        <AboutSection/>
      </section>

      <section className="" >
        <OurServicesParallax data={services}/>
      </section>

      <section className="contact-section" id="contact-section">
        <ContactSection/>
      </section>

      <section>
        <OurBlogsSection/>
      </section>

      <section className="overflow-hidden">
        <TestimonialSectionSlider data={testimonial.frontmatter}/>
      </section>

      <CallToAction/>
      
    </>
  );
};

export default Home;

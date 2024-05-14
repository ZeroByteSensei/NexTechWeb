import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HeroSectionStatic from "@/components/HeroSectionStatic";
import HeroSectionStaticTwo from "@/components/HeroSectionStaticTwo";
import { HireUsSection } from "@/components/HireUsSection";
import OurBlogsSection from "@/components/OurBlogsSection";
import OurServicesParallax from "@/components/OurServicesParallax";
import OurServicesSection from "@/components/OurServicesSection";
import TestimonialSectionSlider from "@/components/TestimonialSectionSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      {/* Hero Section */}
      {/* <section className="w-full aspect-[8/16] lg:aspect-[16/8]">
        <HeroSection/>  This is the moving hero section
      </section> */}

      {/* <section className="w-full aspect-[8/16] lg:aspect-[16/8]">
        <HeroSectionStatic/>
      </section> */}

      <section className="overflow-hidden">
        <HeroSectionStaticTwo/>
      </section>

      <section className="">
        <HireUsSection/>
      </section>

      <section className="overflow-hidden">
        <AboutSection/>
      </section>

      {/* <section className="overflow-hidden">
        <OurServicesSection/>
      </section> */}
      <section className="">
        <OurServicesParallax/>
      </section>

      <section className="contact-section" id="contact-section">
        <ContactSection/>
      </section>

      <section>
        <OurBlogsSection/>
      </section>


      {/* <section className="overflow-hidden">
        <TestimonialsSection data={testimonial}/>
      </section> */}

      <section className="overflow-hidden">
        <TestimonialSectionSlider data={testimonial.frontmatter}/>
      </section>

      <CallToAction/>


      {/* <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-7 md:col-9 mb-8 text-center">
              <h1
                className="mb-4 text-h3 lg:text-h1"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              {banner.button!.enable && (
                <Link
                  className="btn btn-primary"
                  href={banner.button!.link}
                  target={
                    banner.button!.link.startsWith("http") ? "_blank" : "_self"
                  }
                  rel="noopener"
                >
                  {banner.button!.label}
                </Link>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="800"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section> */}
      {/* /Hero Section */}

      {/* Features Section */}

      {/* {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))} */}
      {/* /Features Section */}

      {/* <Testimonials data={testimonial} /> */}
      
      
      {/* This will be the blog section */}
      
    </>
  );
};

export default Home;

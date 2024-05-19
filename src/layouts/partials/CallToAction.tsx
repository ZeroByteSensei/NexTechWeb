import { Call_to_action } from "@/types";
import Link from "next/link";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}
  // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727 

const CallToAction = () => {
  return (
    <>
        <section className="overflow-hidden bg-[#1B1E49] sm:grid sm:grid-cols-2 sm:items-center">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="text-2xl font-bold text-[#FBDC6D] md:text-3xl">
                Ready to build your next project with NexTech Media?
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Got a question? Need some help? Or just want to say hello? We&apos;re all ears! 
                <br/>Don&apos;t be a stranger - let&apos;s make some digital magic together!
              </p>

              <div className="mt-4 md:mt-8">
                <Link href="/contact" className="inline-block rounded bg-[#FBDC6D] px-12 py-3 text-sm font-medium text-[#1B1E49] transition hover:bg-[#D02727] focus:outline-none focus:ring focus:ring-yellow-400">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full aspect-[16/7] sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          style={{backgroundImage:`url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715684063/CTA_IMG_dwabtj.webp)`, backgroundSize:"cover"}}/>
              {/* <ImageFallback
                    className="h-full w-full"
                    src={data.frontmatter.image}
                    alt="cta-image"
                    width={100}
                    height={100}
                  /> */}
          </section>
    </>
  );
};

export default CallToAction;

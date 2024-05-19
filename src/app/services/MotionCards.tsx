'use client'
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import {motion} from 'framer-motion';

const MotionCards = ({features}:{features:Feature[]}) => {
    return ( 
        <div>
            {features.map((feature, index: number) => (
                <section key={index} id={feature.id}
                    className={`section-sm ${index % 2 === 0 ? "bg-[#FBDC6D]":"bg-[#1b1e49]"}`}>
                    <div className="container ">
                        <div className="row items-center justify-between ">
                            <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        
                            className={`mb:md-0 mb-6 md:col-5 ${index % 2 !== 0 && "md:order-2"}`}>
                                <ImageFallback
                                src={feature.image}
                                height={480}
                                width={520}
                                alt={feature.title}
                                />
                            </motion.div>
                            <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}

                            className={`md:col-7 lg:col-6 ${index % 2 !== 0 && "md:order-1"}`}>
                                <h2
                                className={`mb-4 ${index % 2 === 0 ? "text-[#1b1e49]":"text-[#FBDC6D]"}`}
                                dangerouslySetInnerHTML={markdownify(feature.title)}
                                />
                                <p
                                className={`mb-8 text-lg ${index % 2 === 0 ? "text-[#1b1e49]":"text-[#FBDC6D]"}`}
                                dangerouslySetInnerHTML={markdownify(feature.content)}
                                />
                                <ul>
                                {feature.bulletpoints.map((bullet: string) => (
                                    <li className={`relative mb-4 pl-6 ${index % 2 === 0 ? "text-[#1b1e49]":"text-[#FBDC6D]"}`} key={bullet}>
                                    <FaCheck className={"absolute left-0 top-1.5"} />
                                    <span dangerouslySetInnerHTML={markdownify(bullet)} />
                                    </li>
                                ))}
                                </ul>
                                {feature.button.enable && (
                                <Link
                                    className={`btn btn-primary mt-5 ${index % 2 === 0 ? "text-[#FBDC6D] bg-[#1B1E49]":"text-[#1B1E49] bg-[#FBDC6D]"}`}
                                    href={feature.button.link}
                                >
                                    {feature.button.label}
                                </Link>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
     );
}
 
export default MotionCards;
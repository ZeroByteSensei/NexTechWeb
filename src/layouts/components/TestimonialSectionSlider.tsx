'use client'

import SectionHeader from '@/partials/SectionHeader';
import { Testimonial } from '@/types';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'


interface PageData {
      enable?: boolean;
      title: string;
      description?: string;
      testimonials: Array<Testimonial>;
}

const TestimonialSectionSlider = ({data}:{data:PageData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slides: {
            origin: 'center',
            perView: 1.25,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 1024px)': {
            slides: {
                origin: 'auto',
                perView: 1.5,
                spacing: 32,
            },
            },
        },
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
    });


    return ( 
        <section className="bg-[#181818] border-t-4 border-[#8e92d5] ">
            <SectionHeader primaryText="TESTIMONIALS" secondaryText="what our clients say" bgColor="bg-[#181818]" textColor="text-[#8e92d5]"/>

            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
                    <div className="max-w-xl text-center sm:text-left ">
                        <h2 className="text-3xl font-bold tracking-tight text-[#D02727] sm:text-4xl">
                            Dont just take our word for it...
                        </h2>

                        <p className="mt-4 text-[#FBDC6D]">
                            Trusted by businesses of all sizes. Read about the experiences of our valued clients.
                        </p>

                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                        <button onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev() }
                        aria-label="Previous slide" id="keen-slider-previous-desktop" className="rounded-full border border-[#D02727] p-3 text-[#D02727] transition hover:bg-[#D02727] hover:text-white">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5" >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                            </svg>
                        </button>

                        <button onClick={(e: any) =>e.stopPropagation() || instanceRef.current?.next() }
                            aria-label="Next slide"
                            id="keen-slider-next-desktop"
                            className="rounded-full border border-[#D02727] p-3 text-[#D02727] transition hover:bg-[#D02727] hover:text-white"
                        >
                            <svg
                            className="size-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9 5l7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>

                <div className="-mx-6 lg:col-span-2 lg:mx-0 ">
                    <div ref={sliderRef} id="keen-slider" className="keen-slider">
                        {data.testimonials.map((testimonial, index) => (
                            <div key={index} className="keen-slider__slide w-[50%]">
                                <blockquote className="flex h-full flex-col justify-between bg-[#FBDC6D] bg-opacity-25 rounded-md p-6 shadow-sm sm:p-8 lg:p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-[#FBDC6D]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill='#FBDC6D' width="24" height="24" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                                            </svg>
                                        </div>

                                        <div className="mt-4">
                                        <p className="text-2xl font-bold text-[#1B1E49] sm:text-3xl">&quot;{testimonial.review}&quot;</p>

                                        <p className="mt-4 leading-relaxed text-[#FBDC6D]">{testimonial.content}</p>
                                        </div>
                                    </div>

                                    <footer className="mt-4 text-sm font-medium text-gray-200 sm:mt-6">
                                        &mdash; {testimonial.name}
                                    </footer>
                                </blockquote>
                            </div>
                            
                        ))}
                    </div>
                </div>
                </div>

                <div className="mt-8 flex justify-center gap-4 lg:hidden">
                    <button onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev() }
                        aria-label="Previous slide" id="keen-slider-previous" className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white">
                        <svg
                        className="size-5 -rotate-180 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" >
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>

                    <button onClick={(e: any) =>e.stopPropagation() || instanceRef.current?.next() }
                        aria-label="Next slide" id="keen-slider-next" className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white" >
                        <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" >
                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>
            </section>
     );
}
 
export default TestimonialSectionSlider;
import SectionHeader from "@/partials/SectionHeader";

const FAQsection = () => {

    const FAQs=[
        {
            question: "Q: What sets NexTech Media apart in digital marketing?",
            answer: "A: Our unique blend of expertise, personalized strategies, and a decade of experience positions us as leaders in elevating your online presence."
        },
        {
            question: "Q: How do you ensure the success of your clients?",
            answer: "A: Through a combination of innovative tactics, real-world training, and a relentless pursuit of results, we guarantee a digital marketing experience that not only meets but exceeds expectations."
        },
        {
            question: "Q: What platforms does NexTech Media specialize in for social media management? ",
            answer: "A: We specialize in all shorts of platforms from Meta(formerly Facebook) to Google and more. Our team stays up-to-date with the latest trends and algorithms to ensure your content reaches its maximum potential audience."
        }
    ]
    return ( 
        <div className="space-y-4">
            <SectionHeader primaryText="FAQs" secondaryText="Let Us Answer" bgColor="bg-[#FBDC6D]" textColor="text-[#1B1E49]"/>
            {FAQs.map((faq, index) => (
                <details key={index} className="group border-s-4 border-[#D02727] bg-[#1B1E49] p-6 [&_summary::-webkit-details-marker]:hidden rounded-md">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                        <h2 className="text-lg font-bold text-[#FBDC6D]">
                            {faq.question}
                        </h2>

                        <span className="shrink-0 rounded-full bg-[#FBDC6D] p-1.5 text-[#1B1E49] sm:p-3">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-300">
                        {faq.answer}
                    </p>
                </details>
            ))}
        </div>
     );
}
 
export default FAQsection;
import SectionHeader from "@/partials/SectionHeader";

const FAQsection = () => {

    const FAQs=[
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!"
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
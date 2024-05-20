import CalSetup from "@/partials/CalSetup";
import SectionHeader from "@/partials/SectionHeader";

const ContactSection = () => {
    return ( 
        <div className="w-full bg-[#181818] overflow-hidden py-16">
        <SectionHeader primaryText="CONTACT US" secondaryText="Let's hop on a call" bgColor="bg-[#181818]" textColor="text-[#8e92d5]"/>
            <div className="w-full grid grid-cols-6 px-3 py-4 gap-y-4">
                <div className="p-6 mr-2 bg-gray-100 rounded-md sm:rounded-lg col-span-6 md:col-span-2">
                    <h1 className="text-3xl sm:text-4xl text-[#1B1E49] dark:text-white font-extrabold tracking-tight">
                        Book An Appointment
                    </h1>
                    <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                         We get a lot of enquiries and messages. Our team will contact you to confirm the schedule once you select an available slot listed here
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold px-2">
                            3306 9th Street, <br/>United Parañaque Subdivision, <br/>5 area, 7 San Isidro, <br/>Parañaque city, Philippines
                        </div>
                    </div>
                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            Lucknow, India
                        </div>
                    </div>

                    {/* <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            +44 1234567890
                        </div>
                    </div> */}

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <p className="ml-4 text-md tracking-wide font-semibold w-40">
                            contact@nextechmedia.co.in
                        </p>
                    </div>
                </div>
                <div className=" relative col-span-6 md:col-span-4 bg-gray-100 rounded-lg p-2 overflow-hidden">
                    <CalSetup/>
                    <div className="bg-gray-100 hidden md:block absolute w-full h-14 bottom-5 mx-4"/>
                </div>
            </div>
        </div>
     );
}
 
export default ContactSection;
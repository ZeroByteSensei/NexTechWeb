import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const OurTeamCard = () => {
    // colors: yellow: #FBDC6D, Blue: #1B1E49, Red: #D02727

    return ( 
        <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#8e92d5] via-orange-200 to-[#8e92d5] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-[#1B1E49] mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-16 transition-all duration-500"></div>
            <div className="z-10  group-hover:-translate-y-6 transition-all duration-500">
                <span className="text-2xl font-semibold">
                    George Johnson
                </span>
                <p>Support Specialist</p>
                <p className="hidden group-hover:block mt-2 transition-all duration-500">Support Specialist Specialist Specialist Specialist Specialist Specialist</p>
            </div>
            <div className="z-10 flex gap-x-2 absolute top-2 right-2 group-hover:translate-y-5 group-hover:-translate-x-5 transition-all duration-500 space-x-4">
                <Link className=" text-slate-50 rounded-md z-10 hover:scale-110 transition-all duration-500 group-hover:text-[#1B1E49]" href="#"><FaInstagram size={24}/></Link>
                <Link className="text-slate-50 rounded-md z-10 hover:scale-110 transition-all duration-500 group-hover:text-[#1B1E49]" href="#"><FaTwitter size={24}/></Link>
                <Link className="text-slate-50 rounded-md z-10 hover:scale-110 transition-all duration-500 group-hover:text-[#1B1E49]" href="#"><FaLinkedin size={24}/></Link>

            </div>
        </div>
     );
}
 
export default OurTeamCard;
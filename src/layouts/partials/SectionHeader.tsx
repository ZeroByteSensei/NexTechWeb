const SectionHeader = ({primaryText, secondaryText}:{primaryText:string, secondaryText:string}) => {
    return ( 
        <div className="relative w-full">
            <p className="text-[14vh] font-bold text-center text-gray-300">{primaryText}</p>
            <p className="absolute top-[40%] font-extrabold left-1 bg-gray-100 w-full text-center text-2xl bg-opacity-70 text-gray-300 leading-7">{secondaryText}</p>
        </div>
     );
}
 
export default SectionHeader;
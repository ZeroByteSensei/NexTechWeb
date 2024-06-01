import Image from "next/image";
import Link from "next/link";

export function HireUsSection() {
  return (
    <div className="w-full max-w-[1760px] bg-[#1B1E49] aspect-[16/3] py-2">
      <Link href="/" >
        <Image width={1100} height={500} alt="upcoming event info image"
          src="https://res.cloudinary.com/dncar4d7j/image/upload/v1716187052/adImage_o73gro.png"
          className="inset-0 h-full w-full object-cover"
        />
      </Link>
    </div>
  );
}

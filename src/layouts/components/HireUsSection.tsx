import Link from "next/link";
import React from "react";

export function HireUsSection() {
  return (
    <div className="w-full max-w-[1760px] bg-[#1B1E49] aspect-[16/3] py-4">
      <Link href="/">
        <div className="w-full h-full text-center text-white text-2xl animate-pulse"
          style={{backgroundImage:"url(https://res.cloudinary.com/dncar4d7j/image/upload/v1715523709/adImage_o73gro.png)", backgroundSize:"cover"}}/>
      </Link>
    </div>
  );
}

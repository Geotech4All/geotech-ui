import { frontFacingNavUrl } from "@constants/frontFacing";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex fixed z-[100] top-0 w-screen shadow-2xl bg-white">
      <div className="shadow-inner shadow-black/30 gap-20 items-center flex w-full">
        <div></div>
        <div className="flex px-10">
          {frontFacingNavUrl.map(url => (
            <Link
              className="p-3 font-montserrat hover:text-red-400 transition-all px-5" key={Math.random()} href={url.path}>{url.name}</Link>)
          )}
        </div>
      </div>
    </nav>
  );
}

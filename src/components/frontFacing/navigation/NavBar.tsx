import { FullLogo } from "@components/common";
import { frontFacingNavUrl } from "@constants/frontFacing";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex fixed z-[100] top-0 w-screen shadow-2xl bg-white">
      <div className="shadow-black/30 gap-20 items-center flex w-full">
        <Link href="/" className="max-w-[9rem] flex items-center ml-4"><FullLogo /></Link>
        <div className="flex px-10 items-center">
          {frontFacingNavUrl.map(url => (
            <Link
              className={`
                p-3 hover:text-red-400 font-semibold
                transition-all px-5`}
              key={Math.random()}
              href={url.path}>{url.name}</Link>)
          )}
        </div>
      </div>
    </nav>
  );
}

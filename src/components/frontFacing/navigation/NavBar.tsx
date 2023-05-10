import React from "react";
import Link from "next/link";
import { FullLogo } from "@components/common";
import { ClientNavLinks } from "@components/frontFacing";

export default function NavBar() {
  return (
    <nav className="flex fixed p-3.5 backdrop-blur-md z-[100] top-0 w-screen bg-opacity-70 bg-white">
      <div className="gap-20 justify-between items-center flex w-full">
        <Link href="/" className="max-w-[9rem] flex items-center ml-4">
            <FullLogo />
        </Link>
        <ClientNavLinks className="flex gap-7 px-10"/>
      </div>
    </nav>
  );
}

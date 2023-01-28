import React from "react";
import { NavBar } from "@components/frontFacing";

export default function NavBarLayout (page: React.ReactElement): React.ReactNode {
  return (
    <div className="relative z-10">
      <NavBar />
      <div className="mt-10">
        {page}
      </div>
    </div>
  )
}

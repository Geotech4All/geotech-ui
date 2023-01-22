import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FullLogo } from "@components/common";
import { AdminNavLinks } from "@components/admin";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export default function AdminNavBar(){
  const [navOpen, setNavOpen] = React.useState(false);
  const rootRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  
  function toggleNav(){
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }

  const closeNav: React.MouseEventHandler = (event) => {
    if (
      event.target === rootRef.current
      ) {
      setNavOpen(false);
    }
  };

  return (
    <div ref={rootRef} onClick={closeNav} className="fixed z-20 bg-black/10">
      <div className="bg-white w-screen flex items-center max-h-10 shadow relative p-2">
        <button onClick={toggleNav}>
          {navOpen ? <MdClose size={25} /> : <BiMenu size={25} />}
        </button>
        <Link className="h-full absolute flex items-center right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2"href="/">
          <FullLogo className="w-36" />
        </Link>
      </div>
      <AnimatePresence>
        {navOpen &&
          <motion.div 
            initial={{ translateX: -250 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -250 }}
            className="max-w-[15rem] bg-white p-3 shadow h-screen">
            <AdminNavLinks />
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
};

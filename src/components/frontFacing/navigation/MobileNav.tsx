import React from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { frontFacingNavUrl } from "@constants/frontFacing";
import { AdminNavLink } from "@components/admin";

export default function MobileNav(){
  const [navOpen, setNavOpen] = React.useState(false);

  function toggleNav(){
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }

  function closeNav() {
    setNavOpen(false)
  };

return (
    <div className="fixed z-20">
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={Math.random()}
            onClick={() => setNavOpen(false)} className="fixed z-[-10] inset-0 bg-black/50" />)}
      </AnimatePresence>
      <button
        className={`
          border fixed z-10 border-gray-300 right-2 top-1
          bg-black/20 text-white
          backdrop-blur p-1 rounded-md`} onClick={toggleNav}>
        {navOpen ? <MdClose size={25} /> : <BiMenu size={25} />}
      </button>
      <AnimatePresence>
        {navOpen &&
          <motion.div 
            initial={{ translateX: "200%", translateY: "-100%" }}
            animate={{ translateX: "100%", translateY: 0 }}
            exit={{ translateX: "200%", translateY: "-100%" }}
            className={`
              fixed right-[12rem] max-w-[15rem] min-w-[11rem] z-[5] flex flex-col mt-3 justify-between
              bg-white p-3 shadow min-h-[70vh] rounded-lg`}>
            <ul>{frontFacingNavUrl.map(url => (
              <AdminNavLink
                onClick={closeNav}
                key={Math.random()} url={{ icon: url.icon, name: url.name, path: url.path}} />
            ))}</ul>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
};

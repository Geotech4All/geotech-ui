import React from "react";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { Button, FullLogo } from "@components/common";
import { AnimatePresence, motion } from "framer-motion";
import { frontFacingNavUrl } from "@constants/frontFacing";

export default function MobileNav(){
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    };
  };

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="fixed z-[100] top-0 w-screen text-white">
      <div className="relative z-0">
        <div className="flex bg-black/10 z-10 backdrop-blur-sm items-center w-full justify-center relative p-2">
          <Button
            onClick={handleOpen}
            className="p-1 aspect-square bg-black/5 rounded-md border absolute top-1/2 -translate-y-1/2 left-2 backdrop-blur-sm">
            {isOpen ? <IoIosClose size={20}/> : <HiMenuAlt4 size={20}/>}
          </Button>
          <FullLogo className="max-w-[8rem]" />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={Math.random()}
              onClick={handleClose} className="z-0 absolute h-screen inset-0 bg-black/30"/>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                key={Math.random()}
                className="bg-black/20 w-40 p-1 backdrop-blur-sm h-screen absolute left-0 ">
                <ul className={`
                  flex flex-col border rounded-lg gap-1 p-1`}>
                  {frontFacingNavUrl.map(url => (
                    <Link
                      onClick={handleClose}
                      className="transition-all font-semibold p-1 rounded-xl active:bg-red-300/70"
                      key={Math.random()} href={url.path}>{url.name}</Link>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

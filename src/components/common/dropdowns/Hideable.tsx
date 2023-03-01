import { AnimatePresence, motion } from "framer-motion";
import { SlOptionsVertical } from "react-icons/sl";
import React from "react";
import { Button } from "@components/common";
import { useIsMidScreen } from "@components/common/hooks";

interface HideableProps {
  children?: React.ReactNode;
}

export default function Hideable(props: HideableProps) {
  const { children } = props;
  const isMid = useIsMidScreen();
  const [isSmallScreen, setIsSmallScreen] = React.useState<boolean>();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
  const buttonRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  React.useEffect(() => {
    setIsSmallScreen(isMid);
  }, [isMid])

  React.useEffect(() => {
    const nextApp = document.getElementById("__next");
    const handleClose = (e: Event) => {
      if (! (buttonRef?.current?.contains(e.target as Node)) && ! (dropRef?.current?.contains(e.target as Node))){
        setDropdownOpen(false);
      }
    }
    nextApp?.addEventListener("click", handleClose)
    return () => nextApp?.removeEventListener("click", handleClose)
  }, [])

  function handleDropdown() {
    if (dropdownOpen) {
      setDropdownOpen(false)
    } else {
      setDropdownOpen(true);
    }
  }
  return (
    <>
      {!isSmallScreen ? (
        <div className="flex flex-row-reverse relative">
          <button
            ref={buttonRef}
            onClick={handleDropdown}
            className={`
              hover:bg-gray-200 aspect-square p-1 rounded-full
              bg-transparent
              active:bg-gray-200 transition-all`}
            ><SlOptionsVertical size={13}/></button>
          <AnimatePresence >
            {dropdownOpen && (
              <motion.ul
               ref={dropRef}
                className="absolute right-7 bg-white p-3 gap-2 flex flex-col shadow-lg rounded-md top-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                key={Math.random()} >
                {children}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )
      :<>{children}</>}
    </>
  );
};

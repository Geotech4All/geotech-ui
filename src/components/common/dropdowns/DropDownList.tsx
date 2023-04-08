import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DropDownOption from "./DropDownOption";


interface DropDownListProps {
  options: string[];
  name?: string;
}

export default function DropDownList(props: DropDownListProps) {
  const { options, name } = props;
  const [selected, setSelected] = React.useState<string>();
  const [optionsOpen, setOptionsOpen] = React.useState(false);

  const buttonRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const handleOpenOptions = () => {
    if (optionsOpen) {
      setOptionsOpen(false)
    } else { 
      setOptionsOpen(true)
    }
  }

  const closeOptions = (event: MouseEvent) => {
    if (event.target !== buttonRef.current) {
      setOptionsOpen(false)
    }
  }

  React.useEffect(()=> {
    document.addEventListener("click", closeOptions)
    return () => document.removeEventListener("click", closeOptions)
  }, [])

  return (
    <div>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleOpenOptions}
        className="border-2 w-full flex items-center justify-between max-w-md text-black/70 rounded-md p-1 px-2">
        <span className={`
          ${selected ? "" : "text-black/50"}
          `}>{selected? selected : `Select ${name ? name : ''}`}</span>
        {optionsOpen ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      <AnimatePresence>
        {optionsOpen && (
          <motion.ul
            className="shadow-lg p-2 max-w-md flex flex-col rounded-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            key={Math.random()}>
            {options.map(option => (
              <DropDownOption
                onSelect={setSelected}
                key={Math.random()} option={option} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

import { FoldersEnum } from "@gql/codegen/graphql";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DropDownOption from "./DropDownOption";


interface DropDownListProps {
  options: string[] | FoldersEnum[];
  name?: string;
  full?: boolean;
  getCurrent: (selected: string) => void;
  defaultValue?: string;
}

export default function DropDownList(props: DropDownListProps) {
  const { options, full, name, getCurrent, defaultValue } = props;
  const [selected, setSelected] = React.useState<string | undefined>(defaultValue);
  const [optionsOpen, setOptionsOpen] = React.useState(false);

  const updateSelected = (selected: string) => {
    setSelected(selected);
    getCurrent(selected);
    toggleOptionsOpen();
  }
  const buttonRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const spanRef = React.useRef() as React.MutableRefObject<HTMLSpanElement>;

  const toggleOptionsOpen = () => setOptionsOpen(curr => !curr);
  const closeOptions = (event: MouseEvent) => {
    const validTargets = [buttonRef.current, spanRef.current]
    const target = event.target as HTMLElement
    if (target && !validTargets.includes(target)) {
      setOptionsOpen(false)
    }
  }

  React.useEffect(()=> {
    document.addEventListener("click", closeOptions)
    return () => document.removeEventListener("click", closeOptions)
  }, [])

  return (
    <div className="w-full">
      <button
        ref={buttonRef} type="button" onClick={toggleOptionsOpen}
        className={`${!full ? "max-w-md" : ""}
            border-2 w-full flex items-center justify-between text-black/70 rounded-md p-1 px-2`}>
        <span ref={spanRef} onClick={toggleOptionsOpen}
          className={`${selected ? "" : "text-black/50"} line-clamp-1 pointer-events-none`}>
          {selected? selected : `Select ${name ? name : ''}`}
        </span>
        {optionsOpen ? <FaAngleDown /> : <FaAngleUp />}
      </button>
      <AnimatePresence>
        {optionsOpen && (
          <motion.ul
            className={`${!full ? "max-w-md" : ""}
                shadow-lg p-2 absolute w-full bg-white z-20 flex flex-col rounded-lg`}
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }} key={Math.random()}>
            {options.map(option => (
              <DropDownOption onSelect={updateSelected} key={Math.random()} option={option} />
            ))}
            {options.length < 1 && (
              <li className="italic text-black/50 flex items-center justify-center">empty</li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

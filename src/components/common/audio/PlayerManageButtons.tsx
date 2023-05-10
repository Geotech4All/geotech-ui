import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@components/common";

interface PlayerManageButtonsProps {
  isExpanded: boolean;
  toggleExpand: React.MouseEventHandler<HTMLButtonElement>;
  closePlayer: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PlayerManageButtons(props: PlayerManageButtonsProps){
  const { isExpanded, toggleExpand, closePlayer } = props;
  return (
    <div className="absolute top-0 z-10 p-1 right-4">
      <div className="flex group rounded-md overflow-hidden items-center">
        <Button onClick={toggleExpand}
          className={`
            bg-white p-1 px-3 flex items-center
            hover:bg-white/70 hover:text-white transition-all`}
          title={isExpanded ? "Colapse": "Expand"}>
          {isExpanded ? <FaAngleDown size={20}/> : <FaAngleUp size={20}/>}
        </Button>
        <Button
          title="Close player"
          onClick={closePlayer}
          className={`
            flex items-center hover:bg-white/70 hover:text-black
            p-1 px-3 bg-white/30 text-white transition-all`}
          ><IoClose size={20} />
        </Button>
      </div>
    </div>
  );
};

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
      <div className="flex rounded-3xl overflow-hidden items-center">
        <Button
          onClick={toggleExpand}
          className={`
            bg-green-600 p-1 px-3 text-white flex items-center
            hover:bg-green-700 transition-all`}
          title={isExpanded ? "Colapse": "Expand"}>
          {isExpanded ? <FaAngleDown size={20}/> : <FaAngleUp size={20}/>}
        </Button>
        <Button
          title="Close player"
          onClick={closePlayer}
          className={`
            bg-red-500 flex items-center text-white
            p-1 px-3 hover:bg-red-600 transition-all`}
          ><IoClose size={20} />
        </Button>
      </div>
    </div>
  );
};

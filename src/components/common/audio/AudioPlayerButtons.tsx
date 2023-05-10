import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { Button } from "@components/common";

interface AudioPlayerButtonsProps {
  backThirty?: React.MouseEventHandler<HTMLButtonElement>;
  forwardThirty?: React.MouseEventHandler<HTMLButtonElement>;
  isPlaying: boolean;
  togglePlayer?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function AudioPlayerButtons(props: AudioPlayerButtonsProps) {
  const { backThirty, forwardThirty, togglePlayer, isPlaying } = props;
  return (
      <div className="flex gap-3 items-center text-white">
        <Button title="Jump 30s backward" onClick={backThirty}
          className={`
            cursor-pointer bg-white text-black p-0.5 rounded-sm hover:text-white
            hover:bg-white/60 transition-all active:text-white active:bg-white/60`}>
          <FaAngleDoubleLeft />
        </Button>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          className={`
            cursor-pointer bg-white text-black aspect-square p-4
            rounded-full hover:text-black/70 transition-all active:text-black/70`}
          type="button" onClick={togglePlayer}>
          {isPlaying ? <FaPause size={25}/> : <FaPlay size={25}/>}
        </Button>
        <Button title="Jump 30s forward" onClick={forwardThirty}
          className={`
            cursor-pointer bg-white text-black p-0.5 rounded-sm hover:text-white
            hover:bg-white/60 transition-all active:text-white active:bg-white/60`}>
            <FaAngleDoubleRight />
        </Button>
      </div>
  );
};

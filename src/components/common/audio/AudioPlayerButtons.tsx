import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
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
        <Button
          title="Jump 30s backward"
          onClick={backThirty}
          className={`
            flex items-center gap-1
            cursor-pointer hover:text-red-200
            transition-all active:text-red-200`}>
          <BsArrowLeftShort />30
        </Button>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          className={`
            cursor-pointer bg-red-500 aspect-square
            p-4
            rounded-full hover:text-red-200 transition-all active:text-red-200`}
          type="button" onClick={togglePlayer}>
          {isPlaying ? <FaPause size={25}/> : <FaPlay size={25}/>}
        </Button>
        <Button
          title="Jump 30s forward"
          onClick={forwardThirty}
          className={`
            cursor-pointer hover:text-red-200
            transition-all active:text-red-200
            flex items-center gap-1`}>30
            <BsArrowRightShort />
        </Button>
      </div>
  );
};

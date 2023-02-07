import React from "react";
import { motion } from "framer-motion";
import { AudioPlayer } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectAudioPlayer } from "@store/slices";

interface AudioLayoutProps {
  children?: React.ReactNode;
  width?: number;
}

export default function AudioLayout(props: AudioLayoutProps) {
  const { children, width } = props;
  const player = useAppSelector(selectAudioPlayer);
  return (
    <div className="relative w-full z-0">
      <div className="z-10 w-full">{children}</div>
      {player.playerVissible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          key={Math.random()}
          className="z-20 mt-24 w-full">
          <AudioPlayer width={width}/>
        </motion.div>
      )}
    </div>
  )
};

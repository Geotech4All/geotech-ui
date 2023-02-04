import React from "react";
import { motion } from "framer-motion";
import { AudioPlayer } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectAudioPlayer } from "@store/slices";

interface AudioLayoutProps {
  children?: React.ReactNode;
}

export default function AudioLayout(props: AudioLayoutProps) {
  const { children } = props;
  const player = useAppSelector(selectAudioPlayer);
  return (
    <div className="relative z-0">
      <div className="z-10">{children}</div>
      {player.playerVissible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          key={Math.random()}
          className="z-20 mt-24">
          <AudioPlayer />
        </motion.div>
      )}
    </div>
  )
};

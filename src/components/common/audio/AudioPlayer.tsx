import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@store/hooks";
import { selectAudioPlayer } from "@store/slices";

export default function AudioPlayer(){
  const player = useAppSelector(selectAudioPlayer);

  React.useEffect(() => {
    console.log(player.src)
  }, [player])

  return (
    <div className="fixed bottom-0 bg-blue-700 w-screen p-10">
        <motion.div
          className={`p-3 bottom-0 w-full flex items-center`}>
          <audio controls src={player.src}/>
        </motion.div>
    </div>
  );
};

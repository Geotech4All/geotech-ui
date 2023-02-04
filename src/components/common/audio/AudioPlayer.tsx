/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectAudioPlayer, setPlayer } from "@store/slices";
import { Button } from "@components/common";

export default function AudioPlayer(){
  const player = useAppSelector(selectAudioPlayer);
  const [isPlaying, setIsPalying] = React.useState(player.isPlaying)
  const playerRef = React.useRef() as React.MutableRefObject<HTMLAudioElement>;
  const dispatch = useAppDispatch();

  React.useEffect(() => {

  }, [player])

  function playHandler(){
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause()
        setIsPalying(false)
      } else {
        playerRef.current.play()
        setIsPalying(true)
      }
    }
  }

  return (
    <div
      className={`
        fixed bottom-0  w-screen overflow-hidden rounded-t-3xl`}>
      <div className="relative z-0">
        <img 
          className="w-full absolute opacity-25 z-[-1000] object-center"
          src={player.podcast?.coverPhoto ?? "/images/listening-geo-tech.svg"} alt="cover photo"/>
        <div
          className={`
            absolute inset-0 bg-gradient-to-br z-[-100] backdrop-blur-sm
            ${player.color?.to} ${player.color?.from}`}/>
        <motion.div
          className={`p-3 bottom-0 w-full flex items-center`}>
          <audio ref={playerRef} className="hidden" preload="metadata" controls src={player.podcast?.audio ?? ""}/>
        </motion.div>
        <div className="flex gap-4 items-center text-white">
          <Button className="flex items-center gap-1"><BsArrowLeftShort />30</Button>
          <Button type="button" onClick={playHandler}>{isPlaying ? <FaPause size={35}/> : <FaPlay size={35}/>}</Button>
          <Button className="flex items-center gap-1">30<BsArrowRightShort /></Button>
        </div>

        {/** Duration*/}
        <div>0:00</div>
      </div>
    </div>
  );
};

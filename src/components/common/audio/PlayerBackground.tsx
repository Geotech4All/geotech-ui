/* eslint-disable @next/next/no-img-element */
import { AudioPlayer } from "@store/slices";
import React from "react";

interface PlayerBackgroundProps {
  player: AudioPlayer;   
}

export default function PlayerBackground(props: PlayerBackgroundProps){
  const { player } = props;
  return (
    <>
      <img 
        className="w-full absolute opacity-90 z-[-1000] object-center"
        src={player.podcast?.coverPhoto ?? "/images/listening-geo-tech.svg"} alt="cover photo"/>
      <div
        className={`
          absolute inset-0 bg-gradient-to-br z-[-100] backdrop-blur-sm
          ${player.color?.to} ${player.color?.from}`}/>
    </>
  )
}

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useAppSelector } from "@store/hooks";
import { selectAudioPlayer } from "@store/slices";

export default function PlayerBackground(){
  const player = useAppSelector(selectAudioPlayer);
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

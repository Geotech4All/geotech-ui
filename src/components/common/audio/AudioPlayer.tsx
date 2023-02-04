/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { clearPlayer, selectAudioPlayer, setPlayer } from "@store/slices";
import { AudioPlayerButtons, Button } from "@components/common";
import styles from "./audio.module.scss";
import { useIsMidScreen } from "@components/common/hooks";

export default function AudioPlayer(){
  const player = useAppSelector(selectAudioPlayer);
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPalying] = React.useState(false)
  const [duration, setDuration] = React.useState("0:00");
  const [currentTime, setCurrentTime] = React.useState("0:00");
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isMidScreen = useIsMidScreen()

  // Refrences
  const playerRef = React.useRef() as React.MutableRefObject<HTMLAudioElement>;
  const rangeRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const animationRef = React.useRef<number>();

  const updatePlayerCurrTime = React.useCallback(() => {
    // will updated the current time displayed in the browser
    const seconds = playerRef.current.currentTime;
    setCurrentTime(calcDuration(seconds))
    
    // updates the css property necessary to visually show the change
    rangeRef.current.style.setProperty(
      "--seek-before-width",
      `${parseInt(rangeRef.current.value) / playerRef.current.duration * 100}%`
    );
  },[])

  React.useEffect(() => {
    const seconds = playerRef.current.duration;
    rangeRef.current.max = seconds.toString();
    setDuration(calcDuration(seconds));
  }, [playerRef?.current?.readyState])

  function calcDuration(seconds: number): string{
    const minutes = seconds / 60;
    if (minutes < 1) {
      return `0:${Math.floor(seconds)}`
    }
    return minutes.toFixed(2).toString().split(".").join(":")
  }

  function togglePlayer(){
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pause()
        setIsPalying(false)
        animationRef.current && cancelAnimationFrame(animationRef.current)
      } else {
        animationRef.current = requestAnimationFrame(whilePlaying)
        playerRef.current.play()
        setIsPalying(true)
      }
    }
  }

  function whilePlaying(){
    rangeRef.current.value = playerRef.current.currentTime.toString();
    updatePlayerCurrTime();
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  const handleSeek = () => {
    // updates the player whenever the slider changes
    playerRef.current.currentTime = parseInt(rangeRef.current.value);
    updatePlayerCurrTime();
  }

  const backThirty = () => {
    rangeRef.current.value = String(playerRef.current.currentTime - 30);
    handleSeek();
  }

  const forwardThirty = () => {
    rangeRef.current.value = String(playerRef.current.currentTime + 30);
    handleSeek();
  }

  function toggleExpand(){
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    };
  }

  function closePlayer(){
    dispatch(clearPlayer())
  }

  return (
    <div
      className={`
        fixed bottom-0 w-screen overflow-hidden rounded-t-3xl`}>
      <div className="relative z-0 flex flex-col w-full">
        <audio ref={playerRef} className="hidden" preload="metadata" controls src={player.podcast?.audio ?? ""}/>
        <img 
          className="w-full absolute opacity-80 z-[-1000] object-center"
          src={player.podcast?.coverPhoto ?? "/images/listening-geo-tech.svg"} alt="cover photo"/>
        <div
          className={`
            absolute inset-0 bg-gradient-to-br z-[-100] backdrop-blur-sm
            ${player.color?.to} ${player.color?.from}`}/>
        <div className="absolute -top-2 z-10 p-1 right-4">
          <Button
            onClick={toggleExpand}
            className="bg-green-600/40 p-1 aspect-square text-white"
            title={isExpanded ? "Colapse": "Expand"}>
            {isExpanded ? <FaAngleDown size={20}/> : <FaAngleUp size={20}/>}
          </Button>
          <Button
            title="Close player"
            onClick={closePlayer}
            className="bg-red-500/70 text-white p-1 aspect-square"
            ><IoClose size={20} /></Button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 , y: 0, transition: {duration: 0.2} }}
              key={Math.random()}
              className="p-3 bg-black/50 text-white">
              <h2 className="text-2xl font-semibold">{player.podcast?.title}</h2>
              <p className="line-clamp-3">{player.podcast?.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={`p-3 gap-2 justify-center sm:justify-start flex w-full items-center`}>

          {/* Play and skip buttons */}
          <AudioPlayerButtons
            backThirty={backThirty}
            forwardThirty={forwardThirty}
            togglePlayer={togglePlayer}
            isPlaying={isPlaying}/>

          {/** Duration*/}
          <div
            className={`
              flex w-full bg-black/20 p-1.5 px-2.5 rounded-3xl
              ${!isMidScreen && "hidden" } items-center text-white gap-3`}>
            <div>{currentTime}</div>
            <input
              title="Seek"
              ref={rangeRef}
              onChange={handleSeek}
              defaultValue={0}
              className={`
                w-full appearance-none bg-red-100 outline-0
                before:content-[''] before:h-2.5 before:w-24
                before:bg-red-600 before:z-10 before:absolute
                before:top-0 before:left-0 before:rounded-l-lg
                rounded-lg relative h-2.5 cursor-pointer` + styles.progressBar} type="range"/>
            <div>{duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

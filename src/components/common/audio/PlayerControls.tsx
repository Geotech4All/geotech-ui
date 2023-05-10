import React from "react";
import { useAppSelector } from "@store/hooks";
import { selectAudioPlayer } from "@store/slices";
import { AudioPlayerButtons } from "@components/common";
import styles from "./audio.module.scss";

export default function PlayerControls() {
  const [duration, setDuration] = React.useState("0:00");
  const [currentTime, setCurrentTime] = React.useState("0:00");
  const [isPlaying, setIsPalying] = React.useState(false)

  const player = useAppSelector(selectAudioPlayer);
  // Refrences
  const playerRef = React.useRef() as React.MutableRefObject<HTMLAudioElement>;
  const rangeRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const animationRef = React.useRef<number>();

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

  return (
    <div className={`
        p-3 flex-col md:flex-row gap-2 justify-center
        sm:justify-start flex w-full items-center`}>
      <audio ref={playerRef}
        className="hidden" preload="metadata"
        controls src={player.podcast?.audio ?? ""}/>

      {/* Play and skip buttons */}
      <AudioPlayerButtons
        backThirty={backThirty}
        forwardThirty={forwardThirty}
        togglePlayer={togglePlayer}
        isPlaying={isPlaying}/>

      {/** Duration*/}
      <div className={` flex w-full p-1.5 px-2.5 items-center text-white gap-3`}>
        <div>{currentTime}</div>
        <input title="Seek" ref={rangeRef} onChange={handleSeek} defaultValue={0}
          className={styles.progressBar} type="range"/>
        <div>{duration}</div>
      </div>
    </div>
  );
};

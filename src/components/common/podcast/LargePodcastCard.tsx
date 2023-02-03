/* eslint-disable @next/next/no-img-element */
import { PodcastColorType } from "@constants/podcastColors";
import { Maybe, PodcastTypeEdge } from "@gql/codegen/graphql";
import { randomColor } from "@utils/common";
import { BsPlayFill } from "react-icons/bs";
import React from "react";
import Button from "../buttons/Button";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectAudioPlayer, setPlayer } from "@store/slices";

interface LargePodcastCardProps {
  podcast: Maybe<PodcastTypeEdge>;
}

export default function LargePodcastCard(props: LargePodcastCardProps){
  const { podcast } = props;
  const [color, setColor] = React.useState<PodcastColorType>()
  // const hosts = podcast?.node?.hosts?.map(host => host?.user?.fullName ?? "Anonymous").join(" and")
  const player = useAppSelector(selectAudioPlayer);
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    setColor(randomColor());
  }, [podcast])

  const handlePlay = () => {
    console.log(podcast?.node)
    if (player.isPlaying) {
      dispatch(setPlayer({ ...player, isPlaying: false }))
    } else {
      dispatch(setPlayer({ 
        ...player,
        isPlaying: true,
        src: podcast?.node?.audio ?? "",
        playerVissible: true
      }))
    }
  }

  return (
    <article
      className={`
        flex flex-col justify-between
        p-5 md:p-10 relative text-white min-h-[10rem]
        md:min-h-[20rem] rounded-2xl overflow-hidden
        z-0
        max-w-lg md:max-w-2xl shadow-lg`}>
      <div className="absolute inset-0 z-[-10]">
        <div className="relative flex items-center w-full h-full justify-center">
          {podcast?.node?.coverPhoto && (
            <img
              className="self-end w-full min-h-full object-cover"
              src={podcast?.node?.coverPhoto} alt={podcast?.node?.title + " cover"} />
          )}
          <div
            className={`
              bg-gradient-to-r ${ color?.from } ${ podcast?.node?.coverPhoto ? "to-transparent" : "to-black/50"}
              absolute inset-0`} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-2xl md:text-5xl">{ podcast?.node?.title }</h1>
        <p className="font-semibold text-lg line-clamp-2">{podcast?.node?.description}</p>
        <div>
          <p className="flex items-center gap-1">
            <span className="flex items-center text-red-400"><BsPlayFill size={20} /></span> {podcast?.node?.listens} plays
          </p>
        </div>
      </div>
      <div className="py-2 md:py-5">
        <Button
          onClick={handlePlay}
          onKeyDown={handlePlay}
          className={`
            bg-red-500 p-1.5 px-4 rounded-3xl hover:bg-red-600 active:bg-red-600 transition-all`}>Listen now</Button>
      </div>
    </article>
  )
};

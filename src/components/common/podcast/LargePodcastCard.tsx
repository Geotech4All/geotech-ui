/* eslint-disable @next/next/no-img-element */
import { Maybe, PodcastTypeEdge } from "@gql/codegen/graphql";
import { BsPlayFill } from "react-icons/bs";
import React from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectAudioPlayer, setPlayer } from "@store/slices";
import UIButton from "../buttons/UIButton";

interface LargePodcastCardProps {
  podcast: Maybe<PodcastTypeEdge>;
}

export default function LargePodcastCard(props: LargePodcastCardProps){
  const { podcast } = props;
  const dispatch = useAppDispatch()
  const player = useAppSelector(selectAudioPlayer);
  const node = podcast?.node;

  const handlePlay = React.useCallback(() => {
    dispatch(setPlayer({ 
      ...player,
      isPlaying: true,
      podcast: podcast?.node,
      playerVissible: true
    }))
  },[podcast, dispatch, player])

  return (
    <article
      className={`
        flex flex-col justify-between z-0 p-5 md:p-10 relative text-white
        rounded-md overflow-hidden aspect-video w-full shadow-lg`}>
      <div className="absolute inset-0 z-[-10]">
        <div className="relative flex items-center w-full h-full justify-center">
          <img alt={podcast?.node?.coverPhoto?.description ?? ""}
            className="self-end w-full min-h-full object-cover"
            src={podcast?.node?.coverPhoto?.url ?? "/images/listening-geo-tech.svg"} />
          <div className={` backdrop-blur-sm bg-gradient-to-t from-black/90
              ${ podcast?.node?.coverPhoto ? "to-black/10" : "to-black/50"} absolute inset-0`} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-2xl md:text-5xl">{ podcast?.node?.title }</h1>
        <p className="font-semibold text-lg line-clamp-2">{podcast?.node?.description}</p>
        <div>
          <p className="flex bg-white/50 w-fit text-white/70 p-1 rounded-2xl px-4 items-center gap-1">
            <span className="flex items-center text-black/80">
                <BsPlayFill size={25} />
            </span>{node?.listens} {node && node.listens > 1 ? "listens": "listen"}
          </p>
        </div>
      </div>
      <div className="py-2 md:py-5">
        <UIButton variant="White" onClick={handlePlay} onKeyDown={handlePlay} >Listen now</UIButton>
      </div>
    </article>
  )
};

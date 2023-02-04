/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Maybe, PodcastTypeEdge } from "@gql/codegen/graphql";
import { BsSoundwave } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { Button } from "@components/common";
import { BiAlbum } from "react-icons/bi";
import { randomColor } from "@utils/common";
import { PodcastColorType } from "@constants/podcastColors";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectAudioPlayer, setPlayer } from "@store/slices";

interface MidPodcastCardProps {
  podcast: Maybe<PodcastTypeEdge>;
}

export default function MidPodcastCard(props: MidPodcastCardProps){
  const { podcast } = props;
  const [podcastHost, setPodcastHost] = React.useState<string>();
  const [color, setColor] = React.useState<PodcastColorType>();
  const [isPlaying, setIsPlaying] = React.useState(false)
  const player = useAppSelector(selectAudioPlayer);
  const dispatch = useAppDispatch();

  React.useEffect(function(){
    setColor(randomColor());
  }, []);

  React.useEffect(() => {
    if (podcast?.node?.hosts && podcast.node.hosts.length > 0) {
      for (let host of podcast.node.hosts) {
        if (host?.user?.fullName) {
          setPodcastHost(host.user.fullName)
          break
        }
      }
    }
  }, [podcast])

  React.useEffect(function(){
    setIsPlaying(player.podcast?.podcastId === podcast?.node?.podcastId)
  },[player, podcast])

  const handlePlay = React.useCallback(() => {
    dispatch(setPlayer({ 
      ...player,
      isPlaying: true,
      color,
      podcast: podcast?.node,
      playerVissible: true
    }))
  },[podcast, color, dispatch, player])

  return (
    <article className={`bg-gradient-to-r ${color?.to} ${color?.from} flex gap-3 p-2 w-full max-w-[40rem] rounded-2xl min-h-[10rem]`}>
      <div className="w-[10rem] flex rounded-2xl overflow-hidden flex-1 min-h-full">
        {podcast?.node?.coverPhoto ?
          (<img
            className={`w-full object-cover h-full`}
            src={podcast?.node?.coverPhoto ?? "/images/listening-geo-tech.svg"}
            alt={`${podcast?.node?.title} cover photo`} />)
        : <span className="w-40 bg-black/40 text-white h-full flex items-center justify-center"><BiAlbum size={100}/></span>
        }
      </div>
      <div className="flex-1 flex flex-col justify-between w-full">
        <div className="w-full flex-1">
          <h3 className="font-bold max-w-[10rem] line-clamp-2 text-lg">{podcast?.node?.title}</h3>
          {podcastHost && (
            <div className="flex gap-1 items-end text-sm text-black/70">
              <small>with</small>
              <span className="flex whitespace-nowrap font-semibold">{podcastHost}</span>
            </div>
          )}
        </div>
        <hr />
        <div className="flex justify-end items-end p-1 flex-1">
          <Button
            onClick={handlePlay}
            disabled={isPlaying}
            type="button"
            className={`
              disabled:text-gray-300 disabled:bg-gray-600/20
              flex items-center gap-1
              bg-black/10 pr-6 font-semibold
              transition-all hover:bg-black/20 active:bg-black/20
              h-fit p-0.5 px-1 rounded-2xl text-white`}>
            <PlayButton playing={isPlaying} />
            {!(isPlaying) ? "Play" : "listening"}
          </Button>
        </div>
      </div>
    </article>
  )
};

function PlayButton({playing}: {playing: boolean;}) {
  return (
      <span className={`flex items-center justify-center bg-black/20 px-0.5 rounded-full aspect-square`}>
        {!(playing) ? <BsPlayFill />
        : <BsSoundwave />}
      </span>
  )
}

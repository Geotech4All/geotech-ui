/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Maybe, PodcastTypeEdge } from "@gql/codegen/graphql";
import { BsSoundwave } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";
import { UIButton } from "@components/common";
import { BiAlbum } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectAudioPlayer, setPlayer } from "@store/slices";

interface MidPodcastCardProps {
  podcast: Maybe<PodcastTypeEdge>;
}

export default function MidPodcastCard(props: MidPodcastCardProps){
  const { podcast } = props;
  const [podcastHost, setPodcastHost] = React.useState<string>();
  const [isPlaying, setIsPlaying] = React.useState(false)
  const player = useAppSelector(selectAudioPlayer);
  const dispatch = useAppDispatch();

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
      podcast: podcast?.node,
      playerVissible: true
    }))
  },[podcast, dispatch, player])

  return (
    <article className={`
        bg-gradient-to-t to-black/40 from-black/90 flex gap-3 p-2
        max-h-44 h-screen w-full rounded-md`}>
      <div className="flex rounded text-white overflow-hidden flex-1 min-h-full">
        {podcast?.node?.coverPhoto ? (
            <img className={`w-full object-cover h-full`}
                src={podcast?.node?.coverPhoto.url ?? "/images/listening-geo-tech.svg"}
                alt={podcast.node.coverPhoto.description ?? ""} />
        ): (
            <span className={
                `w-40 bg-black/40 h-full flex items-center justify-center`}>
                <BiAlbum size={100}/>
            </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between w-full">
        <div className="w-full flex-1 flex flex-col justify-between text-white">
          <h3 className="font-bold max-w-[10rem] line-clamp-2 text-lg">{podcast?.node?.title}</h3>
          {podcastHost && (
            <div className="flex gap-1 items-end text-sm">
              <small>with</small>
              <span className="flex whitespace-nowrap font-semibold">{podcastHost}</span>
            </div>
          )}
        </div>
        <hr />
        <div className="flex justify-end items-end p-1 flex-1">
          <UIButton variant="White" className="flex items-center gap-3" onClick={handlePlay} disabled={isPlaying} type="button" >
            <PlayButton playing={isPlaying} /> {!(isPlaying) ? "Play" : "listening"}
          </UIButton>
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

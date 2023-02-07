import React from "react";
import { useAppSelector } from "@store/hooks";
import { selectAudioPlayer } from "@store/slices";
import { PlayerBackground, PlayerControls, PlayingPodcastDetails } from "@components/common";
import { useIncreasePodcastListens } from "@gql/requests/mutations/hooks";

interface AudioPlayerProps {
  width?: number;
};

export default function AudioPlayer(props: AudioPlayerProps){
  const player = useAppSelector(selectAudioPlayer);
  const [increaseListens] = useIncreasePodcastListens({podcastId: player.podcast?.podcastId ?? ""})

  React.useEffect(() => {
    increaseListens({
      variables: { podcastId: player.podcast?.podcastId ?? "" }
    });
  }, [increaseListens, player?.podcast?.podcastId]);

  return (
    <div
      style={{ width: props.width }}
      className={`
        px-1 md:px-3
        p-1
        fixed bottom-0 w-screen`}>
      <div className="relative overflow-hidden rounded-3xl z-0 flex flex-col w-full">
        <PlayerBackground />
        <PlayingPodcastDetails />
        <PlayerControls />
      </div>
    </div>
  );
};

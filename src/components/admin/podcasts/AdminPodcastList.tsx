import React from "react";
import type { PotentialPodcasts } from "@store/slices";
import { PodcastCard } from "@components/admin";
import { useIsLargeScreen } from "@components/common/hooks";

interface AdminPodcastListProps {
  podcasts: PotentialPodcasts
}
export default function AdminPodcastList(props: AdminPodcastListProps){
  const { podcasts } = props;
  const isLargeScreen = useIsLargeScreen();
  const pod = isLargeScreen ? podcasts?.edges.slice(0, 11) : podcasts?.edges.slice(0, 6)
  return (
    <div className="flex p-1 px-1 flex-col w-[95%]">
      <h2 className="font-bold text-xl">Trending Podcasts</h2>
      <ul className="flex flex-col rounded-2xl md:flex-row gap-4 bg-black/10 overflow-x-auto p-1.5">
        {pod?.map(podcast => (
          <PodcastCard key={podcast?.node?.podcastId} podcast={podcast} />
        ))}
      </ul>
    </div>
  )
}

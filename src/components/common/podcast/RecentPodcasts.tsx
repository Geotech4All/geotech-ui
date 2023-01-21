import { useAllPodcasts } from "@gql/requests/queries/hooks";
import React from "react";
import { MidPodcastCard, NothingFound, SLoadingRing } from "@components/common"

export default function RecentPodcast(){
  const {loading, error, data} = useAllPodcasts({ first: 5 })

  if (loading) return (
    <div className="flex items-center justify-center"><SLoadingRing /></div>
  )
  if (error) console.log(error)
  return (
    <div>
      {data?.podcasts && data.podcasts.edges.length > 0 ?
      (<ul className="flex gap-3">
        {data?.podcasts?.edges.map(podcast => (<MidPodcastCard key={podcast?.node?.podcastId} podcast={podcast} />))}
      </ul>)
      : <div className="flex items-center justify-center w-full"><NothingFound name="Podcast"/></div>}
    </div>
  );
};

import { useAllPodcasts } from "@gql/requests/queries/hooks";
import React from "react";
import { MidPodcastCard, NothingFound, SLoadingRing } from "@components/common"


export default function RecentPodcasts(){
  const {loading, error, data} = useAllPodcasts({ first: 5 })

  if (loading) return (
    <div className="flex items-center justify-center"><SLoadingRing /></div>
  )
  if (error) console.log(error)
  return (
    <div>
      {data?.podcasts && data.podcasts.edges.length > 0 ?
      (<div className="flex flex-col gap-1 p-2">
        <h3 className="font-bold text-sm">New podcasts</h3>
        <ul
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full overflow-auto`}>
          {data?.podcasts?.edges.map(podcast => (<MidPodcastCard key={podcast?.node?.podcastId} podcast={podcast} />))}
        </ul>
      </div>)
      :(
        <div className="flex items-center h-full justify-center w-full">
          <NothingFound caption="Sorry no podcasts yet"/>
        </div>
      )}
    </div>
  );
};

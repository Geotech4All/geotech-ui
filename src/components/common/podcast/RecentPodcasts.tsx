import { useAllPodcasts } from "@gql/requests/queries/hooks";
import React from "react";
import { List, MidPodcastCard, NothingFound, SLoadingRing } from "@components/common"

interface RecentPodcastProps{
    err?: boolean;
}

/** RecentPodcast list
 * @param err {boolean} should the component render a NothingFound in the case of no podcasts
 **/
export default function RecentPodcasts(props: RecentPodcastProps){
  const {loading, error, data} = useAllPodcasts({ first: 5 })
  const edges = data?.podcasts?.edges;

  if (loading) return (
    <div className="flex items-center justify-center"><SLoadingRing /></div>
  )
  if (error) console.log(error)
  return (
    <div>
      {edges && edges.length > 0 ?(
        <List>
            {edges.map(podcast => (
                <MidPodcastCard podcast={podcast} key={podcast?.node?.podcastId} />)
            )}
        </List>
    ):( props.err && <NothingFound caption="Sorry no podcasts yet"/>)}
    </div>
  );
};

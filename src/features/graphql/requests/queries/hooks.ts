import { useQuery } from "@apollo/client";
import { Queries } from "@gql/requests";
import { Maybe, PodcastTypeConnection } from "@gql/codegen/graphql";


export function useMostListenedPodcasts(){
  return useQuery<{ podcasts: Maybe<PodcastTypeConnection>}>(Queries.MOST_LISTENED_PODCASTS)
}

import { useQuery } from "@apollo/client";
import { Queries } from "@gql/requests";
import type {
  Maybe,
  PodcastTypeConnection,
  GuestTypeConnection,
  UserType, StaffType,
  QueryMostListenedToPodcastsArgs,
  QueryAllPodcastsArgs,
  QueryAllPostsArgs,
  PostTypeConnection,
  QueryPopularPostsArgs,
  PostType,
  QueryGetPostByIdArgs,
  QueryGetPodcastByIdArgs,
  PodcastType,
  UserNode
} from "@gql/codegen/graphql";

export function useCurrentlyLoggenInUser() {
  return useQuery<
    { user: Maybe<UserNode>}>(Queries.GET_CURRENT_USER)
}

export function useDetailedPodcast(variables?: QueryGetPodcastByIdArgs) {
  return useQuery<
    { podcast: Maybe<PodcastType>},
    QueryGetPodcastByIdArgs>(Queries.GET_PODCAST_BY_ID, { variables })
}

export function useDetailedPost(variables?: QueryGetPostByIdArgs) {
  return useQuery<
    { post: Maybe<PostType>},
    QueryGetPostByIdArgs
  >(Queries.GET_POST_BY_ID, { variables })
}

export function usePopularPosts(variables?: QueryPopularPostsArgs) {
  return useQuery<
    { posts: Maybe<PostTypeConnection>},
    QueryPopularPostsArgs>(Queries.POPULAR_POSTS, { variables })
}

export function useAllPosts(variables?: QueryAllPostsArgs) {
  return useQuery<
    { posts: Maybe<PostTypeConnection> },
    QueryAllPostsArgs>(Queries.ALL_POSTS, {
      variables, fetchPolicy: "no-cache"
  })
}

export function useAllPodcasts(variables?: QueryAllPodcastsArgs) {
  return useQuery<
    {podcasts: Maybe<PodcastTypeConnection>},
    QueryAllPodcastsArgs>(Queries.ALL_PODCASTS, {
      variables
  })
}

export function useTrendingPodcasts(variables?: QueryMostListenedToPodcastsArgs){
  return useQuery<
    { podcasts: Maybe<PodcastTypeConnection>},
    QueryMostListenedToPodcastsArgs
    >(Queries.MOST_LISTENED_PODCASTS, {
      variables
    })
};

export function useRecentHosts(){
  return useQuery<{ hosts: Maybe<Array<Maybe<UserType>>>}>(Queries.RECENT_HOSTS)
};

export function useStaffList(){
  return useQuery<{ staff: Maybe<Array<StaffType>> }>(Queries.STAFF_LIST)
};

export function usePrevousGuests(){
  return useQuery<{ guests: Maybe<GuestTypeConnection>}>(Queries.PREVIOUS_GUESTS)
}

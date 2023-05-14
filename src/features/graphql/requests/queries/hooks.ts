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
  UserNode,
  QueryStaffDetailArgs,
  QueryOpportunitiesArgs,
  OpportunityTypeConnection,
  QueryTagsArgs,
  TagTypeConnection,
  QueryOpportunityArgs,
  OpportunityType,
  QueryImagesArgs,
  ImageTypeConnection,
  QueryUserArgs,
  QueryFilesArgs,
  FileTypeConnection
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

export function useStaffDetail(variables?: QueryStaffDetailArgs){
  return useQuery<
    { staff: Maybe<StaffType>},
    QueryStaffDetailArgs>(Queries.STAFF_DETAIL, {
      variables
    })
}

export function usePrevousGuests(){
  return useQuery<{ guests: Maybe<GuestTypeConnection>}>(Queries.PREVIOUS_GUESTS)
}

export function useAllOpportunities(variables?: QueryOpportunitiesArgs) {
  return useQuery<
    {opportunities: Maybe<OpportunityTypeConnection>},
    QueryOpportunitiesArgs
  >(Queries.ALL_OPPORTUNITIES, { variables })
}

export function useAllTags(variables?: QueryTagsArgs) {
  return useQuery<
    { tags: Maybe<TagTypeConnection>},
    QueryTagsArgs
  >(Queries.ALL_TAGS, { variables })
}

export function useOpportunity(variables?: QueryOpportunityArgs) {
  return useQuery <
    { opportunity: Maybe<OpportunityType> },
    QueryOpportunityArgs
  >(Queries.OPPORTUNITY, { variables })
}

export function useImages(variables?: QueryImagesArgs) {
    return useQuery<
    { images: ImageTypeConnection },
    QueryImagesArgs>(Queries.IMAGES, { variables })
}

export function useUser(variables?: QueryUserArgs) {
    return useQuery<
    { user: Maybe<UserType> },
    QueryUserArgs>(Queries.USER, { variables })
}

export function useFiles(variables?: QueryFilesArgs) {
    return useQuery<
    { files: FileTypeConnection },
    QueryFilesArgs>(Queries.FILES, { variables })
}

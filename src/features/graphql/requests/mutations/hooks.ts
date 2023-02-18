import { useMutation } from "@apollo/client";
import {
    IncreasePodcastListens,
  Maybe,
  MutationCreateUpdatePodcastArgs,
  MutationCreateUpdatePostArgs,
  MutationDeletePostArgs,
  MutationIncreasePodcastListensArgs,
  MutationIncreasePostViewCountArgs,
  PodcastCreateUpdateMutation,
  PostCreateUpdateMutation, 
  PostDeleteMutation, 
  PostViewsIncreaseMutation} from "@gql/codegen/graphql";
import {
  CREATE_UPDATE_PODCAST,
  CREATE_UPDATE_POST,
  DELETE_POST,
  INCREASE_PODCAST_LISTENS,
  INCREASE_POST_VIEW_COUNT } from "@gql/requests/mutations";

export const useCreateUpdatePodcast = () => {
  return useMutation<
    Maybe<PodcastCreateUpdateMutation>,
    MutationCreateUpdatePodcastArgs
  >(CREATE_UPDATE_PODCAST)
};

export const useCreateUpdatePost = () => {
  return useMutation<
  { post: Maybe<PostCreateUpdateMutation> },
    MutationCreateUpdatePostArgs
  >(CREATE_UPDATE_POST)
}

export const useDeletePost = (variables?: MutationDeletePostArgs) => {
  return useMutation<
  { post: Maybe<PostDeleteMutation> },
    MutationDeletePostArgs
  >(DELETE_POST, { variables })
}

export const useIncreasePostViewCount = (variables?: MutationIncreasePostViewCountArgs) => {
  return useMutation<
  { post: Maybe<PostViewsIncreaseMutation>},
    MutationIncreasePostViewCountArgs
  >(INCREASE_POST_VIEW_COUNT, { variables })
}

export const useIncreasePodcastListens = (variables?: MutationIncreasePodcastListensArgs) => {
  return useMutation<
  { podcast: Maybe<IncreasePodcastListens>},
    MutationIncreasePodcastListensArgs
  >(INCREASE_PODCAST_LISTENS, { variables })
}

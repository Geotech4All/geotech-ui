import { useMutation } from "@apollo/client";
import {
  Maybe,
  MutationCreateUpdatePodcastArgs,
  MutationCreateUpdatePostArgs,
  PodcastCreateUpdateMutation,
  PostCreateUpdateMutation } from "@gql/codegen/graphql";
import { CREATE_UPDATE_PODCAST, CREATE_UPDATE_POST } from "@gql/requests/mutations";

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

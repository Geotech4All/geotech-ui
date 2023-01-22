import { useMutation } from "@apollo/client";
import {
  Maybe,
  MutationCreateUpdatePodcastArgs,
  MutationCreateUpdatePostArgs,
  PodcastCreateUpdateMutation,
  PostCreateUpdateMutation } from "@gql/codegen/graphql";
import { CREATE_PODCAST, CREATE_POST } from "@gql/requests/mutations";

export const useCreatePodcast = () => {
  return useMutation<
    Maybe<PodcastCreateUpdateMutation>,
    MutationCreateUpdatePodcastArgs
  >(CREATE_PODCAST)
};

export const useCreatePost = () => {
  return useMutation<
  { post: Maybe<PostCreateUpdateMutation> },
    MutationCreateUpdatePostArgs
  >(CREATE_POST)
}

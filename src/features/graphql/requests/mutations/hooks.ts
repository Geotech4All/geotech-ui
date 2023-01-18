import { useMutation } from "@apollo/client";
import { Maybe, MutationCreateUpdatePodcastArgs, PodcastCreateUpdateMutation } from "@gql/codegen/graphql";
import { CREATE_PODCAST } from "@gql/requests/mutations";

export const useCreatePodcast = () => {
  return useMutation<
    Maybe<PodcastCreateUpdateMutation>,
    MutationCreateUpdatePodcastArgs
  >(CREATE_PODCAST)
};

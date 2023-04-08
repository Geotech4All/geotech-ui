import { useMutation } from "@apollo/client";
import {
  Maybe,
  IncreasePodcastListens,
  MutationCreateUpdatePodcastArgs,
  MutationCreateUpdatePostArgs,
  MutationDeletePostArgs,
  MutationIncreasePodcastListensArgs,
  MutationIncreasePostViewCountArgs,
  MutationUpdateProfileArgs,
  MutationUpdateStaffArgs,
  PodcastCreateUpdateMutation,
  PostCreateUpdateMutation, 
  PostDeleteMutation, 
  PostViewsIncreaseMutation,
  ProfileUpdateMutation,
  StaffUpdateMutation,
  MutationCreateStaffArgs,
  StaffCreateMutation,
  MutationCreateUpdateOpportunityArgs,
  OpportunityCreateUpdateMutation,
  MutationCreateUpdateTagArgs,
  CreateUpdateTagMutation} from "@gql/codegen/graphql";
import {
  CREATE_UPDATE_PODCAST,
  CREATE_UPDATE_POST,
  DELETE_POST,
  INCREASE_PODCAST_LISTENS,
  INCREASE_POST_VIEW_COUNT,
  UPDATE_PROFILE,
  UPDATE_STAFF
} from "@gql/requests/mutations";
import { CREATE_STAFF, CREATE_UPDATE_OPPORTUNITY, CREATE_UPDATE_TAG } from "./AdminMutations";

export const useUpdatePodcast = () => {
  return useMutation<
    { profile: Maybe<ProfileUpdateMutation>},
    MutationUpdateProfileArgs
  >(UPDATE_PROFILE)
};

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

export const useUpdateStaff = (variables?: MutationUpdateStaffArgs) => {
  return useMutation<
  { staff: Maybe<StaffUpdateMutation>},
    MutationUpdateStaffArgs
  >(UPDATE_STAFF, { variables })
}

export const useCreateStaff = (variables?: MutationCreateStaffArgs) => {
  return useMutation<
  { staff: Maybe<StaffCreateMutation>},
    MutationCreateStaffArgs
  >(CREATE_STAFF, { variables })
}

export const useCreateUpdateOpportunity = (variables?: MutationCreateUpdateOpportunityArgs) => {
  return useMutation<
  { opportunity: Maybe<OpportunityCreateUpdateMutation>},
    MutationCreateUpdateOpportunityArgs
  >(CREATE_UPDATE_OPPORTUNITY, { variables })
}

export const useCreateUpdateTag = (variables?: MutationCreateUpdateTagArgs) => {
  return useMutation<
  { tag: Maybe<CreateUpdateTagMutation> },
  MutationCreateUpdateTagArgs
  >(CREATE_UPDATE_TAG, { variables })
}

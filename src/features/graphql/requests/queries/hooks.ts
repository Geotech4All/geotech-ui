import { useQuery } from "@apollo/client";
import { Queries } from "@gql/requests";
import type {
  Maybe,
  PodcastTypeConnection,
  GuestTypeConnection,
  UserType, StaffType } from "@gql/codegen/graphql";


export function useMostListenedPodcasts(){
  return useQuery<{ podcasts: Maybe<PodcastTypeConnection>}>(Queries.MOST_LISTENED_PODCASTS)
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe, PodcastTypeConnection } from "@gql/codegen/graphql";
import { RootState } from "@store/config";

export type PotentialPodcasts =  Maybe<PodcastTypeConnection>
const podcastListSlice = createSlice({
  name: "podcasts",
  initialState: {} as PotentialPodcasts,
  reducers: {
    setPodcasts: (_, action: PayloadAction<PotentialPodcasts>) => {
      const newState = action.payload;
      return newState;
    }
  }
})

export const { setPodcasts } = podcastListSlice.actions;
export default podcastListSlice.reducer;

export const selectPodcasts = (state: RootState) => state.podcasts;

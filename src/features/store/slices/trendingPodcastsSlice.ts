import { Maybe, PodcastTypeConnection } from "@gql/codegen/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

const trendingPodcastsSlice = createSlice({
  name: "trending",
  initialState: {} as Maybe<PodcastTypeConnection>,
  reducers: {
    setTrendingPodcasts: (_, action: PayloadAction<Maybe<PodcastTypeConnection>>) => {
      const newState = action.payload;
      return newState;
    }
  }
})

export const { setTrendingPodcasts } = trendingPodcastsSlice.actions;
export default trendingPodcastsSlice.reducer;

export const selectTrendingPodcasts = (state: RootState) => state.trendingPodcasts;

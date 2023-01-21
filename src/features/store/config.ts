import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "@store/slices/adminSlice";
import podcastListSlice from "@store/slices/podcastListSlice";
import recentHostsSlice from "@store/slices/recentHostsSlice";
import userSlice from "@store/slices/userSlice";
import staffListSlice from "@store/slices/staffListSlice";
import previousGuestsSlice from "@store/slices/previousGuestsSlice";
import trendingPodcastsSlice from "@store/slices/trendingPodcastsSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    podcasts: podcastListSlice,
    recentHosts: recentHostsSlice,
    user: userSlice,
    staffList: staffListSlice,
    previousGuests: previousGuestsSlice,
    trendingPodcasts: trendingPodcastsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

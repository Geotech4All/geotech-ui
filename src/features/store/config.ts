import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "@store/slices/adminSlice";
import podcastListSlice from "@store/slices/podcastListSlice";
import recentHostsSlice from "@store/slices/recentHostsSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    podcasts: podcastListSlice,
    recentHosts: recentHostsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

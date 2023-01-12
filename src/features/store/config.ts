import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "@store/slices/adminSlice";
import podcastListSlice from "@store/slices/podcastListSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    podcasts: podcastListSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

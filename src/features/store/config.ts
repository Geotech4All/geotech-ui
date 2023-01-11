import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "@store/slices/adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

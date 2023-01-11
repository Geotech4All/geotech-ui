import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";

export interface AdminState {
  sidebarOpen: boolean;
  sidebarWidth: number;
}

const initialState: AdminState = {
  sidebarOpen: false,
  sidebarWidth: 70
}

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, sidebarOpen: action.payload }
    },
    setSidebarWidth: (state, action: PayloadAction<number>) => {
      return { ...state, sidebarWidth: action.payload }
    }
  }
})

export const { setSidebarOpen, setSidebarWidth } = adminSlice.actions;
export default adminSlice.reducer;
export const selectAdmin = (state: RootState) => state.admin;

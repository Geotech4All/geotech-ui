import { setSidebarOpen, selectAdmin, setSidebarWidth }  from "@store/slices/adminSlice";
import { setPodcasts, selectPodcasts } from "@store/slices/podcastListSlice";
import type { AdminState } from "@store/slices/adminSlice";

export { 
  setSidebarOpen,
  selectAdmin,
  setSidebarWidth,
  setPodcasts,
  selectPodcasts
};
export type { AdminState };

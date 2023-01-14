import { setSidebarOpen, selectAdmin, setSidebarWidth }  from "@store/slices/adminSlice";
import { setPodcasts, selectPodcasts } from "@store/slices/podcastListSlice";
import { selectRecentHosts, setRecentHosts } from "@store/slices/recentHostsSlice";
import type { AdminState } from "@store/slices/adminSlice";
import type { PotentialPodcasts } from "@store/slices/podcastListSlice";
import type { PossibleHostsList } from "@store/slices/recentHostsSlice";

export { 
  setSidebarOpen,
  selectAdmin,
  setSidebarWidth,
  setPodcasts,
  selectPodcasts,
  selectRecentHosts,
  setRecentHosts
};
export type {
  AdminState,
  PotentialPodcasts,
  PossibleHostsList
};

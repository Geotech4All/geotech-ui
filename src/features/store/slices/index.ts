import { setSidebarOpen, selectAdmin, setSidebarWidth }  from "@store/slices/adminSlice";
import { setPodcasts, selectPodcasts } from "@store/slices/podcastListSlice";
import { selectRecentHosts, setRecentHosts } from "@store/slices/recentHostsSlice";
import { selectUser, setUser } from "@store/slices/userSlice";
import { selectStaffList, setStaffList } from "@store/slices/staffListSlice";
import { setPreviousGuests, selectPreviousGuests } from "@store/slices/previousGuestsSlice";
import { selectTrendingPodcasts, setTrendingPodcasts } from "@store/slices/trendingPodcastsSlice";
import { selectAudioPlayer, setPlayer, clearPlayer } from "@store/slices/audioPlayerSlice";
import type { AdminState } from "@store/slices/adminSlice";
import type { PotentialPodcasts } from "@store/slices/podcastListSlice";
import type { PossibleHostsList } from "@store/slices/recentHostsSlice";
import type { AudioPlayer } from "@store/slices/audioPlayerSlice";

export { 
  setUser,
  selectUser,
  setSidebarOpen,
  selectAdmin,
  setSidebarWidth,
  selectStaffList,
  setStaffList,
  setPodcasts,
  selectPodcasts,
  selectRecentHosts,
  setRecentHosts,
  setPreviousGuests,
  selectPreviousGuests,
  selectTrendingPodcasts,
  setTrendingPodcasts,
  selectAudioPlayer,
  setPlayer,
  clearPlayer
};
export type {
  AdminState,
  PotentialPodcasts,
  PossibleHostsList,
  AudioPlayer
};

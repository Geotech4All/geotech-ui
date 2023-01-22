import React from "react";
import { RecentPodcasts } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";

export default function Podcast(){
  return (
    <div>
      <TrendingPodcasts />
      <RecentPodcasts />
    </div>
  )
}

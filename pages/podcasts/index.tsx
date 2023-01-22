import React from "react";
import Head from "next/head";
import { RecentPodcasts } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";

export default function Podcast(){
  return (
    <>
    <Head>
      <title>Podcasts - Geotech</title>
    </Head>
    <div>
      <TrendingPodcasts isAdmin={false}/>
      <RecentPodcasts />
    </div>
    </>
  )
}

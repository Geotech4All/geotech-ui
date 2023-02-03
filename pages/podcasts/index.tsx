import React from "react";
import Head from "next/head";
import { AudioLayout, AudioPlayer, RecentPodcasts } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";
import { NextPageWithLayout } from "@pages/_app";
import { NavBarLayout } from "@components/frontFacing";

const Podcast: NextPageWithLayout = () => {
  return (
    <>
    <Head>
      <title>Podcasts - Geotech</title>
    </Head>
    <AudioLayout>
      <div className="flex flex-col gap-4">
        <TrendingPodcasts isAdmin={false}/>
        <RecentPodcasts />
        <AudioPlayer />
      </div>
    </AudioLayout>
    </>
  )
};

Podcast.getLayout = NavBarLayout;

export default Podcast;

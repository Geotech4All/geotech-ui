import React from "react";
import Head from "next/head";
import { AudioLayout, RecentPodcasts } from "@components/common";
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
      <div className="flex md:p-2 flex-col gap-4">
        <TrendingPodcasts isAdmin={false}/>
        <RecentPodcasts />
      </div>
    </AudioLayout>
    </>
  )
};

Podcast.getLayout = NavBarLayout;

export default Podcast;

import React from "react";
import Head from "next/head";
import { RecentPodcasts } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";
import { NextPageWithLayout } from "@pages/_app";
import { NavBarLayout } from "@components/frontFacing";

const Podcast: NextPageWithLayout = () => {
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
};

Podcast.getLayout = NavBarLayout;

export default Podcast;

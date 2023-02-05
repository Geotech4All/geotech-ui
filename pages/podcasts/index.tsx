import React from "react";
import Head from "next/head";
import { AudioLayout, GImage, PageLoadingRing, RecentPodcasts, SomethingWentWrong } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";
import { NextPageWithLayout } from "@pages/_app";
import { NavBarLayout } from "@components/frontFacing";
import { useAllPodcasts } from "@gql/requests/queries/hooks";

const Podcast: NextPageWithLayout = () => {
  const { loading, data, error } = useAllPodcasts({first:1})

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />
  if ((data?.podcasts?.edges.length && data?.podcasts?.edges.length < 1) || !data?.podcasts) return (
    <div className="flex justify-center flex-col w-full items-center">
      <GImage className="max-w-lg" src="/images/sorry.svg" alt="lady holding a sorry plack"/>
      <h1 className="text-xl text-gray-600">Sorry no podcasts yet</h1>
    </div>
  );

  return (
    <>
    <Head>
      <title>Podcasts - Geotech</title>
    </Head>
    <AudioLayout>
      <div className="flex md:p-2 flex-col gap-4">
        <TrendingPodcasts isAdmin={false}/>
        <RecentPodcasts isAdmin={false} />
      </div>
    </AudioLayout>
    </>
  )
};

Podcast.getLayout = NavBarLayout;

export default Podcast;

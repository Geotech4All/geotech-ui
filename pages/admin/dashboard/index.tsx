import React from "react";
import { NextPageWithLayout } from "pages/_app";
import { useAppDispatch } from "@store/hooks";
import { SidebarLayout } from "@components/admin";
import { usePopularPosts, useTrendingPodcasts } from "@gql/requests/queries/hooks";
import { setPodcasts } from "@store/slices"
import Head from "next/head";
import { PageLoadingRing, PostList, SomethingWentWrong } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";

const DashBoard: NextPageWithLayout = () => {
  const { loading, data, error } = useTrendingPodcasts()
  const { loading: pLoading, data: pData, error: pError } = usePopularPosts({first: 10})
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.podcasts) {
      dispatch(setPodcasts(data?.podcasts))
    }
  }, [data, dispatch])

  if (loading || pLoading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />
  if (pError) return <SomethingWentWrong error={pError} />
  
  return (
    <>
      <Head>
        <title>Geotech DashBoard</title>
      </Head>
      <main>
        <div className="flex flex-col gap-3">
            <TrendingPodcasts />
            <PostList title="Popular posts" posts={pData?.posts}/>
        </div>
      </main>
    </>
  )
};

DashBoard.getLayout = SidebarLayout;

export default DashBoard;

import React from "react";
import { NextPageWithLayout } from "pages/_app";
import { useAppDispatch } from "@store/hooks";
import { SidebarLayout } from "@components/admin";
import { useTrendingPodcasts } from "@gql/requests/queries/hooks";
import { setPodcasts } from "@store/slices"
import Head from "next/head";
import { PageLoadingRing, SomethingWentWrong } from "@components/common";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";

const DashBoard: NextPageWithLayout = () => {
  const {loading, data, error} = useTrendingPodcasts()
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.podcasts) {
      dispatch(setPodcasts(data?.podcasts))
    }
  }, [data, dispatch])

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />
  
  return (
    <>
      <Head>
        <title>Geotech DashBoard</title>
      </Head>
      <main>
        <div>
          <TrendingPodcasts isAdmin={true} />
        </div>
      </main>
    </>
  )
};

DashBoard.getLayout = SidebarLayout;

export default DashBoard;

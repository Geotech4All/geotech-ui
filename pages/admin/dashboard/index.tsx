import React from "react";
import { NextPageWithLayout } from "pages/_app";
import { useAppDispatch } from "@store/hooks";
import { TrendingPodcasts, SidebarLayout } from "@components/admin";
import { useMostListenedPodcasts } from "@gql/requests/queries/hooks";
import { setPodcasts } from "@store/slices"
import Head from "next/head";
import { SomethingWentWrong } from "@components/common";

const DashBoard: NextPageWithLayout = () => {
  const {loading, data, error} = useMostListenedPodcasts()
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.podcasts) {
      dispatch(setPodcasts(data?.podcasts))
    }
  }, [data, dispatch])

  if (loading) return <div>Loadding</div>
  if (error) return <SomethingWentWrong error={error} />
  
  return (
    <>
      <Head>
        <title>Geotech DashBoard</title>
      </Head>
      <main>
        <TrendingPodcasts />
      </main>
    </>
  )
};

DashBoard.getLayout = SidebarLayout;

export default DashBoard;

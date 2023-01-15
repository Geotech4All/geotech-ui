import { NewPodcastForm, SidebarLayout } from "@components/admin";
import { SLoadingRing, SomethingWentWrong } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { NextPageWithLayout } from "pages/_app";
import { useRecentHosts, useStaffList } from "@gql/requests/queries/hooks";
import { setRecentHosts, setStaffList } from "@store/slices";
import React from "react";
import Head from "next/head";

const Podcasts: NextPageWithLayout = () => {
  const { loading, error, data } = useRecentHosts();
  const { loading: sLoading, error: sError, data: sData } = useStaffList();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.hosts) {
      dispatch(setRecentHosts(data?.hosts))
    }
    if (sData?.staff) {
      dispatch(setStaffList(sData.staff))   
    }
  }, [data, dispatch, sData])

  if (loading || sLoading) return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <SLoadingRing />
    </div>
  )
  if (error) return <SomethingWentWrong error={error} />
  if (sError) return <SomethingWentWrong error={sError} />

  return (
    <>
      <Head>
        <title>GeoTech Podcasts</title>
      </Head>
      <NewPodcastForm />
    </>
  );
};

Podcasts.getLayout = SidebarLayout;

export default Podcasts;

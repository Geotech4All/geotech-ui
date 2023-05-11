import { ManagePodcasts, SidebarLayout } from "@components/admin";
import { ButtonLink, RecentPodcasts, SLoadingRing, SomethingWentWrong } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { NextPageWithLayout } from "pages/_app";
import { usePrevousGuests, useRecentHosts, useStaffList } from "@gql/requests/queries/hooks";
import { setPreviousGuests, setRecentHosts, setStaffList } from "@store/slices";
import React from "react";
import Head from "next/head";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";
import Link from "next/link";

const Podcasts: NextPageWithLayout = () => {
  const { loading, error, data } = useRecentHosts();
  const { loading: sLoading, error: sError, data: sData } = useStaffList();
  const { loading: gLoading, error: gError, data: gData } = usePrevousGuests()
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.hosts) {
      dispatch(setRecentHosts(data?.hosts));
    };
    if (sData?.staff) {
      dispatch(setStaffList(sData.staff));
    };
    if (gData?.guests) {
      dispatch(setPreviousGuests(gData.guests));
    };
  }, [data, dispatch, sData, gData])

  if (loading || sLoading || gLoading) return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <SLoadingRing />
    </div>
  )
  if (error) return <SomethingWentWrong error={error} />
  if (sError) return <SomethingWentWrong error={sError} />
  if (gError) return <SomethingWentWrong error={gError} />

  return (
    <>
      <Head>
        <title>GeoTech Podcasts</title>
      </Head>
      <div className="relative flex flex-col gap-3 p-2">
          <TrendingPodcasts />
          <RecentPodcasts />
          <ManagePodcasts />
          <ButtonLink href="/admin/podcasts/new">+ New Podcast</ButtonLink>
      </div>
    </>
  );
};

Podcasts.getLayout = SidebarLayout;

export default Podcasts;

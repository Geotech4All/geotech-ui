import { NewPodcastForm, SidebarLayout } from "@components/admin";
import { Button, MModal, RecentPodcasts, SLoadingRing, SomethingWentWrong } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { NextPageWithLayout } from "pages/_app";
import { usePrevousGuests, useRecentHosts, useStaffList } from "@gql/requests/queries/hooks";
import { setPreviousGuests, setRecentHosts, setStaffList, setTrendingPodcasts } from "@store/slices";
import React from "react";
import Head from "next/head";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";

const Podcasts: NextPageWithLayout = () => {
  const { loading, error, data } = useRecentHosts();
  const { loading: sLoading, error: sError, data: sData } = useStaffList();
  const { loading: gLoading, error: gError, data: gData } = usePrevousGuests()
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
      <div className="relative">
        <TrendingPodcasts />
        <RecentPodcasts />
        <Button
          onClick={handleOpen}
          className={`
            absolute top-4 right-4
            bg-red-400 text-white p-2
            rounded-lg hover:bg-red-500
            transition-all font-semibold
            active:bg-red-500
            `}>+ New Podcast</Button>
        <MModal open={open} onClose={handleClose}>
          <NewPodcastForm onCreated={handleClose}/>
        </MModal>
      </div>
    </>
  );
};

Podcasts.getLayout = SidebarLayout;

export default Podcasts;

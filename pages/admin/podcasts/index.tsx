import { NewPodcastForm, SidebarLayout } from "@components/admin";
import { Button, MModal, SLoadingRing, SomethingWentWrong } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { NextPageWithLayout } from "pages/_app";
import { usePrevousGuests, useRecentHosts, useStaffList } from "@gql/requests/queries/hooks";
import { setPreviousGuests, setRecentHosts, setStaffList, setTrendingPodcasts } from "@store/slices";
import { useTrendingPodcasts } from "@gql/requests/queries/hooks";
import React from "react";
import Head from "next/head";
import TrendingPodcasts from "@components/common/podcast/TrendingPodcasts";

const Podcasts: NextPageWithLayout = () => {
  const { loading, error, data } = useRecentHosts();
  const { loading: sLoading, error: sError, data: sData } = useStaffList();
  const { loading: gLoading, error: gError, data: gData } = usePrevousGuests()
  const { loading: tLoading, error: tError, data: tData } = useTrendingPodcasts({ first: 5 })
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
    if (tData?.podcasts) {
      dispatch(setTrendingPodcasts(tData.podcasts));
    }
  }, [data, dispatch, sData, gData, tData])

  if (loading || sLoading || gLoading || tLoading) return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <SLoadingRing />
    </div>
  )
  if (error) return <SomethingWentWrong error={error} />
  if (sError) return <SomethingWentWrong error={sError} />
  if (gError) return <SomethingWentWrong error={gError} />
  if (tError) return <SomethingWentWrong error={tError} />

  return (
    <>
      <Head>
        <title>GeoTech Podcasts</title>
      </Head>
      <div>
        <TrendingPodcasts />
        <Button
          onClick={handleOpen}
          className={`
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

import { NewPodcastForm, SidebarLayout } from "@components/admin";
import { SLoadingRing, SomethingWentWrong } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { NextPageWithLayout } from "pages/_app";
import { useRecentHosts, useStaffList } from "@gql/requests/queries/hooks";
import { setRecentHosts } from "@store/slices";
import React from "react";

const Podcasts: NextPageWithLayout = () => {
  const { loading, error, data } = useRecentHosts();
  const { loading: sLoading, error: sError, data: sData } = useStaffList();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.hosts) {
      dispatch(setRecentHosts(data?.hosts))
    }
  }, [data, dispatch])

  if (loading || sLoading) return (
    <div className="flex w-full items-center justify-center">
      <SLoadingRing />
    </div>
  )
  if (error) return <SomethingWentWrong error={error} />
  if (sError) return <SomethingWentWrong error={sError} />

  return (
    <NewPodcastForm />
  );
};

Podcasts.getLayout = SidebarLayout;

export default Podcasts;

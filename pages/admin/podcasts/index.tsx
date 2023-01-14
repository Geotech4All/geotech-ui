import { NewPodcastForm, SidebarLayout } from "@components/admin";
import { SLoadingRing, SomethingWentWrong } from "@components/common";
import { useAppDispatch } from "@store/hooks";
import { NextPageWithLayout } from "pages/_app";
import { useRecentHosts } from "@gql/requests/queries/hooks";
import { setRecentHosts } from "@store/slices";
import React from "react";

const Podcasts: NextPageWithLayout = () => {
  const { loading, error, data } = useRecentHosts();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (data?.hosts) {
      dispatch(setRecentHosts(data?.hosts))
    }
  }, [data, dispatch])

  if (loading) return (
    <div className="flex w-full items-center justify-center">
      <SLoadingRing />
    </div>
  )
  if (error) return <SomethingWentWrong error={error} />

  return (
    <NewPodcastForm />
  );
};

Podcasts.getLayout = SidebarLayout;

export default Podcasts;

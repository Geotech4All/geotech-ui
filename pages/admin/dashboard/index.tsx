import React from "react";
import { NextPageWithLayout } from "pages/_app";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { MostListenedPodcast, SidebarLayout } from "@components/admin";
import { useMostListenedPodcasts } from "@gql/requests/queries/hooks";
import { setPodcasts, selectPodcasts } from "@store/slices"

const DashBoard: NextPageWithLayout = () => {
  const {loading, data, error} = useMostListenedPodcasts()
  const dispatch = useAppDispatch();
  const podcasts = useAppSelector(selectPodcasts);

  React.useEffect(() => {
    if (data?.podcasts) {
      dispatch(setPodcasts(data?.podcasts))
    }
  }, [data, dispatch])

  if (loading) return <div>Loadding</div>

  return (
    <div>
      <MostListenedPodcast />
    </div>
  )
};

DashBoard.getLayout = SidebarLayout;

export default DashBoard;

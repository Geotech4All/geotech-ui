import { CenterSLoadingRing, SomethingWentWrong } from "@components/common";
import { useAllPodcasts } from "@gql/requests/queries/hooks";
import React from "react";
import ManagePodcast from "./ManagePodcast";

export default function ManagePodcasts(){
  const { loading, data, error } = useAllPodcasts({ first: 10 });

  if (loading) return <CenterSLoadingRing />
  return (
    <div className={`
        bg-gray-100 p-3 rounded-3xl`}>
      <h3 className="p-2 font-semibold">Manage podcasts</h3>
      {error && <SomethingWentWrong error={error} />}
      <ul className="flex flex-col gap-1">
        {data?.podcasts?.edges.map(edge => <ManagePodcast key={edge?.node?.podcastId} podcast={edge?.node} />)}
      </ul>
    </div>
  )
};

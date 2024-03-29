import React from "react";
import { ManagePodcast } from "@components/admin";
import { useAllPodcasts } from "@gql/requests/queries/hooks";
import { Maybe, PodcastTypeEdge } from "@gql/codegen/graphql";
import { CenterSLoadingRing, GInput, SomethingWentWrong } from "@components/common";

export default function ManagePodcasts(){
  const [search, setSearch] = React.useState("");
  const [pods, setPods] = React.useState<Maybe<PodcastTypeEdge>[]>();
  const { loading, data, error, refetch } = useAllPodcasts({ first: 10, title_Icontains: search });

  React.useEffect(() => {
    if (!loading && !error) {
      setPods(data?.podcasts?.edges)
    }
  }, [data, error, loading])

  const updateSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
    refetch({ first: 10, title_Icontains: search })
  }

  return (
    <>
      <div className={`
          bg-gray-100 p-3 rounded-lg flex flex-col gap-3`}>
        <h3 className="p-2 md:text-lg text-black/60 font-semibold">Manage podcasts</h3>
        <GInput onChange={updateSearch} className="w-full rounded-3xl px-5 p-1" placeholder="Search podcast"/>
        {error && <SomethingWentWrong error={error} />}
        <ul className="flex flex-col gap-1">
          {pods?.map(edge => <ManagePodcast key={edge?.node?.podcastId} podcast={edge?.node} />)}
        </ul>
        {loading && <CenterSLoadingRing />}
      </div>
    </>
  )
};

import { PodcastForm, SidebarLayout } from "@components/admin";
import { PageLoadingRing, SomethingWentWrong } from "@components/common";
import { useDetailedPodcast } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";
import React from "react";

const EditPodcast: NextPageWithLayout = () => {
  const router = useRouter();
  const podcastId = router.query.slug?.toString().split("-").pop();
  const { loading, data, error } = useDetailedPodcast({ podcastId: podcastId ?? "" })

  React.useEffect(() => {
    console.log(data)
  }, [data])

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />
  return (
    <div>
      <PodcastForm onCreated={() => router.push("/admin/podcasts")} podcast={data?.podcast} edit />
    </div>
  )
}

EditPodcast.getLayout = SidebarLayout;

export default EditPodcast;

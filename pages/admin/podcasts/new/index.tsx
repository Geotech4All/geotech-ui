import React from "react";
import { PodcastForm, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";

const NewPodcast: NextPageWithLayout = () => {
  const router = useRouter();

  function handleRedirect(){
    router.push("/admin/podcasts")
  };

  return (
    <div>
      <PodcastForm onCreated={handleRedirect}/>
    </div>
  );
};

NewPodcast.getLayout = SidebarLayout;

export default NewPodcast;

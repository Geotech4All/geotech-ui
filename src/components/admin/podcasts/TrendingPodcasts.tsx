import React from "react";
import { NothingFound } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectPodcasts } from "@store/slices";
import { AdminPodcastList } from "@components/admin";

export default function AdminTrendingPodcasts(){
  const podcasts = useAppSelector(selectPodcasts);
  const hasPodcasts = podcasts && podcasts.edges && podcasts.edges.length > 0;
  return (
    <div className="flex items-center justify-center">
      {hasPodcasts ? <AdminPodcastList podcasts={podcasts} />
      :(
        <NothingFound
        url="#" name="Podcast"
        caption="Sorry! No podcasts found" />
      )}
    </div>
  );
};

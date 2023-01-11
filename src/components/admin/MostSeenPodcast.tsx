import { NothingFound } from "@components/common";
import React from "react";

export default function MostListenedPodcast(){
  return (
    <div className="flex items-center justify-center">
      <NothingFound url="#" name="Podcast" caption="Sorry! No podcasts found" />
    </div>
  );
};

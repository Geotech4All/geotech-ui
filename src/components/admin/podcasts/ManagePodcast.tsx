import { GImage } from "@components/common";
import { Maybe, PodcastType } from "@gql/codegen/graphql";
import Link from "next/link";
import React from "react";

interface ManagePodcastProps {
  podcast: Maybe<PodcastType>;
};

export default function ManagePodcast(props: ManagePodcastProps) {
  const { podcast } = props;
  const slug = podcast?.title.toLowerCase().split(" ").join("-");
  return (
    <div className="group">
      {podcast?.coverPhoto && <GImage src={podcast?.coverPhoto} alt={`${podcast.title} cover photo`} />}
      <h4>{podcast?.title}</h4>
      <div>
        <Link href={`/podcasts/edit/${slug}-${podcast?.podcastId}`}> Edit</Link>
      </div>
    </div>
  )
};

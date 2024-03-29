import React from "react";
import Link from "next/link";
import { GImage, Hideable } from "@components/common";
import { TbEdit } from "react-icons/tb";
import { Maybe, PodcastType } from "@gql/codegen/graphql";

interface ManagePodcastProps {
  podcast?: Maybe<PodcastType>;
};

export default function ManagePodcast(props: ManagePodcastProps) {
  const { podcast } = props;
  const slug = podcast?.title.toLowerCase().split(" ").join("-");
  return (
    <div className={`
      group flex items-center justify-between w-full px-2 rounded-lg p-1
      hover:bg-white transition-all hover:shadow
    `}>
      <div className="flex items-center gap-4">
        {podcast?.coverPhoto && (
          <GImage className="max-w-[2rem] rounded aspect-square overflow-hidden"
            src={podcast.coverPhoto.url ?? "/images/listening-geo-tech.svg"} alt={`${podcast.title} cover photo`} />
        )}
        <h4 className="group-hover:text-black/40 transition-all line-clamp-1">{podcast?.title}</h4>
      </div>
      <div>
        <Hideable>
          <Link
            className={`
              hover:bg-blue-200 active:bg-blue-200 transition-all
              flex gap-1 items-center border border-blue-500/70 p-0.5 px-2 rounded-md text-blue-700 bg-blue-50`}
            href={`/admin/podcasts/edit/${slug}-${podcast?.podcastId}`}><TbEdit /> Edit</Link>
        </Hideable>
      </div>
    </div>
  )
};

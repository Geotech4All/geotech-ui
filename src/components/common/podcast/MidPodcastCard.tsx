/* eslint-disable @next/next/no-img-element */
import { Maybe, PodcastTypeEdge } from "@gql/codegen/graphql";
import React from "react";
import { BiAlbum } from "react-icons/bi";

interface MidPodcastCardProps {
  podcast: Maybe<PodcastTypeEdge>;
}

export default function MidPodcastCard(props: MidPodcastCardProps){
  const { podcast } = props;

  return (
    <article className="bg-black/20 flex gap-3 p-2 rounded-2xl min-h-[10rem]">
      <div className="max-w-[10rem] rounded-2xl overflow-hidden min-h-full">
        {podcast?.node?.coverPhoto ?
          (<img
            className={`w-full object-cover h-full`}
            src={podcast?.node?.coverPhoto}
            alt={`${podcast?.node?.title} cover photo`} />)
        : <span className="w-40 bg-black/40 text-white h-full flex items-center justify-center"><BiAlbum size={100}/></span>
        }
      </div>
      <div>
        <div></div>
        <br />
        <div></div>
      </div>
    </article>
  )
};

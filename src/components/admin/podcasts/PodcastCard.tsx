import React from "react"
import { BiAlbum } from "react-icons/bi";
import type { PodcastTypeEdge, Maybe } from "@gql/codegen/graphql";
import { podcastColors, PodcastColorType } from "@constants/podcastColors";
type PotentialPodtact = Maybe<PodcastTypeEdge>
interface PodcastCardProps {
  podcast: PotentialPodtact;
}

function randomColor (): PodcastColorType{
  const index = Math.ceil(Math.random() * podcastColors.length -1)
  return podcastColors[index];
}

export default function PodcastCard(props: PodcastCardProps){
  const { podcast } = props;
  const [color, setColor] = React.useState<PodcastColorType>()
  React.useEffect(() => {
    setColor(randomColor());
  }, [])
  return (
    <article className={`${color?.bgColor} ${color?.textColor} relative flex flex-col justify-center items-center p-4 rounded-2xl`}>
      <span className="bg-black/50 w-7 absolute top-2 left-2 aspect-square flex items-center justify-center rounded-full">{podcast?.node?.listens}</span>
      <span><BiAlbum size={100} /></span>
      <div className="w-full">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {podcast?.node?.description}
        </p>
        <div>
          <h3 className="font-extrabold text-xl">{podcast?.node?.title}</h3>
        </div>
      </div>
    </article>
  );
};

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maybe, PodcastType, UserType } from "@gql/codegen/graphql";
import GImage from "../images/GImage";

interface PlayingPodcastDetailsProps {
  podcast?: Maybe<PodcastType>;
  showDetails: boolean;
};

export default function PlayingPodcastDetails(props: PlayingPodcastDetailsProps){
  const { podcast, showDetails } = props;
  const hosts = new Set<Maybe<UserType | undefined>>(podcast?.hosts?.map(host => host?.user));

  React.useEffect(() => {

  }, [podcast?.hosts])

  return (
    <AnimatePresence>
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0 , y: 0, transition: {duration: 0.2} }}
          key={Math.random()}
          className="p-3 bg-black/50 flex flex-col gap-1 text-white backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">{podcast?.title}</h2>
          <p className="line-clamp-3">{podcast?.description}</p>
          <div>
            <ul className="flex flex-wrap items-center gap-1">
              {Array.from(hosts).map(host => (
                <div
                  className="flex items-center gap-1 bg-black/60 p-1 rounded-3xl pr-3"
                  key={host?.id}>
                  <GImage
                    className="rounded-full overflow-hidden aspect-square w-[1.5rem]"
                    alt={host?.fullName ?? ""}
                    src={host?.profile?.image ?? "/images/hosting-geo-tech.svg"}/>
                  <small className="max-w-[5rem] whitespace-nowrap overflow-hidden text-ellipsis">{host?.fullName}</small>
                </div>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

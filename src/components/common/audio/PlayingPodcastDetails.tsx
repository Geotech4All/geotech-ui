import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { clearPlayer, selectAudioPlayer } from "@store/slices";
import { Maybe, UserType } from "@gql/codegen/graphql";
import { GImage, PlayerManageButtons, PodcastHostPill, Wrap } from "@components/common";

interface PlayingPodcastDetailsProps {
};

export default function PlayingPodcastDetails(props: PlayingPodcastDetailsProps){
  const [isExpanded, setIsExpanded] = React.useState(false);
  const podcast = useAppSelector(selectAudioPlayer).podcast;
  const hosts = new Set<Maybe<UserType | undefined>>(podcast?.hosts?.map(host => host?.user));
  const dispatch = useAppDispatch();

  React.useEffect(() => {

  }, [podcast?.hosts])

  function closePlayer(){
    dispatch(clearPlayer())
  }

  function toggleExpand(){
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    };
  }

  return (
    <>
      <PlayerManageButtons
        isExpanded={isExpanded}
        closePlayer={closePlayer}
        toggleExpand={toggleExpand}
      />
      <AnimatePresence>
        {isExpanded && (
          <motion.div  key={Math.random()}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, y: 100 }}
            exit={{ opacity: 0 , y: 0, transition: {duration: 0.2} }}
            className="p-3 bg-black/50 flex flex-col gap-1 text-white backdrop-blur">
            <h2 className="text-2xl font-semibold">{podcast?.title}</h2>
            <p className="line-clamp-3">{podcast?.description}</p>
            <Wrap>
                {Array.from(hosts).map(host => <PodcastHostPill key={host?.id} host={host} />)}
            </Wrap>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

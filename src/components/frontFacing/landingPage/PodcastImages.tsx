import React from "react";
import { motion } from 'framer-motion';
import { MyImage } from '@components/common';

export default function PodcastLandingPageImages(){
  return (
    <div className={`flex-1 z-0 flex items-center gap-3`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.2 }}
        >
        <MyImage
          priority={true}
          className={`rounded-t-full rounded-b-full overflow-hidden max-w-xs`}
          width={2893}
          height={4339}
          src="/images/laughing-podcast-guy.webp"
          alt="a dark dude lauging on a podcast"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.4 }}
        className='flex flex-col gap-3'>
        <MyImage
          priority={true}
          className={`rounded-t-full rounded-b-full overflow-hidden max-w-xs`}
          width={4000}
          height={6000}
          alt="a whithe guy on a podcast"
          src="/images/white-guy-on-podcast.webp"/>
        <MyImage 
          priority={true}
          className={`rounded-t-full rounded-b-full overflow-hidden max-w-xs`}
          width={3632}
          height={4540}
          alt="dark dude talking to a mic"
          src="/images/podcast-guy.webp"
          />
      </motion.div>
    </div>
  )
}

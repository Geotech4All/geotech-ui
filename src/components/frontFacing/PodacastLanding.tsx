import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import Link from 'next/link'
import { PodcastLandingPageImages } from "@components/frontFacing";

export default function PodcastLanding() {
  return (
    <div className={`relative p-5 sm:p-10 md:p-20`}>
      <div className={`flex flex-col gap-5 md:flex-row`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 flex flex-col gap-5 pt-7`}>
          <h2 className={`font-extrabold sm:text-7xl text-5xl xl:text-8xl`}>
            The best podcast for geo ethusiasts.</h2>
          <p
            className='text-lg sm:text-xl'>
            Discover the best and latest in the geo-tech community and from seasoned geo technologists</p>
          <Link
            className={`
              flex items-center gap-1 bg-black/70 text-white text-lg
              hover:bg-black active:bg-black transition-all hover:gap-2
              p-2 px-5 rounded-md w-fit`}
            href="/podcasts">Browse podcasts <span className="flex items-center gap-1"><RiArrowRightUpLine /></span></Link>
        </motion.div>
        <PodcastLandingPageImages />
      </div>
    </div>
  )
};

import React from "react";
import { CiEdit } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import { GImage, MiniPostCard } from "@components/common";
import { Maybe, PostType } from "@gql/codegen/graphql";
import Link from "next/link";

interface ManagePostProps {
  post?: Maybe<PostType>;
}

export default function ManagePost(props: ManagePostProps){
  const { post } = props;
  const [showHoverInfo, setShowHoverInfo] = React.useState(false)

  const handleHover = () => setShowHoverInfo(true)
  const handleHoverEnd = () => setShowHoverInfo(false)

  const slug = post?.title.toLowerCase().split(" ").join("-")

  return (
    <article
      onMouseOver={handleHover} onMouseLeave={handleHoverEnd}
      className={`
        relative flex items-center justify-between
        hover:bg-white hover:shadow-lg
        p-1 group transition-all rounded-2xl`}>
      {showHoverInfo && (
        <PostHoverInfo post={post} />
      )}
      <div className="flex items-center gap-4">
        <GImage
          className="max-w-[2.5rem] aspect-square rounded-full"
          src={post?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.title} cover photo`}/>
        <h3 className="group-hover:text-red-400 transition-all">{post?.title}</h3>
      </div>
      <div>
        <Link
          className={`
            flex items-center gap-1
            border border-blue-400
            p-0.5 px-2 rounded bg-blue-400/10 text-blue-900 hover:bg-blue-400/40 transition-all`}
          href={`/admin/blog/edit/${slug}-${post?.postId}`}><CiEdit />Edit</Link>
      </div>
    </article>
  )
}

function PostHoverInfo(props: ManagePostProps) {
  const { post } = props;
  return (
    <AnimatePresence>
      <motion.div
        className="absolute left-6 bottom-full bg-white"
        key={post?.postId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {post && <MiniPostCard post={post}/>}
      </motion.div>
    </AnimatePresence>
  );
}

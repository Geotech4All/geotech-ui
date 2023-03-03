import React from "react";
import { motion } from "framer-motion";
import { MidPostCard, MiniPostCard } from "@components/common";
import { Maybe, PostTypeConnection } from "@gql/codegen/graphql";
import Link from "next/link";

interface BlogLandingProps {
  posts: Maybe<PostTypeConnection>;
}

export default function BlogLanding(props: BlogLandingProps) {
  const { posts } = props;
  const otherPosts = posts?.edges.slice(1);
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const child = {
    hidden: { opacity: 0, x: 4 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <Link
        className={`hover:text-red-400 active:text-red-400 text-xl transition-all`}
        href="/blog">Our blog</Link>
      <motion.h3
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-montserrat font-bold mb-6 text-3xl md:text-5xl">Stories &amp; News</motion.h3>
      <div className={`flex flex-col gap-5 p-2 md:max-w-5xl items-center md:flex-row`}>
        {posts?.edges[0] && (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 5 }}>
            <MidPostCard className="max-w-md" post={posts?.edges[0].node} />
          </motion.div>
          )}
        <motion.ul
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
          variants={container}
          className="flex flex-col flex-1 gap-2 p-3">
          {otherPosts?.map((post, index) => (
            <motion.div
              variants={child}
              key={index}>
              {post?.node && <MiniPostCard post={post?.node} />}
            </motion.div>
          ))}
        </motion.ul>
      </div>
    </div>
  )
};


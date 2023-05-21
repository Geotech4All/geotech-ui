import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
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

    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <Link href="/blog"
                className={`
                  flex items-center gap-1 bg-black text-white text-lg
                  hover:bg-black/80 active:bg-black/80 transition-all hover:gap-2
                  p-2 px-5 rounded-md w-fit`} >
                Our blog <span className="flex items-center gap-1"><RiArrowRightUpLine /></span>
            </Link>
            <motion.h3
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-montserrat font-bold mb-6 text-3xl md:text-5xl">Stories &amp; News</motion.h3>
            <div className={`flex flex-col gap-5 p-2 md:max-w-5xl items-center md:flex-row`}>
                {posts?.edges[0] && (
                    <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 5 }}>
                        <MidPostCard bordered className="max-w-md" post={posts?.edges[0].node} />
                    </motion.div>
                )}
                <motion.ul
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                    className="flex flex-col flex-1 gap-2 h-full">
                    {otherPosts?.map((post, index) => (
                        <motion.div key={index}>
                            {post?.node && <MiniPostCard post={post?.node} />}
                        </motion.div>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
};


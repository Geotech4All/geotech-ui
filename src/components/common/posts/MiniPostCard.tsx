import { Maybe, PostTypeEdge } from "@gql/codegen/graphql";
import Link from "next/link";
import React from "react";
import GImage from "../images/GImage";
import PostAuthor from "./PostAuthor";

interface MiniPostCardPorps {
  post: Maybe<PostTypeEdge>;
  isAdmin?: boolean;
}

export default function MiniPostCard(props: MiniPostCardPorps) {
  const { post, isAdmin } = props;
  const slug = post?.node?.title.toLowerCase().split(" ").join("-")
  return (
    <Link
      href={`${isAdmin ? "/admin" : "" }/blog/${slug}-${post?.node?.postId}`}
      className="flex gap-3 group max-h-40 max-w-lg rounded-lg overflow-hidden">
      <GImage className="flex-[1]" src={post?.node?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.node?.title} cover photo`}/>
      <div className="flex-[1] flex text-black/80 flex-col justify-between">
        <h3
          className={`
            transition-all
            group-hover:text-red-400 group-active:text-red-400
            line-clamp-3 font-bold text-lg`}>{post?.node?.title}</h3>
        <PostAuthor post={post?.node} />
      </div>
    </Link>
  )
}

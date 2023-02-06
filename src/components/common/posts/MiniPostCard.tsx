import { Maybe, PostType } from "@gql/codegen/graphql";
import Link from "next/link";
import React from "react";
import GImage from "../images/GImage";
import PostAuthor from "./PostAuthor";
import PostReadLength from "./PostReadLength";

interface MiniPostCardPorps {
  post: Maybe<PostType>;
  isAdmin?: boolean;
}

export default function MiniPostCard(props: MiniPostCardPorps) {
  const { post, isAdmin } = props;
  const slug = post?.title.toLowerCase().split(" ").join("-")
  return (
    <Link
      href={`${isAdmin ? "/admin" : "" }/blog/${post?.postId}-${slug}`}
      className="flex gap-3 group hover:shadow active:shadow transition-all max-h-40 max-w-lg rounded-lg overflow-hidden">
      <GImage className="flex-[1] overflow-hidden" src={post?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.title} cover photo`}/>
      <div className="flex-[1] p-1 flex text-black/80 flex-col">
        <PostReadLength length={post?.readLength ?? 1}/>
        <div className="flex-1 flex flex-col justify-between">
          <h3
            className={`
              transition-all
              group-hover:text-red-400 group-active:text-red-400
              line-clamp-3 font-bold text-lg`}>{post?.title}</h3>
          <PostAuthor post={post} />
        </div>
      </div>
    </Link>
  )
}

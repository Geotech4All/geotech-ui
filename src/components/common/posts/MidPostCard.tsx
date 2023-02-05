import React from "react";
import { Maybe, PostType } from "@gql/codegen/graphql";
import { GImage, PostAuthor, PostReadLength } from "@components/common";
import Link from "next/link";

interface MidPostCardProps {
  post?: Maybe<PostType>;
  className?: string;
  bordered?: boolean;
  isAdmin?: boolean;
}

export default function MidPostCard(props: MidPostCardProps) {
  const { post, isAdmin, className, bordered } = props;
  const slug = post?.title.toLowerCase().split(" ").join("-")
  return (
    <Link
      href={`${isAdmin ? "/admin" : "" }/blog/${slug}-${post?.postId}`}
      className={`
        ${bordered && "border-2 border-black/50"}
        hover:border-red-400 transition-all active:border-red-400
        shadow-lg shadow-black/5 flex-1 group
        min-w-[20rem]
        justify-between  aspect-[1/1.1]
        flex flex-col gap-2 p-2 rounded-lg ${className}`}>
      <GImage
        className={`w-full flex-1 rounded-md shadow-lg`}
        src={post?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.title} cover photo`} />
      <div className="p-2 flex flex-1 flex-col gap-2 text-black/80 w-full">
        <PostReadLength length={post?.readLength ?? 0}/>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h3 className={`
              font-bold text-2xl
              group-hover:text-red-400 group-active:text-red-400
              transition-all`}>{post?.title}</h3>
            <p className="max-w-full text-sm line-clamp-2 flex flex-wrap">{post?.abstract}</p>
          </div>
          <PostAuthor post={post}/>
        </div>
      </div>
    </Link>
  );
};

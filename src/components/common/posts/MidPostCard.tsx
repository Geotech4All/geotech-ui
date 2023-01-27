import React from "react";
import { Maybe, PostTypeEdge } from "@gql/codegen/graphql";
import { GImage, PostAuthor } from "@components/common";
import Link from "next/link";

interface MidPostCardProps {
  post: Maybe<PostTypeEdge>;
  className?: string;
  bordered?: boolean;
  isAdmin?: boolean;
}

export default function MidPostCard(props: MidPostCardProps) {
  const { post, isAdmin, className, bordered } = props;
  const slug = post?.node?.title.toLowerCase().split(" ").join("-")
  return (
    <Link
      href={`${isAdmin ? "/admin" : "" }/blog/${slug}-${post?.node?.postId}`}
      className={`
        ${bordered && "border-2 border-black/50"}
        hover:border-red-400 transition-all active:border-red-400
        shadow-lg shadow-black/5 flex-1 group
        justify-between  aspect-[1/1.1] max-w-md
        flex flex-col gap-2 p-2 rounded-lg ${className}`}>
      <GImage
        className={`w-full flex-1 rounded-md shadow-lg`}
        src={post?.node?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.node?.title} cover photo`} />
      <div className="p-2 flex justify-between flex-1 flex-col gap-2 text-black/80 w-full">
        <div className="flex flex-col gap-3">
          <h3 className={`
            font-bold text-2xl
            group-hover:text-red-400 group-active:text-red-400
            transition-all`}>{post?.node?.title}</h3>
          <p className="max-w-full text-sm line-clamp-2 flex flex-wrap">{post?.node?.abstract}</p>
        </div>
        <PostAuthor post={post?.node}/>
      </div>
    </Link>
  );
};

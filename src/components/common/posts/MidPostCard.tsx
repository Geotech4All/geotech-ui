import React from "react";
import { Maybe, PostType } from "@gql/codegen/graphql";
import { PostAuthor, PostReadLength, PreviewImage } from "@components/common";

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
    <a
      href={`${isAdmin ? "/admin" : "" }/blog/${post?.postId}-${slug}`}
      className={`
        ${bordered && "border border-black/5"} hover:border-black/30
        transition-all active:border-black/30 shadow-lg shadow-black/5
        group justify-between  aspect-[1/1.1] w-full h-full
        flex flex-col gap-2 p-1 rounded ${className}`}>
      <PreviewImage
        className={`w-full flex-1 rounded shadow-lg`}
        src={post?.coverPhoto?.url ?? "/images/reading-geo-tech.svg"}
        alt={post?.coverPhoto?.description ?? post?.title ?? ""} />
      <div className="p-2 flex flex-1 flex-col gap-2 text-black/80 w-full">
        <PostReadLength length={post?.readLength ?? 0}/>
        <div className="flex flex-1 flex-col gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <h3 className={`
                font-bold text-2xl group-hover:text-black/40 line-clamp-2
                group-active:text-black/40 transition-all`}>{post?.title}</h3>
            <p className="max-w-full text-xs line-clamp-2 flex flex-wrap">{post?.abstract}</p>
          </div>
          <PostAuthor post={post}/>
        </div>
      </div>
    </a>
  );
};

import React from "react";
import { Maybe, PostTypeEdge } from "@gql/codegen/graphql";
import { GImage, PostAuthor } from "@components/common";

interface MidPostCardProps {
  post: Maybe<PostTypeEdge>;
  className?: string;
  bordered?: boolean;
}

export default function MidPostCard(props: MidPostCardProps) {
  const { post, className, bordered } = props;
  return (
    <div className={`
      ${bordered && "border-2 border-black/50"} shadow-lg shadow-black/5 max-h-96 max-w-[20rem] flex flex-col gap-2 w-fit p-1 rounded-lg ${className}`}>
      <GImage
        className={`w-full rounded-md shadow-lg`}
        src={post?.node?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.node?.title} cover photo`} />
      <div className="p-2 flex justify-between flex-1 flex-col gap-2 text-black/80 w-full">
        <div>
          <h3 className={`font-bold text-2xl`}>{post?.node?.title}</h3>
          <p className="max-w-full text-sm line-clamp-3 flex flex-wrap">{post?.node?.abstract}</p>
        </div>
        <PostAuthor post={post}/>
      </div>
    </div>
  );
};

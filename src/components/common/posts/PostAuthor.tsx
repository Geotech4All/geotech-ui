import React from "react";
import { Maybe, PostType } from "@gql/codegen/graphql";
import { DateTime, GImage } from "@components/common";

interface PostAuthorProps {
  post: Maybe<PostType> | undefined;
  className?: string;
}

export default function PostAuthor(props: PostAuthorProps) {
  const { post, className } = props;

  return (
    <div className={`flex gap-2 ${className}`}>
      <GImage
        className="w-[2.5rem] p-1 rounded-full border-2 aspect-square flex items-center justify-center"
        src={post?.author?.profile?.image?.url ?? "/images/guy-profile.svg"}
        alt={`${post?.author.profile?.image?.description}`}/>
      <div className="flex text-sm flex-col">
        <p className="font-bold">{post?.author.fullName}</p>
        <DateTime date={String(post?.dateAdded)} />
      </div>
    </div>
  )
}

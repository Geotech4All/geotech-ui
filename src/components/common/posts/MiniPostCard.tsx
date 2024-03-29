import { Maybe, PostType } from "@gql/codegen/graphql";
import Link from "next/link";
import React from "react";
import { useIsMidScreen } from "../hooks";
import GImage from "../images/GImage";
import PostAuthor from "./PostAuthor";
import PostReadLength from "./PostReadLength";

interface MiniPostCardPorps {
  post: Maybe<PostType>;
  isAdmin?: boolean;
}

export default function MiniPostCard(props: MiniPostCardPorps) {
  const { post, isAdmin } = props;
  const [isMid, setIsMid] = React.useState<boolean>()
  const slug = post?.title.toLowerCase().split(" ").join("-")
  const isMidScreen = useIsMidScreen();
  
  React.useEffect(() => {
    setIsMid(isMidScreen)},
  [isMidScreen]);

  return (
    <Link
      href={`${isAdmin ? "/admin" : "" }/blog/${post?.postId}-${slug}`}
      className={`
        flex gap-3 group hover:shadow active:shadow border border-black/10
        hover:border-black/30 transition max-w-lg rounded overflow-hidden`}>
      <GImage
          className="flex-[1] max-h-40 overflow-hidden"
          src={post?.coverPhoto?.url ?? "/images/reading-geo-tech.svg"}
          alt={post?.coverPhoto?.description ?? post?.title ?? ""}/>
      <div className="flex-[1] py-2 p-1 flex text-black/80 flex-col">
        <PostReadLength length={post?.readLength ?? 1}/>
        <div className="flex-1 flex flex-col justify-between">
          <h3
            className={`
              transition-all
              group-hover:text-black/40 group-active:text-black/40
              line-clamp-3 font-bold text-lg`}>{post?.title}</h3>
          {isMid && <PostAuthor post={post}/>}
        </div>
      </div>
    </Link>
  )
}

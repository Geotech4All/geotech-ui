import React from "react";
import { Maybe, PostType } from "@gql/codegen/graphql";
import { GImage } from "@components/common";

interface PostAuthorProps {
  post: Maybe<PostType> | undefined;
  className?: string;
}

export default function PostAuthor(props: PostAuthorProps) {
  const { post, className } = props;
  const [date, setDate] = React.useState<string>();

  React.useEffect(() => {
    const newDate = new Date(Date.parse(post?.dateAdded ?? ""))
    const strDate = newDate.toLocaleDateString("en-us", { day: "numeric", month: "long", year: "numeric"})
    setDate(strDate);
  }, [post])
  return (
    <div className={`flex gap-2 ${className}`}>
      <GImage
        className="w-[2.5rem] p-1 rounded-full border-2 aspect-square flex items-center justify-center"
        src={post?.author?.profile?.image ?? "/images/guy-profile.svg"}
        alt={`${post?.author?.fullName ? `${post?.author.fullName}` : `${post?.title} author` }`}/>
      <div className="flex text-sm flex-col">
        <p className="font-bold">{post?.author.fullName}</p>
        <time className="text-xs" dateTime={post?.dateAdded}>{date}</time>
      </div>
    </div>
  )
}

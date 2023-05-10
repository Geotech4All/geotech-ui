import React from "react";
import { Maybe, PostTypeConnection } from "@gql/codegen/graphql";
import { MidPostCard, NothingFound } from "@components/common";

interface PostListProps {
  posts: Maybe<PostTypeConnection> | undefined,
  className?: string;
  title?: string;
}

export default function PostList(props: PostListProps) {
  const { posts, title, className } = props;
  
  const edges = posts?.edges;
  return (
    <div className={`flex gap-2 flex-col ${className}`}>
      {title && <h2 className="font-semibold text-lg text-black/50 px-2">{title}</h2>}
      {edges?.length && !(edges?.length > 0) ?
        <NothingFound caption="Sorry we couldn't find any posts" />
      :(
        <ul className={`
            grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-auto w-full`}>
          {edges?.map(post => <MidPostCard bordered key={post?.node?.postId} post={post?.node} />)}
        </ul>
      )}
    </div>
  );
};

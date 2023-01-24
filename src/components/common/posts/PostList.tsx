import React from "react";
import { Maybe, PostTypeConnection } from "@gql/codegen/graphql";
import { MidPostCard } from "@components/common";

interface PostListProps {
  posts: Maybe<PostTypeConnection> | undefined,
  className?: string;
}

export default function PostList(props: PostListProps) {
  const { posts, className } = props;
  
  return (
    <div className={className}>
      <ul className="flex w-full gap-1">
        {posts?.edges.map(post => <MidPostCard key={post?.node?.postId} post={post} />)}
      </ul>
    </div>
  );
};

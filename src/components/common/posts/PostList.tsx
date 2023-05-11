import React from "react";
import { Maybe, PostTypeConnection } from "@gql/codegen/graphql";
import { MidPostCard, NothingFound, List } from "@components/common";

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
        {edges?.length && edges.length > 0 ? (
            <List title={title}>
              {edges?.map(post => <MidPostCard bordered key={post?.node?.postId} post={post?.node} />)}
            </List>
        ): (
            <NothingFound caption="No posts found" />
        )}
    </div>
  );
};

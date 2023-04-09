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
  
  return (
    <div className={`flex flex-col ${className}`}>
      {title && <h2 className="font-semibold px-2">{title}</h2>}
      {!posts || !(posts.edges.length > 0) ?
        (
          <div className="flex items-center self-center justify-center max-w-md">
            <NothingFound
              caption="Sorry we couldn't find any posts"
              />
          </div>
        )
      :(
        <ul className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-auto w-full`}>
          {posts?.edges.map(post => <MidPostCard key={post?.node?.postId} post={post?.node} />)}
        </ul>
      )}
    </div>
  );
};

import React from "react";
import { Maybe, PostTypeConnection } from "@gql/codegen/graphql";
import { MidPostCard, NothingFound } from "@components/common";

interface PostListProps {
  posts: Maybe<PostTypeConnection> | undefined,
  className?: string;
  title?: string;
  wrap?: boolean
}

export default function PostList(props: PostListProps) {
  const { posts, wrap, title, className } = props;
  
  return (
    <div className={`flex flex-col ${className}`}>
      {title && <h2 className="font-semibold px-2">{title}</h2>}
      {!posts || !(posts.edges.length > 0) ?
        (
          <div className="flex items-center self-center justify-center max-w-md">
            <NothingFound
              caption="Sorry we couldn't find any posts"
              url="/admin/blog/new" name="Post" isAdmin={true} />
          </div>
        )
      :(
        <ul className={`flex overflow-auto ${wrap && "flex-wrap"} w-full gap-1`}>
          {posts?.edges.map(post => <MidPostCard key={post?.node?.postId} post={post} />)}
        </ul>
      )}
    </div>
  );
};

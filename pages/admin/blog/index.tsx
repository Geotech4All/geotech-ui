import React from "react";
import { NextPageWithLayout } from "@pages/_app";
import { ManagePosts, SidebarLayout } from "@components/admin";
import { ButtonLink, CenterSLoadingRing, PostList } from "@components/common";
import { useAllPosts } from "@gql/requests/queries/hooks";

const Blog: NextPageWithLayout = () => {
  const { loading, data, error } = useAllPosts({ first: 10 });

  if (loading) return <CenterSLoadingRing />
  if (error) console.log({ error })
  return (
    <div className="p-4 flex flex-col gap-6 relative">
      <PostList title="Recent posts" className="w-full flex" posts={data?.posts}/>
      <ManagePosts />
      <ButtonLink href="/admin/blog/new">+ New Post</ButtonLink>
    </div>
  );
};

Blog.getLayout = SidebarLayout;

export default Blog;

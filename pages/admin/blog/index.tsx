import React from "react";
import Link from "next/link";
import { NextPageWithLayout } from "@pages/_app";
import { SidebarLayout } from "@components/admin";
import { CenterSLoadingRing, PostList } from "@components/common";
import { useAllPosts } from "@gql/requests/queries/hooks";

const Blog: NextPageWithLayout = () => {
  const { loading, data, error } = useAllPosts({ first: 10 });

  if (loading) return <CenterSLoadingRing />
  if (error) console.log({ error })
  return (
    <div className="p-4 relative">
      <PostList title="Recent posts" className="w-full flex" posts={data?.posts}/>
      <Link
        className={`
          hover:bg-red-500 active:bg-red-500 transition-all absolute top-2 right-2
          bg-red-400 p-2 px-3 text-lg text-white rounded-md`} href="/admin/blog/new">New Post</Link>
    </div>
  );
};

Blog.getLayout = SidebarLayout;

export default Blog;

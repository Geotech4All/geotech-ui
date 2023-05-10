import React from "react";
import { NavBarLayout } from "@components/frontFacing";
import { NextPageWithLayout } from "@pages/_app";
import { useAllPosts } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, GImage, PostList, SomethingWentWrong } from "@components/common";

const Blog: NextPageWithLayout = () => {
  const { loading, data, error } = useAllPosts({ first: 10 });

  if (loading) return <CenterSLoadingRing />;
  if (error) return <SomethingWentWrong error={error} />;
  if (data?.posts?.edges.length && data?.posts?.edges?.length < 1) return (
    <div className="flex justify-center flex-col w-full items-center">
      <GImage className="max-w-lg" src="/images/sorry.svg" alt="lady holding a sorry plack"/>
      <h1 className="text-xl text-gray-600">Sorry no podcasts yet</h1>
    </div>
  );
  
  return (
    <div className="p-3 flex flex-col gap-7">
      <PostList title="Recent posts" className="w-full flex" posts={data?.posts}/>
    </div>
  );
};

Blog.getLayout = NavBarLayout;

export default Blog;

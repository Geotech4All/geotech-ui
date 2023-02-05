import React from "react";
import { NavBarLayout } from "@components/frontFacing";
import { NextPageWithLayout } from "@pages/_app";
import { useAllPosts, usePopularPosts } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, GImage, MidPostCard, PostList, SomethingWentWrong } from "@components/common";

const Blog: NextPageWithLayout = () => {
  const { loading, data, error } = useAllPosts({ first: 10 });
  const { loading: pLoading, data: pData } = usePopularPosts({ first: 5 });

  if (loading || pLoading) return <CenterSLoadingRing />;
  if (error) return <SomethingWentWrong error={error} />;
  if (data?.posts?.edges.length && data?.posts?.edges?.length < 1) return (
    <div className="flex justify-center flex-col w-full items-center">
      <GImage className="max-w-lg" src="/images/sorry.svg" alt="lady holding a sorry plack"/>
      <h1 className="text-xl text-gray-600">Sorry no podcasts yet</h1>
    </div>
  );
  
  return (
    <div className="p-3 flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold px-1">Popular Posts</h2>
        <ul className="flex flex-wrap md:grid md:grid-cols-3">
          {pData?.posts?.edges.map(edge => <MidPostCard key={edge?.node?.postId} post={edge?.node}/>)}
        </ul>
      </div>
      <PostList isAdmin={false} title="Recent posts" className="w-full flex" posts={data?.posts}/>
    </div>
  );
};

Blog.getLayout = NavBarLayout;

export default Blog;

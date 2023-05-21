import React from "react";
import { NavBarLayout } from "@components/frontFacing";
import { NextPageWithLayout } from "@pages/_app";
import { useAllPosts } from "@gql/requests/queries/hooks";
import { CenterSLoadingRing, NothingFound, PostList, SomethingWentWrong } from "@components/common";
import Head from "next/head";

const Blog: NextPageWithLayout = () => {
    const { loading, data, error } = useAllPosts({ first: 10 });

    if (loading) return <CenterSLoadingRing />;
    if (error) return <SomethingWentWrong error={error} />;
    if (data?.posts?.edges.length && data?.posts?.edges?.length < 1) return (
        <NothingFound caption="Sorry! no posts were found."/>
    );

    return (
        <>
            <Head>
                <title>Blog - Geotech</title>
            </Head>
            <div className="p-3 flex flex-col gap-7">
                <PostList title="Recent posts" className="w-full flex" posts={data?.posts} />
            </div>
        </>
    );
};

Blog.getLayout = NavBarLayout;

export default Blog;

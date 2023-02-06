import { PostForm, SidebarLayout } from "@components/admin";
import { PageLoadingRing, SomethingWentWrong } from "@components/common";
import { useDetailedPost } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const EditPost: NextPageWithLayout = () => {
  const router = useRouter();
  const postId = router.query.slug?.toString().split("-")[0]
  const { loading, data, error } = useDetailedPost({postId: postId ?? ""});

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />
  return (
    <>
    <Head>
      <title>Edit - {data?.post?.title}</title>
    </Head>
    <main className="p-3">
      <h1 className="font-bold text-3xl font-montserrat text-red-300">Edit Post</h1>
      <div className="p-2 bg-gray-100 rounded-3xl">
        <PostForm post={data?.post}/>
      </div>
    </main>
    </>
  )
};

EditPost.getLayout = SidebarLayout;

export default EditPost;

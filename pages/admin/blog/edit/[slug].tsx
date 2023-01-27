import { PostForm, SidebarLayout } from "@components/admin";
import { PageLoadingRing, SomethingWentWrong } from "@components/common";
import { useDetailedPost } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";
import React from "react";

const EditPost: NextPageWithLayout = () => {
  const router = useRouter();
  const postId = router.query.slug?.toString().split("-").pop()
  const { loading, data, error } = useDetailedPost({postId: postId ?? ""});

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />
  return (
    <div>
      <PostForm post={data?.post}/>
    </div>
  )
};

EditPost.getLayout = SidebarLayout;

export default EditPost;

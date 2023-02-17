import { GImage, PageLoadingRing, PostAuthor, PostReadLength, SomethingWentWrong } from "@components/common";
import { NavBarLayout } from "@components/frontFacing";
import { dummyPosts } from "@constants/clientContants";
import { PostType } from "@gql/codegen/graphql";
import { useIncreasePostViewCount } from "@gql/requests/mutations/hooks";
import { useDetailedPost } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";
import React from "react";

const PostDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const postId = router.query.slug?.toString().split("-")[0];
  const { loading, data, error } = useDetailedPost({ postId: postId ?? "" });
  const [increaseCount] = useIncreasePostViewCount({ postId: postId ?? "" });
  const [post, setPost] = React.useState<PostType>();

  React.useEffect(() => {
    if (postId)
    increaseCount({
      variables: { postId: postId ?? "" }
      })
  }, [increaseCount, postId])

  React.useEffect(() => {
    if (!loading && !error) {
      console.log(data?.post)
      if (data?.post) {
        setPost(data.post)
      }
      else {
        if (dummyPosts.posts?.edges[0]?.node)
          setPost(dummyPosts.posts.edges[0].node)
       }
    }
  }, [data, loading, error])


  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />

  return (
    <>
    <div className="p-0 sm:px-5 md:px-10">
      <GImage
        className="shadow"
        src={post?.coverPhoto ?? "/images/reading-geo-tech.svg"}
        alt={`${post?.title} cover photo`} />
    </div>
    <article className="p-6 px-5 sm:px-10 md:px-14 lg:px-32 flex flex-col gap-4">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <h1 className="text-4xl md:text-5xl text-red-500 font-semibold font-source-serif-pro">{data?.post?.title}</h1>
          {post && post?.readLength && <PostReadLength length={post.readLength} /> }
        </div>
        <PostAuthor post={data?.post}/>
      </section>
      <section
        className="flex text-lg md:text-xl flex-col w-full gap-4 font-source-serif-pro"
        dangerouslySetInnerHTML={{ __html: data?.post?.body ?? ""}}></section>
    </article>
    </>
  )
}

PostDetail.getLayout = NavBarLayout;

export default PostDetail;

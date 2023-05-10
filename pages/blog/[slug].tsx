import React from "react";
import { useRouter } from "next/router";
import { PostType } from "@gql/codegen/graphql";
import { NextPageWithLayout } from "@pages/_app";
import { dummyPosts } from "@constants/clientContants";
import { NavBarLayout } from "@components/frontFacing";
import { useDetailedPost } from "@gql/requests/queries/hooks";
import { useIncreasePostViewCount } from "@gql/requests/mutations/hooks";
import { PageLoadingRing, PostAuthor, PostReadLength, PreviewImage, SomethingWentWrong } from "@components/common";

const PostDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const postId = router.query.slug?.toString().split("-")[0];
  const { loading, data, error } = useDetailedPost({ postId: postId ?? "" });
  const [increaseCount] = useIncreasePostViewCount({ postId: postId ?? "" });
  const [post, setPost] = React.useState<PostType>();

  React.useEffect(() => {
    if (postId) increaseCount({ variables: { postId: postId ?? "" } })
  }, [increaseCount, postId])

  React.useEffect(() => {
    if (!loading && !error) {
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
    <article className="flex flex-col gap-4 md:gap-7 p-0.5 sm:px-10 sm:py-5 md:px-14 md:py-7 lg:px-32 lg:py-7">
        <PreviewImage straight
            className="shadow sm:rounded-md"
            src={post?.coverPhoto?.url ?? "/images/reading-geo-tech.svg"}
            alt={`${post?.title} cover photo`} />
        <div className="p-3 md:p-0 flex flex-col gap-4 md:gap-7">
            <section className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-3 justify-between">
                    <h1 className={`
                        text-4xl md:text-5xl text-red-500 font-semibold font-source-serif-pro`}>
                        {data?.post?.title}
                    </h1>
                    {post && post?.readLength && <PostReadLength length={post.readLength} /> }
                </div>
            <PostAuthor post={data?.post}/>
            </section>
            <section
                className="flex text-lg md:text-xl flex-col w-full gap-4 font-source-serif-pro"
                dangerouslySetInnerHTML={{ __html: data?.post?.body ?? ""}}/>
        </div>
    </article>
  )
}

PostDetail.getLayout = NavBarLayout;

export default PostDetail;

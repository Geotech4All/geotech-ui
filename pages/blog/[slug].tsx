import React from "react";
import { useRouter } from "next/router";
import { PostType } from "@gql/codegen/graphql";
import { NextPageWithLayout } from "@pages/_app";
import { dummyPosts } from "@constants/clientContants";
import { NavBarLayout } from "@components/frontFacing";
import { useDetailedPost } from "@gql/requests/queries/hooks";
import { useIncreasePostViewCount } from "@gql/requests/mutations/hooks";
import { Article, Heading, PageLoadingRing, PostAuthor, PostReadLength, PreviewImage, SomethingWentWrong, TipTapSection } from "@components/common";

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
    <Article>
        <PreviewImage straight
            className="shadow sm:rounded-md"
            src={post?.coverPhoto?.url ?? "/images/reading-geo-tech.svg"}
            alt={`${post?.title} cover photo`} />
        <div className="p-3 md:p-0 flex flex-col gap-4 md:gap-7">
            <section className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-3 justify-between">
                    <Heading>
                        {data?.post?.title}
                    </Heading>
                    {post && post?.readLength && <PostReadLength length={post.readLength} /> }
                </div>
            <PostAuthor post={data?.post}/>
            </section>
            <TipTapSection html={post?.body ?? ""}/>
        </div>
    </Article>
  )
}

PostDetail.getLayout = NavBarLayout;

export default PostDetail;

import { GImage, PageLoadingRing, PostAuthor, PostReadLength, SomethingWentWrong } from "@components/common";
import { dummyPosts } from "@constants/clientContants";
import { PostType } from "@gql/codegen/graphql";
import { useDetailedPost } from "@gql/requests/queries/hooks";
import { useRouter } from "next/router";
import React from "react";

export default function PostDetail() {
  const router = useRouter()
  const postId = router.query.slug?.toString().split("-")[1]
  const { loading, data, error } = useDetailedPost({ postId: postId ?? "" })
  const [post, setPost] = React.useState<PostType>()

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
    <article className="p-6 px-5 sm:px-10 md:px-14 lg:px-32 flex flex-col gap-4">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <h1 className="text-4xl md:text-5xl text-red-500 font-semibold font-montserrat">{data?.post?.title}</h1>
          {post && post?.readLength && <PostReadLength length={post.readLength} /> }
        </div>
        <PostAuthor post={data?.post}/>
        <GImage className="shadow" src={post?.coverPhoto ?? "/images/reading-geo-tech.svg"} alt={`${post?.title} cover photo`} />
      </section>
      <section dangerouslySetInnerHTML={{ __html: data?.post?.body ?? ""}}></section>
    </article>
  )
}

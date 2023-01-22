import { AnimatedCheckMark, Button, FormErrors, PageLoadingHalo, SomethingWentWrong, TipTap } from "@components/common";
import { ErrorType, Maybe } from "@gql/codegen/graphql";
import { useCreatePost } from "@gql/requests/mutations/hooks";
import { Editor } from "@tiptap/core";
import { useRouter } from "next/router";
import React from "react";

export default function NewPostForm() {
  const [createPost, { error, loading }] = useCreatePost();
  const [creationComplete, setCreationComplete] = React.useState(false)
  const [creationErrors, setCreationErrors] = React.useState<Maybe<Maybe<ErrorType>[]>>();
  const [post, setPost] = React.useState<string>();
  const router = useRouter();

  const getPost = (editor: Editor | null) => {
    if (editor) setPost(editor.getHTML())
  }
  
  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    createPost({
      variables: {
        body: post ?? ""
      }
    }).then(res => {
      if (!res.errors) { 
        setCreationComplete(true)
        const timeout = setTimeout(() => router.push("/admin/blog"), 3000)
        return () => clearTimeout(timeout);
      }
      else setCreationErrors(res.data?.post?.errors)
    })
    .catch(err => console.log(err))
  };

  if (error) return <SomethingWentWrong error={error} />
  if (loading) return <PageLoadingHalo />
  if (creationComplete) return <AnimatedCheckMark />

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      {creationErrors && <FormErrors errors={setCreationErrors}/>}
      <TipTap getContent={getPost}/>
      <Button
        type="submit"
        className={`
          p-1 px-6 rounded-lg w-fit
          bg-red-400 hover:bg-red-500
          active:bg-red-500 text-white
          transition-all font-semibold`} >Post</Button>
    </form>
  )
};

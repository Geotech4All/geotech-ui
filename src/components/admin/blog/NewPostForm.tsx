/* eslint-disable @next/next/no-img-element */
import { 
  AnimatedCheckMark,
  Button,
  FormErrors,
  GInput,
  GTextArea,
  IInput,
  MModal,
  PageLoadingHalo, SomethingWentWrong, TipTap } from "@components/common";
import { ErrorType, Maybe } from "@gql/codegen/graphql";
import { useCreatePost } from "@gql/requests/mutations/hooks";
import { Editor } from "@tiptap/core";
import { useRouter } from "next/router";
import React from "react";

export default function NewPostForm() {
  const [createPost, { error, loading }] = useCreatePost();
  const [creationComplete, setCreationComplete] = React.useState(false)
  const [creationErrors, setCreationErrors] = React.useState<Maybe<Maybe<ErrorType>[]>>();
  const [showImageForm, setShowImageForm] = React.useState(true);
  const [image, setImage] = React.useState<File>()
  const [post, setPost] = React.useState<string>();
  const router = useRouter();

  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const abstractRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  React.useEffect(() => {
    if (image)
    setShowImageForm(false);
  }, [image])

  const getImage = (file?: File) => {
    setImage(file);
  }

  const handleShowImageForm = () => setShowImageForm(true);

  const getPost = (editor: Editor | null) => {
    if (editor) setPost(editor.getHTML())
  }
  
  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    createPost({
      variables: {
        title: titleRef.current.value ?? "",
        body: post ?? "",
        abstract: abstractRef.current.value,
        coverPhoto: image
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
      <GInput
        ref={titleRef}
        required
        className={`
          shadow w-full text-red-400 font-extrabold
          placeholder:text-6xl placeholder:font-extrabold placeholder:text-red-300/60
          rounded-2xl p-3 text-6xl`}
        placeholder="Your post title goes here" />
      <GTextArea
        ref={abstractRef}
        rows={4}
        placeholder={`A short summary of your post. Something "catchy" that'll grab attention`}
        maxLength={1000}
        className={`shadow resize-none p-3 w-full rounded-2xl text-lg`}/>
      {image && <img src={URL.createObjectURL(image)} alt="temp alt"/>}
      <IInput className={`${showImageForm ? "" : "hidden"}`} title="Cover-photo(optional)" getFile={getImage} name="cover-photo"/>
      {!showImageForm && (
        <Button
          onClick={handleShowImageForm}
          title="Add cover image to post"
          type="button"
          className={`
            bg-red-300 text-white font-semibold
            hover:bg-red-400 active:bg-red-400 transition-all
            w-fit p-0.5 px-2 rounded-2xl`} >Change cover image</Button>
      )}
      <TipTap title="Post body" getContent={getPost}/>
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

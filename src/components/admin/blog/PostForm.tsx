import { 
  AnimatedCheckMark, FormErrors, GInput, GTextArea, ImagePicker,
  PageLoadingHalo, PreviewImage, SomethingWentWrong, TipTap, UIButton } from "@components/common";
import { ImageType, Maybe, PostType } from "@gql/codegen/graphql";
import { useCreateUpdatePost } from "@gql/requests/mutations/hooks";
import { Editor } from "@tiptap/core";
import { useRouter } from "next/router";
import React from "react";

interface PostFormProps {
  post?: Maybe<PostType>;
}

/**
 * A form for creating and updating posts
 * @param { PostFormProps } props 
 * @param { Maybe<PostType> } props.post - an optional initial post to update
 */
export default function PostForm(props: PostFormProps) {
  const { post: oldPost } = props;
  const [createUpdatePost, { error, loading, data }] = useCreateUpdatePost();
  const [post, setPost] = React.useState<string>();
  const [coverPhoto, setCoverPhoto] = React.useState<ImageType>();
  const [showImagePicker, setShowImagePicker] = React.useState(false);
  const router = useRouter();

  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const abstractRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  React.useEffect(() => { 
    oldPost?.coverPhoto && setCoverPhoto(oldPost.coverPhoto)
  }, [oldPost])

  const getPost = (editor: Editor | null) => {
    if (editor) setPost(editor.getHTML())
  }

  const toggleImagePicker = () => setShowImagePicker(!showImagePicker);
  const haldePickCoverPhoto = (image: ImageType) => {
      setShowImagePicker(false);
      setCoverPhoto(image);
  };

  const submitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    createUpdatePost({
      variables: {
        postId: oldPost?.postId,
        title: titleRef.current.value ?? "",
        body: post ?? "",
        abstract: abstractRef.current.value,
        coverPhotoId: coverPhoto?.imageId
      }
    }).catch(err => console.log(err))
    if (!data?.post?.errors) {
        const timeout = setTimeout(() => {
                router.push("/admin/blog")
                clearTimeout(timeout)
            }, 500)
        }
  };

  if (error) return <SomethingWentWrong error={error} />
  if (loading) return <PageLoadingHalo />
  if (data?.post?.success) return <AnimatedCheckMark />

  return (
    <form onSubmit={submitHandler} className="flex md:p-5 z-0 flex-col gap-2">
        {data?.post?.errors && <FormErrors errors={data?.post?.errors}/>}
        <GInput
            ref={titleRef}
            defaultValue={oldPost?.title}
            required
            className={`
                shadow w-full text-red-400 font-extrabold
                placeholder:text-4xl md:placeholder:text-6xl placeholder:font-extrabold placeholder:text-red-300/60
                rounded-2xl p-3 text-4xl md:text-6xl`}
            placeholder="Your post title goes here" />

        <GTextArea
            ref={abstractRef}
            defaultValue={oldPost?.abstract ?? undefined}
            rows={4}
            placeholder={`A short summary of your post. Something "catchy" that'll grab attention`}
            maxLength={1000}
            className={`shadow resize-none p-3 w-full rounded-2xl text-lg`}/>

        {coverPhoto && (
            <PreviewImage src={coverPhoto.url}
                alt={coverPhoto.description ?? ""}
                title={coverPhoto.description ?? ""}/>
        )}

        <div className="relative flex flex-col z-10 items-center">
            <UIButton type="button" className="self-start"
                onClick={toggleImagePicker}>{coverPhoto ? "Edit": "Add"} Cover photo</UIButton>
                {showImagePicker && (
                    <ImagePicker
                        onClose={toggleImagePicker} 
                        onPickImage={haldePickCoverPhoto}/>
                )}
        </div>

        <TipTap content={oldPost?.body} title="Post body" getContent={getPost}/>
        <UIButton className="self-end px-10" type="submit">Post</UIButton>
    </form>
  )
};

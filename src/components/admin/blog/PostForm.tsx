import {
    AnimatedCheckMark, FormErrors, ImagePicker,
    PageLoadingHalo, PreviewImage, TextArea, TextInput, TipTap, UIButton
} from "@components/common";
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
        }).then(res => {
            if (res.data?.post?.success) {
                const timeout = setTimeout(() => {
                    router.push("/admin/blog")
                    clearTimeout(timeout)
                }, 500)
            }
        }).catch(err => console.log(err))
    };

    if (loading) return <PageLoadingHalo />
    if (data?.post?.success) return <AnimatedCheckMark />

    return (
        <form onSubmit={submitHandler} className="flex py-3 z-0 flex-col gap-2">
            {error && <FormErrors errors={error} />}
            <TextInput ref={titleRef} defaultValue={oldPost?.title} required
                placeholder="Your post title goes here" />

            <TextArea
                ref={abstractRef} defaultValue={oldPost?.abstract ?? undefined}
                rows={4} maxLength={1000}
                placeholder={`A short summary of your post. Something "catchy" that'll grab attention`} />

            {coverPhoto && (
                <PreviewImage src={coverPhoto.url}
                    alt={coverPhoto.description ?? ""}
                    title={coverPhoto.description ?? ""} />
            )}

            <div className="relative flex flex-col z-10 items-center">
                <UIButton variant="Black" type="button" className="self-start py-3"
                    onClick={toggleImagePicker}>{coverPhoto ? "Edit" : "Add"} Cover photo</UIButton>
                {showImagePicker && (
                    <ImagePicker onClose={toggleImagePicker} onPickImage={haldePickCoverPhoto} />
                )}
            </div>

            <TipTap content={oldPost?.body} title="Post body" getContent={getPost} />
            <UIButton variant="Black" className="self-end px-10" type="submit">Post</UIButton>
        </form>
    )
};

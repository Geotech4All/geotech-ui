import { ImagePicker, TextInput, TipTapMenuItem, UIButton } from "@components/common";
import { ImageType } from "@gql/codegen/graphql";
import { BsCardImage } from "react-icons/bs";
import { Editor } from "@tiptap/core";
import React from "react";
import Image from "@tiptap/extension-image";

interface TipTapImageProps {
    editor: Editor
}

export const CustomImage = Image.configure({
    HTMLAttributes: {
        class: "aspect-video object-cover rounded-md"
    }
})

export default function TipTapImage(props: TipTapImageProps) {
    const { editor } = props;
    const [showImagePicker, setShowImagePicker] = React.useState(false);
    const urlRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const toggleShowImage = () => setShowImagePicker(curr => !curr);
    const handleChooseImage = (image: ImageType) => {
        editor.chain()
            .focus()
            .setImage({ src: image.url, alt: image.description ?? ""})
            .run();
        toggleShowImage();
    }

    const chooseImagByUrl = () => {
        editor.chain().focus().setImage({ src: urlRef.current.value }).run();
        toggleShowImage();
    }

    const handleKeyDown: React.KeyboardEventHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            chooseImagByUrl();
        }
    }

    return (
        <div>
            {showImagePicker && (
                <ImagePicker
                    onClose={toggleShowImage} onPickImage={handleChooseImage}>
                    <div className="flex gap-2">
                        <TextInput onKeyDown={handleKeyDown} ref={urlRef} placeholder="(Optional) Paste image url here" />
                        <UIButton onClick={chooseImagByUrl}
                            type="button" title="Add image with url">Done</UIButton>
                    </div>
                </ImagePicker>
            )}
            <TipTapMenuItem
                icon={BsCardImage} onClick={toggleShowImage}
                func="Insert Image" editor={editor}/>
        </div>
    )
    }

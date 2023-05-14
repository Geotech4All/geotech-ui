import React from "react";
import { ImageFoldersEnum, ImageType } from "@gql/codegen/graphql";
import { DragAndDrop, DropDownList, ImagePreview, LoadingSuccess, SomethingWentWrong, UIButton, UploadLoadingAnimation } from "@components/common";
import { useCreateUpdateImage } from "@gql/requests/mutations/hooks";

interface ImageUploadProps {
    onSuccess?: (image: ImageType) => void;
    defaultImage?: ImageType;
}

export default function ImageUpload(props: ImageUploadProps){
    const { onSuccess, defaultImage } = props;
    const [ mutate, { data, loading, error }] = useCreateUpdateImage();
    const [image, setImage] = React.useState<File>();
    const [description, setDescription] = React.useState(defaultImage?.description as string || undefined);
    const [folder, setFolder] = React.useState<string>();
    const folders = Object.values(ImageFoldersEnum)

    const handleDescriptionChange = (text: string) => setDescription(text);
    const getFile = (file: File[]) => setImage(file[0]);
    const getFolder = (folder: string) => setFolder(folder);
    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();
        const folderEnumVal = folder as ImageFoldersEnum;
        const res = await mutate({ variables: { 
            image,
            description,
            folder: folderEnumVal,
            imageId: defaultImage?.imageId
        }})
        const timeout = setTimeout(() => {
            if (res.data?.image?.image && onSuccess) {
                onSuccess(res.data.image.image);
                clearTimeout(timeout);
        }}, 1000);
    }

    if (error) return <SomethingWentWrong error={error} />

    return (
        <form onSubmit={handleSubmit} className="w-full relative flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-10 max-w-5xl bg-gray-100 p-7 rounded-xl w-full items-center">
                <div className="flex w-full flex-col gap-3 items-center">
                    <h1 className="font-bold text-3xl text-black/80">Upload your images</h1>
                    <p className="text-xl text-gray-400">PNG, JPG, WebP and GIF files only</p>
                </div>
                <DragAndDrop accept="images/jpg, images/png, images/webp" onAddFiles={getFile} />
            </div>
            <DropDownList full name="Image Folder i.e. image purpose (Optional)" getCurrent={getFolder} options={folders}/>
            <div className="w-full max-w-5xl">
                { image && (
                    <ImagePreview url={URL.createObjectURL(image)} 
                        description={description}
                        onChange={handleDescriptionChange}/> 
                )}
                { (!image && defaultImage?.url) && (
                    <ImagePreview url={defaultImage.url}
                        description={description}
                        onChange={handleDescriptionChange}/>
                )}
            </div>
            <UIButton variant="Black" onClick={handleSubmit} type="button" title="Upload image">Save</UIButton>
            { loading && <UploadLoadingAnimation /> }
            { data?.image?.success && <LoadingSuccess /> }
        </form>
    )
}

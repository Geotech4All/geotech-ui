import React from "react";
import { DragAndDrop, FilePreview, FormErrors, LoadingSuccess, UIButton, UploadLoadingAnimation } from "@components/common";
import { FileFoldersEnum, FileType, Maybe } from "@gql/codegen/graphql";
import { useCreateUpdateFile } from "@gql/requests/mutations/hooks";

interface FileUploadProps {
    defaultFile?: FileType;
    onSuccess?: (file: FileType) => void;
    fileFolder?: FileFoldersEnum;
}

interface FileTextType {
    name?: Maybe<string> | undefined;
    description?: Maybe<string> | undefined;
}

export default function FileUpload(props: FileUploadProps) {
    const { defaultFile, onSuccess, fileFolder } = props;
    const defaultFileText = { name: defaultFile?.name, description: defaultFile?.description}
    const [file, setFile] = React.useState<File>();
    const [fileTexts, setFileTexts] = React.useState<FileTextType>(defaultFileText);
    const [mutate, { loading, data, error }] = useCreateUpdateFile();

    const getFile = (files: File[]) => setFile(files[0]);
    const getTexts = (name: string, description?: string) => {
        setFileTexts({ name, description })
    }

    const handleSubmit: React.FormEventHandler = async (e) => {
        e.preventDefault();
        const res = await mutate({ variables: {
                file,
                folder: fileFolder,
                name: fileTexts.name,
                fileId: defaultFile?.fileId,
                description: fileTexts.description,
            }
        });
        const timeOut = setTimeout(() => {
            if (res.data?.file?.file && onSuccess) {
                onSuccess(res.data.file.file);
                clearTimeout(timeOut);
            }
        }, 500)
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            { error && <FormErrors errors={error}/> }
            <div className="flex flex-col gap-10 max-w-5xl bg-gray-100 p-7 rounded-xl w-full items-center">
                <div className="flex w-full flex-col gap-3 items-center">
                    <h1 className="font-bold text-3xl text-black/80">Upload your files</h1>
                    <p className="text-xl text-gray-400">MP3, WAV and OGG files only</p>
                </div>
                <DragAndDrop accept="audio/mp3, audio/wav, audio/ogg"onAddFiles={getFile} />
            </div>
            <div>
                {file && (<FilePreview getTexts={getTexts} defaultValue={{ ...defaultFileText, name: file.name ?? defaultFileText.name,  }}/>)}
            </div>
            <UIButton className="w-fit self-center" onClick={handleSubmit} variant="Black">Save</UIButton>
            { loading && <UploadLoadingAnimation /> }
            { data?.file?.success && <LoadingSuccess /> }
        </form>
    );
};

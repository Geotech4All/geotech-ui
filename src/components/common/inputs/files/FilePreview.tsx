import React from "react";
import { FaRegFileAudio } from "react-icons/fa";
import { TextInput, TextArea } from "@components/common";
import { Maybe } from "@gql/codegen/graphql";

interface FilePreviewProps {
    defaultValue?: {
        name?: Maybe<string> | undefined,
        description?: Maybe<string> | undefined
    };
    getTexts?: (name: string, description?: string) => void;
}

export default function FilePreview(props: FilePreviewProps) {
    const { getTexts, defaultValue } = props;
    const nameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const handleChange = () => {
        getTexts && getTexts(nameRef.current.value, descRef.current.value);
    }

    return (
        <div className={`
            flex text-black/80 aspect-video flex-col p-5
            bg-black/20 gap-4 border border-black/10 rounded-lg items-center`}>
            <span className="text-black/40 flex items-center flex-1"><FaRegFileAudio size={90}/></span>
            <div className="w-full flex flex-col flex-1 gap-2">
                <TextInput onChange={handleChange} ref={nameRef} placeholder="File name" defaultValue={defaultValue?.name ?? ""}/>
                <TextArea defaultValue={defaultValue?.description ?? ""} onChange={handleChange} ref={descRef}
                    placeholder="(Optional) Description: What is this file, what is it for" rows={3}/>
            </div>
        </div>
    );
};

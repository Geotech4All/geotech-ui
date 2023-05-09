/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TextInput } from "@components/common";

interface ImagePreviewProps {
    url: string;
    description?: string;
    onChange?: (text: string) => void;
}

export default function ImagePreview(props: ImagePreviewProps){
    const { url, onChange, description } = props;

    const handleDescChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        onChange && onChange(e.target.value);
    }

    return (
        <div className="relative flex flex-col items-center">
            <img title={description}
                className="object-cover aspect-video rounded-md" alt={description} src={url}/>
            <div className="absolute bottom-3 w-[97%]">
                <TextInput title="Image description"
                    onChange={handleDescChange}
                    placeholder="(Optional) describe what is in this image"/>
            </div>
        </div>
    )
};

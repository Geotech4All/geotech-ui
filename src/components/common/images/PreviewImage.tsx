/* eslint-disable @next/next/no-img-element */
import React from "react";

interface PreviwImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{
    straight?: boolean;
};

export default function PreviewImage(props: PreviwImageProps) {
    const {alt, className, straight, ...rest} = props;
    return (
        <div>
            <img
                className={`${!straight ? "rounded-md":""}
                    aspect-video object-cover ${className}`}
                alt={alt} {...rest} />
        </div>
    )
};

/* eslint-disable @next/next/no-img-element */
import React from "react";

interface PreviwImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{};

export default function PreviewImage(props: PreviwImageProps) {
    const {alt, className, ...rest} = props;
    return (
        <div>
            <img
                className={`aspect-video rounded-lg object-cover ${className}`}
                alt={alt} {...rest} />
        </div>
    )
};

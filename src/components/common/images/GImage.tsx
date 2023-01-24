/* eslint-disable @next/next/no-img-element */
import React from "react";

type GImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
  alt: string;
};

export default function GImage(props: GImageProps) {
  const { className, alt, ...rest } = props;
  return (
    <div className={ `overflow-hidden object-cover ${className}` }>
      <img { ...rest } alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  )
}

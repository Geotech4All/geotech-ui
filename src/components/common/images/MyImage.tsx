/* eslint-disable @next/next/no-img-element */
import React from "react";

type MyImageProps = {
  className?: string,
  src: string,
  alt: string,
  width: number,
  height : number,
  priority?: boolean,
}

export default function MyImage(props: MyImageProps){
  const { className, width, height, alt, priority, src, ...rest } = props;

  return (
    <div className={className}>
      <img 
        {...rest}
        loading={priority ? "eager": "lazy"}
        width={width}
        height={height}
        className='w-full object-cover'
        src={src}
        alt={alt}
        />
    </div>
  )
}

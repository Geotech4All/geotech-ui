import React from "react";
import Image from "next/image";

type MyImageProps = {
  className?: string,
  src: string,
  alt: string,
  width: number,
  height : number
}

export default function MyImage(props: MyImageProps){
  const { className, width, height, alt, src, ...rest } = props;

  return (
    <div className={className}>
      <Image 
        {...rest}
        width={width}
        height={height}
        className='w-full object-cover'
        src={src}
        alt={alt}
        />
    </div>
  )
}

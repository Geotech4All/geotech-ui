import Image from "next/image";
import React from "react";

interface FullLogoProps {
  className?: string;
};

export default function FullLogo(props: FullLogoProps){
  const {className} = props;
  return (
    <Image
      className={className}
      src="/images/Geotech4All-rebrand.png"
      width={1031} height={207}
      alt="geotech full size logo" />
  )
};

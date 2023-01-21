import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NothingFoundProps {
  caption?: string;
  url?: string;
  name?: string;
}

export default function NothingFound(props: NothingFoundProps){
  const { caption, url, name } = props;
  return (
    <div>
      <Image
        className="max-w-xl w-full"
        width={750}
        height={500}
        src="/images/not-found.svg"
        alt="man searching for files"/>
      <div className="flex flex-col items-center justify-center text-lg text-black/60">
        <p>{caption}</p>
        {url && (
          <Link
            className="bg-ui-red-100 transition-all hover:px-4 hover:bg-ui-red-200 font-semibold p-1 text-white px-2"
            href={url}>Add {name}</Link>)}
      </div>
    </div>
  );
};

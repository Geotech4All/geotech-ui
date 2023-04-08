/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getRandom } from "@utils/common";
import { EmptyError, emptyErrors } from "@constants/errors";

interface NothingFoundProps {
  caption?: string;
  className?: string;
}

export default function NothingFound(props: NothingFoundProps){
  const { caption, className } = props;
  const [emptyError, setEmptyError] = React.useState<EmptyError>()

  React.useEffect(() => setEmptyError(getRandom<EmptyError>(emptyErrors)), []);
  return (
    <div className={className}>
      <img
        width={emptyError?.width ?? 0}
        height={emptyError?.height ?? 0}
        className="w-full"
        src={emptyError?.img ?? ""}
        alt={emptyError?.alt ?? ""}/>
      <div className="flex flex-col items-center justify-center text-lg text-black/60">
        <p>{caption}</p>
      </div>
    </div>
  );
};

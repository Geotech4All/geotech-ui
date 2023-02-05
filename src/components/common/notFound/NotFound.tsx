import React from "react";
import Image from "next/image";
import { getRandom } from "@utils/common";
import { EmptyError, emptyErrors } from "@constants/errors";

interface NothingFoundProps {
  caption?: string;
  url?: string;
  name?: string;
  isAdmin: boolean;
}

export default function NothingFound(props: NothingFoundProps){
  const { caption } = props;
  const [emptyError, setEmptyError] = React.useState<EmptyError>()

  React.useEffect(() => setEmptyError(getRandom<EmptyError>(emptyErrors)), []);
  return (
    <div>
      <Image
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

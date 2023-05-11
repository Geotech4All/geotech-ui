import React from "react";
import { getRandom } from "@utils/common";
import { ImageDataType, emptyErrors } from "@constants/errors";
import PreviewImage from "../images/PreviewImage";

interface NothingFoundProps {
  caption?: string;
  className?: string;
  image?: string;
  alt?: string;
  width?: number;
  variant?: "small" | "normal" | "large";
}

export default function NothingFound(props: NothingFoundProps){
  const { caption, alt, className, image, variant } = props;
  const [emptyError, setEmptyError] = React.useState<ImageDataType>()
  const [size, setSize] = React.useState("");

  React.useEffect(() => setEmptyError(getRandom<ImageDataType>(emptyErrors)), []);
  React.useEffect(() => {
        if (variant == "small") {
            setSize("max-w-[8rem]")
        } else if (variant == "large") {
            setSize("max-w-4xl")
        } else { setSize("max-w-lg" )}
  }, [variant])

  return (
    <div className={`flex flex-col md:flex-row min-h-[30rem] w-full items-center justify-center ${className}`}>
      <PreviewImage className={`${size} w-full`}
        src={image ?? emptyError?.img ?? ""} alt={alt ?? emptyError?.alt ?? ""}/>
      <div className="flex flex-col items-center justify-center text-lg text-black/60">
        <p>{caption}</p>
      </div>
    </div>
  );
};

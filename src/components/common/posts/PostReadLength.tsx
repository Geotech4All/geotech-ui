import React from "react";

interface PostReadLengthProps {
  length: number;
}
export default function PostReadLength(props: PostReadLengthProps) {
  const { length } = props;
  const readLength = Math.ceil((length / 60))
  return (
    <time
      className="text-xs"
      dateTime={length.toString()}>{readLength} min <span className="bg-gray-900 text-white p-0.5 px-2 rounded-xl">Read</span></time>
  )
};

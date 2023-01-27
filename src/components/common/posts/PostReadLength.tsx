import React from "react";

interface PostReadLengthProps {
  length: number;
}
export default function PostReadLength(props: PostReadLengthProps) {
  const { length } = props;
  return (
    <time
      className="text-xs"
      dateTime={length.toString()}>{length} min <span className="bg-gray-900 text-white p-0.5 px-2 rounded-xl">Read</span></time>
  )
};

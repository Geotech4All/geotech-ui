import React from "react";

interface WrapProps {
    children?: React.ReactNode;
}

export default function Wrap(props: WrapProps) {
    const { children } = props;
    return (
      <ul className="flex flex-wrap items-center gap-2">
          {children}
      </ul>
    )
}

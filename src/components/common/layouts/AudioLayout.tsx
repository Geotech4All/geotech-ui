import React from "react";
import { AudioPlayer } from "@components/common";

interface AudioLayoutProps {
  children?: React.ReactNode;
}

export default function AudioLayout(props: AudioLayoutProps) {
  const { children } = props;
  return (
    <div className="relative z-0">
      <div className="z-10">{children}</div>
      <div className="z-20">
        <AudioPlayer />
      </div>
    </div>
  )
};

import React from "react";

export function useNewPodcastsRefs(){
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  return { titleRef, descRef }
}

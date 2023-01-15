import React from "react";

export function useAuthRefs() {
  const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwdRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  return {emailRef, passwdRef};
}

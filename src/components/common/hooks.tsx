import React from "react";

export function useIsLargeScreen(){
  const [isLarge, setIsLarge] = React.useState(false);
  const handleResize = () => {
    if (window.innerWidth > 769) {
      setIsLarge(true)
    } else {
      setIsLarge(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return isLarge;
};

export function useIsMidScreen(){
  const [isMid, setIsMid] = React.useState(false);
  const handleResize = () => {
    if (window.innerWidth > 640) {
      setIsMid(true)
    } else {
      setIsMid(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return isMid;
}

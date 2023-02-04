import { useMediaQuery } from "react-responsive";

export function useIsLargeScreen(){
  return useMediaQuery({
    query: "(min-width: 769px)"
  });
};

export function useIsMidScreen(){
  return useMediaQuery({
    query: "(min-width: 640px)"
  });
}

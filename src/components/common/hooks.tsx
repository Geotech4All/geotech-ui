import { useMediaQuery } from "react-responsive";

export default function useIsLargeScreen(){
  return  useMediaQuery({
    query: "(min-width: 769px)"
  });
};

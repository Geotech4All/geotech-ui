import { UrlType } from "./adminUrls";
import { BiNews } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { MdFiberSmartRecord } from "react-icons/md";

export const frontFacingNavUrl: UrlType[] = [
  {
    name: "Home",
    path: "/",
    icon: GoHome
  },
  {
    name: "Blog",
    path: "/blog",
    icon: BiNews
  },
  {
    name: "Podcast",
    path: "/podcasts",
    icon: MdFiberSmartRecord
  }
]

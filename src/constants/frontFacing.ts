import { UrlType } from "./adminUrls";
import { BiNews } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdFiberSmartRecord } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";

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

export const socialMedia: UrlType[] = [
  {
    name: "Twitter",
    path: "https://twitter.com/Geotech4All?t=akL7Vbfy0etvjULkWgXV0w&s=08",
    icon: BsTwitter
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/geotech4all/",
    icon: BsLinkedin
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/Geotech4all/",
    icon: ImFacebook2
  }
]

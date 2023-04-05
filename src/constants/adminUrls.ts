import { IconType } from "react-icons";
import { MdSpaceDashboard } from "react-icons/md";
import { SiGooglepodcasts } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";

export interface UrlType {
  path: string;
  name: string;
  icon: IconType
}

export const adminUrls: UrlType[] = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: MdSpaceDashboard
  },
  {
    path: "/admin/podcasts",
    name: "Podcast",
    icon: SiGooglepodcasts
  },
  {
    path: "/admin/blog",
    name: "Blog",
    icon: CgNotes
  },
  {
    path: "/admin/staff",
    name: "Staff",
    icon: FaUsers
  }
]

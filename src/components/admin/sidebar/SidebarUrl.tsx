import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { UrlType } from "@constants/adminUrls";
import { useAppSelector } from "@store/hooks";
import { selectAdmin } from "@store/slices";
import { useRouter } from "next/router";

export default function SidebarUrl(props: UrlType) {
  const { path, name, icon: Icon } = props;
  const [active, setActive] = React.useState(false);
  const router = useRouter();
  const admin = useAppSelector(selectAdmin);

  React.useEffect(() => {
    const paths = router.pathname.split("/").slice(1, 3)
    setActive(path === "/" + paths.join("/"))
  }, [path, router])

  return (
    <Link title={name}
      className={`
        flex ${active ? "bg-black/80 text-white" : "text-gray-700"} gap-2 self-start w-full
        hover:bg-black/60 p-2.5 px-4 rounded-3xl hover:text-white transition-all
        ${admin.sidebarOpen ? "justify-start p-4" : "justify-center aspect-square rounded-full"}
      items-center`} href={path}>
      <Icon size={ 25 }/>
      {admin.sidebarOpen && ( <motion.span>{ name }</motion.span>)}
    </Link>
  )
}

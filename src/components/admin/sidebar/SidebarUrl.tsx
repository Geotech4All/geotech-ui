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
    <Link className={`
      flex ${active && "bg-red-50"}
      hover:bg-black/10 p-1 rounded-2xl text-black/90
      transition-all
      gap-2 text-2xl
      ${admin.sidebarOpen ? "justify-start p-4" : "justify-center aspect-square rounded-full"}
      items-center`} href={path}>
      <Icon size={ 35 }/>
      {admin.sidebarOpen && (
        <motion.span>{ name }</motion.span>
      )}
    </Link>
  )
}

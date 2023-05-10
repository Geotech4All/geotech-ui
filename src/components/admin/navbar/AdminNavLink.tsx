import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UrlType } from "@constants/adminUrls";

interface AdminNavLinkProps {
  url: UrlType;
  onClick?: React.MouseEventHandler<HTMLElement>
}

export default function AdminNavLink(props: AdminNavLinkProps){
  const { onClick } = props;
  const { path, icon: Icon, name } = props.url;
  const router = useRouter();
  const currRoute = router.pathname.split("/").pop()?.trim();
  const pathName = path.split("/")[1]?.trim();
  return (
    <Link onClick={onClick} href={path}
      className={`${currRoute === pathName ? "bg-black/25":""}
        flex transition-all items-center active:bg-red-400 bg-transparent
        hover:bg-black/10 active:bg-black/10 p-2 rounded-md gap-2`} >
      <Icon size={20}/>
      <span>{name}</span>
    </Link>
  );
};

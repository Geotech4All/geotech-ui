import { UrlType } from "@constants/adminUrls";
import Link from "next/link";
import React from "react";

interface AdminNavLinkProps {
  url: UrlType;
  onClick?: React.MouseEventHandler<HTMLElement>
}

export default function AdminNavLink(props: AdminNavLinkProps){
  const { onClick } = props;
  const { path, icon: Icon, name } = props.url;
  return (
    <Link onClick={onClick} href={path}
      className={`
        flex transition-all items-center active:bg-red-400 bg-transparent
        hover:bg-black/10 active:bg-black/10 p-2 rounded-md gap-2`} >
      <Icon size={20}/>
      <span>{name}</span>
    </Link>
  );
};

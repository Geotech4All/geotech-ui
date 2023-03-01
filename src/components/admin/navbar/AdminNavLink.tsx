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
    <Link
      onClick={onClick}
      className="flex transition-all items-center hover:text-white active:bg-red-400 hover:bg-red-400 p-2 rounded-md gap-2"
      href={path}>
      <Icon size={25}/>
      <span>{name}</span>
    </Link>
  );
};

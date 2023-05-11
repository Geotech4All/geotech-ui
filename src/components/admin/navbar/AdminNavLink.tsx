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
  const router = useRouter();
  const { path, icon: Icon, name } = props.url;
  const [isCurrRoute, setIsCurrRoute] = React.useState(false);

  React.useEffect(() => {
    if (router.asPath.split("/")[1]?.trim() === "admin") {
        const currRoute = router.asPath.split("/")[2]?.trim();
        const pathName = path.split("/")[2]?.trim();
        setIsCurrRoute(currRoute === pathName)
    } else {
        const currRoute = router.asPath.split("/")[1]?.trim();
        const pathName = path.split("/")[1]?.trim();
        setIsCurrRoute(currRoute === pathName)
    }
  }, [path, router.asPath])

  return (
    <Link onClick={onClick} href={path}
      className={`${isCurrRoute ? "bg-black/25":""}
        flex transition-all items-center active:bg-red-400
        hover:bg-black/10 active:bg-black/10 p-2 rounded-md gap-2`} >
      <Icon size={20}/>
      <span>{name}</span>
    </Link>
  );
};

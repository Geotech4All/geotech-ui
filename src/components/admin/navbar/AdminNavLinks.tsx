import React from "react";
import { adminUrls } from "@constants/adminUrls";
import { AdminNavLink } from "@components/admin";

interface AdminNavLinksProps {
  onNavClick?: React.MouseEventHandler<HTMLElement>;
}
export default function AdminNavLinks(props: AdminNavLinksProps){
  const { onNavClick } = props;
  return (
    <nav>
      {adminUrls.map(url => <AdminNavLink onClick={onNavClick} key={Math.random()} url={url} />)}
    </nav>
  );
};

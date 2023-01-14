import React from "react";
import { adminUrls } from "@constants/adminUrls";
import { AdminNavLink } from "@components/admin";

export default function AdminNavLinks(){
  return (
    <nav>
      {adminUrls.map(url => <AdminNavLink key={Math.random()} url={url} />)}
    </nav>
  );
};

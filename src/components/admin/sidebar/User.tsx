/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useAppSelector } from "@store/hooks";
import { selectAdmin, selectUser } from "@store/slices"
import Link from "next/link";

export default function User () {
  const admin = useAppSelector(selectAdmin);
  const user = useAppSelector(selectUser);

  return (
    <Link
      className={`flex max-w-[7rem] flex-col group gap-1 items-center justify-center`}
      href="/admin/profile">
      <img
        className={`
            w-full max-w-[10rem] bg-gray-200 rounded-full p-1
            group-hover:bg-black/70 transition-all object-cover aspect-square`}
        src={user?.profile?.image?.url ?? "/images/profile.svg" } alt={user?.profile?.image?.description ?? ""} />
      {admin.sidebarOpen && (
        <address>{user?.email}</address>
      )}
    </Link>
  )
};

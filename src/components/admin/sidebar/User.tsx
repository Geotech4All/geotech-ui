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
            w-full max-w-[10rem] bg-gray-200 rounded-full p-3
            group-hover:bg-black/70 transition-all object-cover aspect-square`}
        src={user?.profile?.image ?? "/images/profile.svg" } alt={user?.fullName ?? "user profile"} />
      {admin.sidebarOpen && (
        <address>{user?.email}</address>
      )}
    </Link>
  )
};

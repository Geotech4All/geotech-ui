import React from "react";
import Image from "next/image";
import { useAppSelector } from "@store/hooks";
import { selectAdmin } from "@store/slices"
import Link from "next/link";

export default function User () {
  const admin = useAppSelector(selectAdmin)
  return (
    <Link href="/admin/profile">
      <Image
        className="w-full"
        width={24}
        height={24}
        src="/images/profile.svg" alt="user profile" />
    </Link>
  )
};

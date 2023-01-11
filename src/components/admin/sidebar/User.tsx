import React from "react";
import Image from "next/image";
import { useAppSelector } from "@store/hooks";
import { selectAdmin } from "@store/slices"

export default function User () {
  const admin = useAppSelector(selectAdmin)
  return (
    <div>
      <Image
        className="w-full"
        width={24}
        height={24}
        src="/images/profile.svg" alt="user profile" />
    </div>
  )
};

import { GImage } from "@components/common";
import { StaffType } from "@gql/codegen/graphql";
import Link from "next/link";
import React from "react";

interface StaffCartProps {
  staff: StaffType;
}

export default function StaffCard(props: StaffCartProps) {
  const { staff } = props;
  return (
      <Link href={`/admin/staff/edit/${staff.staffId}`}
        className={`
            flex items-center gap-4 shadow p-4 rounded-md border group
            hover:border-black/20 transition border-black/5`}>
        <GImage
          className="rounded-full aspect-square min-w-[4rem] w-[4.5rem] bg-gray-300"
          src={staff.user?.profile?.image?.url ?? "/images/profile.svg"}
          alt={staff.user?.profile?.image?.description ?? ""} />
        <div className="group-hover:text-black/60 transition flex-1">
          <address className="line-clamp-1">{staff.user?.email}</address>
          <h3 className="whitespace-nowrap flex line-clamp-1">{staff.user?.fullName}</h3>
        </div>
      </Link>
  )
};

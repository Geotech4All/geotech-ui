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
        className="flex items-center gap-4 shadow-lg p-4 rounded-3xl">
        <GImage
          className="rounded-full aspect-square w-[7rem] bg-gray-300"
          src={staff.user?.profile?.image ?? "/images/profile.svg"}
          alt={staff.user?.fullName ?? "Staff"} />
        <div>
          <address>{staff.user?.email}</address>
          <h3>{staff.user?.fullName}</h3>
        </div>
      </Link>
  )
};

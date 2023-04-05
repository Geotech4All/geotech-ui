import React from "react";
import { StaffCard } from "@components/admin";
import { Maybe, StaffType } from "@gql/codegen/graphql";

interface StaffListProps {
  staff: Maybe<StaffType[]> | undefined;
}

export default function StaffList(props: StaffListProps){
  const { staff } = props;
  return (
    <div>
        <h2 className="text-black/50 text-xl">Staff List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {staff?.map(staff => <StaffCard key={staff.staffId} staff={staff}/>)}
        </div>
    </div>
  )
}

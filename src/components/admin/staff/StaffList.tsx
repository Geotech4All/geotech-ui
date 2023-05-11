import React from "react";
import { StaffCard } from "@components/admin";
import { Maybe, StaffType } from "@gql/codegen/graphql";
import { List } from "@components/common";

interface StaffListProps {
  staff: Maybe<StaffType[]> | undefined;
}

export default function StaffList(props: StaffListProps){
  const { staff } = props;
  return (
    <List title="Staff list">
        {staff?.map(staff => <StaffCard key={staff.staffId} staff={staff}/>)}
    </List>
  )
}

import { Maybe, StaffType, UserType } from "@gql/codegen/graphql";
import React from "react";
import { DottedLabel, UserOption } from "@components/common";

interface StaffSelectProps {
  staff: Maybe<StaffType>[];
  title?: string;
  className?: string;
  onSelect: (user: UserType) => void;
};
export default function StaffSelect(props: StaffSelectProps){
  const { staff, onSelect, title } = props;
  return (
    <div className="flex-1">
        <DottedLabel>{title}</DottedLabel>
            <ul className="flex flex-col gap-2 max-h-[80vh] overflow-auto">
            {staff?.map(staff => <UserOption onSelect={onSelect} user={staff?.user} key={staff?.staffId}/>)}
        </ul>
    </div>
  );
};

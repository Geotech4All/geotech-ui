import { Maybe, StaffType, UserType } from "@gql/codegen/graphql";
import React from "react";
import { UserOption } from "@components/common";

interface StaffSelectProps {
  staff: Maybe<StaffType>[];
  title?: string;
  className?: string;
  onSelect: (user: UserType) => void;
};
export default function StaffSelect(props: StaffSelectProps){
  const { staff, onSelect, className, title } = props;
  return (
    <div className={className}>
      {title && (
        <label
          className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold">
          {" " + title}
        </label>
      )}
      <ul className="flex flex-col p-1 rounded-2xl">
        {staff.map(staff => (
          <UserOption
            onSelect={onSelect}
            key={staff?.staffId}
            user={staff?.user}/>
          ))}
      </ul>
    </div>
  );
};

/* eslint-disable @next/next/no-img-element */
import { UIButton } from "@components/common";
import { GuestType, Maybe } from "@gql/codegen/graphql";
import React from "react";

interface GuestOptionProps {
  guest?: Maybe<GuestType>;
  onSelect: (guest: GuestType) => void;
};
export default function UserOption(props: GuestOptionProps){
  const { guest, onSelect } = props;

  function handleClick(){
    if (guest) onSelect(guest)
  };

  return (
    <UIButton variant="Black" className="flex items-center bg-black/75 gap-3" type="button"
      onClick={handleClick}>
        <span>{guest?.name}</span>
    </UIButton>
  );
};

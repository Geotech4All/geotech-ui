/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoClose } from "react-icons/io5";
import { GuestType, Maybe } from "@gql/codegen/graphql";
import { UIButton } from "@components/common"

interface GuestPillProps {
  guest?: Maybe<GuestType>,
  onRemove?: (guest: GuestType) => void;
}

export default function GuestPill(props: GuestPillProps){
  const { guest, onRemove } = props;

  function removeHandler(){
    if (onRemove && guest) {
      onRemove(guest)
    }
  };

  return (
    <div className="flex items-center gap-2 bg-black/10 px-2 w-fit border-2 border-black/60 p-1 rounded-lg">
      <span>{guest?.name}</span>
      {onRemove && (
        <UIButton variant="Black" className="p-0.5 px-0.5" type="button" onClick={removeHandler} icon={IoClose}/>
      ) }
    </div>
  )
};

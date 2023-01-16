/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoClose } from "react-icons/io5";
import { GuestType, Maybe } from "@gql/codegen/graphql";
import { Button } from "@components/common"

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
    <div className="flex items-center gap-2 bg-red-100 pr-2 w-fit border-2 border-red-300 p-1 rounded-3xl">
      <div className="max-w-[2rem] rounded-full overflow-hidden">
        <img className="w-full object-cover"
          src={guest?.image ?? ""}
          alt={guest?.name ?? "user avatar"} />
      </div>
      <span>{guest?.name}</span>
      {onRemove &&
        <Button
          type="button"
          onClick={removeHandler}
          className="p-1 transition-all hover:bg-red-400 hover:text-white active:bg-red-400 active:text-white rounded-full bg-red-300"
          icon={IoClose}/>
      }
    </div>
  )
};

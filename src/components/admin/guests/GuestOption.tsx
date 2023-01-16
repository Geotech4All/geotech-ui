/* eslint-disable @next/next/no-img-element */
import { GuestType, Maybe } from "@gql/codegen/graphql";
import React from "react";

interface GuestOptionProps {
  guest?: Maybe<GuestType>;
  onSelect: (guest: GuestType) => void;
};
export default function UserOption(props: GuestOptionProps){
  const { guest, onSelect } = props;
  const [name, setName] = React.useState<string>();

  function handleClick(){
    if (guest) onSelect(guest)
  };

  return (
    <button
      type="button"
      className="flex gap-3 items-center rounded-3xl transition-all active:bg-red-300 hover:bg-red-300 bg-red-100/20 w-full p-1"
      onClick={handleClick} title={name}>
      <div className="max-w-[2rem] rounded-full overflow-hidden">
        <img className="w-full object-cover" src={guest?.image ?? ""} alt={name ?? "user avatar"} />
      </div>
      <span>{guest?.name}</span>
    </button>
  );
};

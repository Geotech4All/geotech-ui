import { GuestType, GuestTypeEdge, Maybe } from "@gql/codegen/graphql";
import React from "react";
import { GuestOption } from "..";

interface GuestSelectProps {
  guests: Maybe<GuestTypeEdge>[];
  title?: string;
  className?: string;
  onSelect: (guest: GuestType) => void;
}
export default function GuestSelect(props: GuestSelectProps){
  const { guests, className, title, onSelect } = props;
  
  return (
    <div className={className}>
      {title && (
        <label
          className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold">
          {" " + title}
        </label>
      )}
      {guests.length > 0 ?
        <ul className="flex flex-col p-1 rounded-2xl">
          {guests.map(guest => (
            <GuestOption key={guest?.node?.guestId} onSelect={onSelect}/>
          ))}
        </ul>
        : <p className="text-black/50 p-2 flex items-center justify-center border-2 border-black/30 rounded-2xl text-lg">No guests yet</p>
      }
    </div>
  );
};

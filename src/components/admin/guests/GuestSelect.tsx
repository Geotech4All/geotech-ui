import { CenterSLoadingRing, DottedLabel, MModal, UIButton } from "@components/common";
import { GuestType } from "@gql/codegen/graphql";
import React from "react";
import { GuestForm, GuestOption } from "..";
import { usePrevousGuests } from "@gql/requests/queries/hooks";

interface GuestSelectProps {
  title?: string;
  className?: string;
  onSelect: (guest: GuestType) => void;
}
export default function GuestSelect(props: GuestSelectProps){
    const { className, title, onSelect } = props;
    const { data, loading } = usePrevousGuests();
    const [showGuestForm, setShowGuestForm] = React.useState(false);
    const guests = data?.guests?.edges;

  if (loading) return <CenterSLoadingRing />;
  const toggleGuestForm = () => setShowGuestForm(curr => !curr);
  
  return (
    <div className={className}>
        <div className="flex justify-between py-3 items-center">
            {title && ( <DottedLabel>{" " + title}</DottedLabel>)}
            <UIButton onClick={toggleGuestForm} className="shadow" variant="Black">+ New Guest</UIButton>
        </div>
        {guests?.length && guests.length > 0 ? (
        <ul className="flex flex-col p-1 rounded-2xl">
            {guests.map(guest => ( <GuestOption guest={guest?.node} key={guest?.node?.guestId} onSelect={onSelect}/>))}
        </ul>
      ):(<p className={`
          text-black/50 p-2 flex items-center justify-center
          border border-black/50 rounded-md text-lg`}>No guests yet</p>
      ) }
      <MModal open={showGuestForm} onClose={toggleGuestForm}>
          <GuestForm onSuccess={toggleGuestForm}/>
      </MModal>
    </div>
  );
};

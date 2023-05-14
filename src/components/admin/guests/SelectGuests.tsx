import React from "react";
import { GuestPill, MModal, DottedLabel, Wrap, UIButton } from "@components/common";
import { GuestType, Maybe } from "@gql/codegen/graphql";
import { GuestSelect } from "@components/admin";

interface SelectGuestsProps {
  getSelected: (selected: string[]) => void;
  className?: string;
  currentGuests?: Maybe<Maybe<GuestType>[]> | undefined;
}
export default function SelectGuests(props: SelectGuestsProps){
  const { getSelected, className, currentGuests } = props;
  const [guests, setGuests] = React.useState<Set<Maybe<GuestType>>>(new Set());
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
        currentGuests?.forEach(guest => setGuests(curr => curr.add(guest)))
  }, [currentGuests])

  function returnSelected(){
    getSelected(Array.from(guests).map(guest => String(guest?.guestId)));
  }

  function handleRemoveGuest(guest: GuestType){
    setGuests(curr => { curr.delete(guest); return curr})
    returnSelected();
  }

  function handleAddGuest(guest: GuestType){
    setGuests(curr => curr.add(guest))
    returnSelected();
    toggleModal();
  }

  const toggleModal = () => setModalOpen(curr => !curr);

  return (
    <div className={className}>
      <DottedLabel>Guests</DottedLabel>
      <div className="relative flex flex-col gap-1 border p-1 rounded-lg border-red-100/40">
        {Array.from(guests).length > 0 &&
          <Wrap>
            {Array.from(guests).map(guest => (
              <GuestPill onRemove={handleRemoveGuest} key={guest?.guestId} guest={guest}/>))}
          </Wrap> }
        <UIButton className="w-fit self-end" variant="Black"
            onClick={toggleModal} type="button" >+ Add Guest</UIButton>
        <MModal title="Add Guest" open={modalOpen} onClose={toggleModal}>
          <div className="flex gap-3 flex-col">
            <GuestSelect title="Previous Guests" onSelect={handleAddGuest}/>
            <UIButton className="w-fit self-end" variant="Yellow"
                type="button" onClick={toggleModal}>Cancel</UIButton>
          </div>
        </MModal>
      </div>
    </div>
  )
};

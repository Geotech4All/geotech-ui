import React from "react";
import { GuestPill, Button, MModal } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectPreviousGuests } from "@store/slices";
import { GuestType, GuestTypeEdge, Maybe } from "@gql/codegen/graphql";
import { GuestSelect } from "@components/admin";

interface SelectGuestsProps {
  getSelected: (indexes: number[]) => void;
  className?: string;
}
export default function SelectGuests(props: SelectGuestsProps){
  const { getSelected, className } = props;
  const previousGuests = useAppSelector(selectPreviousGuests);
  const [chosenGuests, setChosenGuests] = React.useState<Maybe<GuestTypeEdge>[]>()
  const [modalOpen, setModalOpen] = React.useState(false);
  const guestIndexes = React.useMemo(() => new Set<number>(), []);

  React.useEffect(() => {
    setChosenGuests(previousGuests?.edges.filter(guest => (
      guestIndexes.has(parseInt(guest?.node?.guestId ?? ""))))
    )
  }, [guestIndexes, previousGuests])

  function returnSelected(){
    const selectedIndexes = Array.from(guestIndexes.values())
    getSelected(selectedIndexes);
  }

  function handleRemoveGuest(guest: GuestType){
    guestIndexes.delete(parseInt(guest.guestId ?? ""));
    returnSelected();
  }

  function handleAddGuest(guest: GuestType){
    guestIndexes.add(parseInt(guest.guestId ?? ""));
    returnSelected();
  }

  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <div className={className}>
      <label className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold"> Guests</label>
      <div className="relative flex flex-col gap-1 border p-1 rounded-3xl border-red-100/40">
        {chosenGuests && chosenGuests?.length > 0 &&
          <ul className="bg-red-50 p-1 rounded-3xl flex gap-2 items-center border border-red-300/20">
            {chosenGuests?.map(guest => (
              <GuestPill
                onRemove={handleRemoveGuest}
                key={guest?.node?.guestId}
                guest={guest?.node}/>)
            )}
          </ul>
        }
        <Button
          onClick={handleModalOpen}
          type="button"
          className="bg-red-500 text-white self-end font-semibold p-2 rounded-3xl transition-all active:bg-red-600 hover:bg-red-600">+ Add Guest</Button>
        <MModal
          title="Add Host"
          open={modalOpen} onClose={handleModalClose}>
          <div className="flex gap-3 flex-col">
            <GuestSelect
              title="Previous Guests"
              guests={previousGuests?.edges ?? []}
              onSelect={handleAddGuest}/>
            <Button
              className="bg-red-500 hover:bg-red-600 active:bg-red-600 transition-all self-end p-1 rounded-md mt-3 text-white px-4"
              type="button"
              onClick={handleModalClose}>Cancel</Button>
          </div>
        </MModal>
      </div>
    </div>
  )
};

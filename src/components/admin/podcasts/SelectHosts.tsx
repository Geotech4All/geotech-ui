import React from "react";
import { Button, MModal, UserPill, UserSelect } from "@components/common";
import { Maybe, UserType } from "@gql/codegen/graphql";
import { useAppSelector } from "@store/hooks";
import { selectRecentHosts, selectStaffList } from "@store/slices";
import StaffSelect from "../staff/StaffSelect";

interface SelectHostsProps {
  getSelected: (selected: number[]) => void;
}
export default function SelectHosts(props: SelectHostsProps){
  const { getSelected } = props;
  const [chosenHosts, setChosenHosts] = React.useState<Maybe<UserType>[]>()
  const [modalOpen, setModalOpen] = React.useState(false);
  const prevHosts = useAppSelector(selectRecentHosts);
  const staff = useAppSelector(selectStaffList);
  const hostIndexes = new Set<number>()

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  function updateChosen(){
    setChosenHosts(prevHosts.hosts?.filter(host => (
      host && hostIndexes.has(parseInt(host.id))))
    );
    const vals = hostIndexes.values();
    getSelected(Array.from(vals))
  }

  function handleAddHost(user: UserType){
    hostIndexes.add(parseInt(user.id));
    updateChosen();
    handleModalClose();
  }

  function handleRemoveHost(user: UserType){
    hostIndexes.delete(parseInt(user?.id))
    updateChosen();
  }

  return (
    <div>
      <label className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold"> Hosts</label>
      <div className="relative flex flex-col gap-1 border p-1 rounded-3xl border-red-100/40 max-w-md ">
        {chosenHosts && chosenHosts?.length > 0 &&
          <ul className="bg-red-50 p-1 rounded-3xl flex gap-2 items-center border border-red-300/20">
            {chosenHosts?.map(host => <UserPill onRemove={handleRemoveHost} key={host?.id} user={host}/>)}
          </ul>
        }
        <Button
          onClick={handleModalOpen}
          type="button"
          className="bg-red-500 text-white self-end font-semibold p-2 rounded-xl transition-all active:bg-red-600 hover:bg-red-600">+ Add Host</Button>
        <MModal
          title="Add Host"
          open={modalOpen} onClose={handleModalClose}>
          <div className="flex gap-3 flex-col">
            <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
              <UserSelect
                className="flex-1"
                title="Previous Hosts"
                onSelect={handleAddHost}
                users={prevHosts.hosts ?? []}/>
              <StaffSelect 
                className="flex-1"
                title="Staff list"
                onSelect={handleAddHost}
                staff={staff}/>
            </div>
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

import React from "react";
import { HostType, Maybe, UserType } from "@gql/codegen/graphql";
import { useRecentHosts, useStaffList } from "@gql/requests/queries/hooks";
import { StaffSelect } from "@components/admin";
import { Button, CenterSLoadingRing, DottedLabel, MModal, UIButton, UserPill, UserSelect, Wrap } from "@components/common";

interface SelectHostsProps {
  getSelected: (selected: string[]) => void;
  className?: string;
  currentHosts?: Maybe<Maybe<HostType>[]> | undefined;
}
export default function SelectHosts(props: SelectHostsProps){
  const { getSelected, className, currentHosts } = props;
  const { loading, data } = useRecentHosts();
  const { loading: sLoading, data: sData } = useStaffList();
  const oldHosts = currentHosts ? currentHosts.map(host => host?.user as Maybe<UserType>) : []
  const [hosts, setHosts] = React.useState<Set<Maybe<UserType>>>(new Set(oldHosts));
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    updateChosen()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hosts])

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  function updateChosen(){
    getSelected(Array.from(hosts).map(host => String(host?.id)))
  }

  function handleAddHost(user: UserType){
    setHosts(curr => curr.add(user));
    updateChosen();
    handleModalClose();
  }

  function handleRemoveHost(user: UserType){
    setHosts(curr => { curr.delete(user); return curr })
    updateChosen();
  }

  if (loading || sLoading ) return <CenterSLoadingRing />;


  return (
    <div className={className}>
      <DottedLabel>Hosts</DottedLabel>
      <div className="relative flex flex-col gap-1 border p-1 rounded-lg border-black/5">
        {Array.from(hosts).length > 0 &&
          <Wrap>
            {Array.from(hosts).map(host => <UserPill onRemove={handleRemoveHost} key={host?.id} user={host}/>)}
          </Wrap> }
        <UIButton variant="Black" className="w-fit self-end"
            onClick={handleModalOpen} type="button" >+ Add Host</UIButton>
        <MModal title="Add Host" open={modalOpen} onClose={handleModalClose}>
          <div className="flex gap-3 flex-col">
            <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
              <UserSelect className="flex-1" title="Previous Hosts"
                onSelect={handleAddHost} users={data?.hosts ?? []}/>
                <StaffSelect onSelect={handleAddHost} staff={sData?.staff ?? []}/>
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

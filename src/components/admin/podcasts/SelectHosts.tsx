import { Button, UserPill } from "@components/common";
import { useAppSelector } from "@store/hooks";
import { selectRecentHosts, setRecentHosts } from "@store/slices";
import React from "react";

export default function SelectHosts(){
  const prevHosts = useAppSelector(selectRecentHosts);
  const hostIndexes = new Set<number>()
  hostIndexes.add(1)
  const newHosts = prevHosts.hosts?.filter(host => host && hostIndexes.has(parseInt(host.id)))

  return (
    <div>
      <label className="before:content-['\2022'] before:text-lg before:text-red-500 text-black/60 font-semibold"> Hosts</label>
      <div className="relative flex flex-col gap-1 border p-1 rounded-3xl border-red-100/50 max-w-md ">
        <ul>
          {newHosts?.map(host => <UserPill key={host?.id} user={host}/>)}
        </ul>
        <Button
          className="bg-red-500 text-white self-end font-semibold p-2 rounded-xl transition-all active:bg-red-600 hover:bg-red-600">+ Add Host</Button>
      </div>
    </div>
  )
};

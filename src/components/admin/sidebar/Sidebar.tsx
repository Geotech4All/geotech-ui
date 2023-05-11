import React, { useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { motion } from "framer-motion";
import { SidebarUrl, SidebarUrls, SideBrand, User } from "@components/admin";
import { useAppSelector } from "@features/store/hooks";
import { AdminState, selectAdmin } from "@store/slices";

interface SidebarProps {
  getState?: (state: AdminState) => void
}

export default function Sidebar(props: SidebarProps){
  const { getState } = props;
  const admin = useAppSelector(selectAdmin)

  useEffect(() => {
    getState && getState(admin);
  }, [admin, getState])

  return (
    <motion.div
      className={`
        shadow-lg justify-between overflow-y-auto
        flex-col flex py-3 p-2 fixed left-2 top-1/2
        -translate-y-1/2 rounded-lg shadow-black/30 h-[98vh]`}
      animate={{ width: admin.sidebarWidth }}>
      <div className="flex flex-col gap-3">
        <SideBrand />
        <SidebarUrls />
      </div>
      <div className="flex items-center py-3 flex-col gap-2">
        <User />
        <SidebarUrl icon={AiOutlineLogout} name="Logout" path={`/admin/signout`} />
      </div>
  </motion.div>
  )
};

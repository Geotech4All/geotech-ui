import React from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@components/admin";
import type { AdminState } from "@store/slices"

export default function SidebarLayout(page: React.ReactElement) {
  const [state, setState] = React.useState<AdminState>()

  function getSidebarState (state: AdminState) {
    setState(state);
  }

  return (
    <motion.div
      animate={{ marginLeft: (state?.sidebarWidth ?? 50) + 15 }}
    >
      <Sidebar getState={getSidebarState}/>
      { page }
    </motion.div>
  )
};

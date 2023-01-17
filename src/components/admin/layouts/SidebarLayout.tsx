import React from "react";
import { motion } from "framer-motion";
import { EnsureAuth } from "@components/auth";
import useIsLargeScreen from "@components/common/hooks";
import { AdminNavBar, Sidebar } from "@components/admin";
import type { AdminState } from "@store/slices"

export default function SidebarLayout(page: React.ReactElement) {
  const [state, setState] = React.useState<AdminState>();
  const [isLarge, setIsLarge] = React.useState(false);
  const [leftMargin, setLeftMargin] = React.useState<string | number>();
  const [topPadding, setTopPadding] = React.useState<string | number>();

  const isLargeDevice = useIsLargeScreen()
  function getSidebarState (state: AdminState) {
    setState(state);
  }

  React.useEffect(() => {
    setIsLarge(isLargeDevice);
    setLeftMargin(isLarge ? ((state?.sidebarWidth ?? 50) + 15) : "auto")
    setTopPadding(isLarge ? "auto" : 50)
  }, [isLargeDevice, setIsLarge, state, isLarge])

  return (
    <motion.div
      className=""
      animate={{ marginLeft: leftMargin }}
    >
      {!isLarge ? <AdminNavBar /> : <Sidebar getState={getSidebarState}/>}
      <motion.div
        animate={{ paddingTop: topPadding }}
        className="">
        <EnsureAuth>{ page }</EnsureAuth>
      </motion.div>
    </motion.div>
  )
};

import React from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { selectAdmin, setSidebarWidth, setSidebarOpen } from "@store/slices";
import Image from "next/image";
import { Button } from "@components/common";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

export default function SideBrand() {
  const admin = useAppSelector(selectAdmin);
  const dispatch = useAppDispatch();

  function updateSidebar(){
    if (admin.sidebarOpen) {
      dispatch(setSidebarOpen(false))
      dispatch(setSidebarWidth(70))
    } else {
      dispatch(setSidebarOpen(true))
      dispatch(setSidebarWidth(250))
    }
  }

  return (
    <div className="flex min-h-[37px] items-center justify-between">
      {admin.sidebarOpen && (
        <motion.span className="flex h-full items-center justify-center">
          <Image
            className="w-full max-w-[90%]"
            width={1031}
            height={207}
            src="/images/gtech.png"
            alt="small geotech logo"/>
        </motion.span>
      )}
      <Button
        className={`flex items-center transition-all ${!admin.sidebarOpen && "hover:pl-7"} justify-center flex-1 text-lg h-full`}
        onClick={updateSidebar}
        iconSize={25}
        icon={admin.sidebarOpen ? FaAngleDoubleLeft : FaAngleDoubleRight} />
    </div>
  )
}

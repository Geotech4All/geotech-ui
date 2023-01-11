import { MostListenedPodcast, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "pages/_app";
import React from "react";

const DashBoard: NextPageWithLayout = () => {
  return (
    <div>
      <MostListenedPodcast />
    </div>
  )
};

DashBoard.getLayout = SidebarLayout;

export default DashBoard;

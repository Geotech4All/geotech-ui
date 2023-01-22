import { SidebarLayout } from "@components/admin";
import { TipTap } from "@components/common";
import { NextPageWithLayout } from "@pages/_app";
import React from "react";

const NewPost: NextPageWithLayout = () => {
  return (
    <div className="p-4">
      <TipTap />
    </div>
  );
};
NewPost.getLayout = SidebarLayout;

export default NewPost;

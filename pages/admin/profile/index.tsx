import { SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import React from "react";

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div>Your profile</div>
  );
};

ProfilePage.getLayout = SidebarLayout;

export default ProfilePage;

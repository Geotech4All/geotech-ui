import { ProfileForm, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import React from "react";

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div className="w-full">
      <ProfileForm />
    </div>
  );
};

ProfilePage.getLayout = SidebarLayout;

export default ProfilePage;

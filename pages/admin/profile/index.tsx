import { ProfileForm, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";
import React from "react";

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const goToDashboard = () => router.push("/admin/dashboard");
  return (
    <div className="w-full">
      <ProfileForm onSave={goToDashboard}/>
    </div>
  );
};

ProfilePage.getLayout = SidebarLayout;

export default ProfilePage;

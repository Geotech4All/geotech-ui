import React from "react";
import Head from "next/head";
import { NextPageWithLayout } from "@pages/_app";
import { NewStaff, SidebarLayout, StaffList } from "@components/admin";
import { useStaffList } from "@gql/requests/queries/hooks";
import { PageLoadingRing, SomethingWentWrong } from "@components/common";


const StaffPage: NextPageWithLayout = () => {
  const { loading, error, data } = useStaffList()

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />

  return (
    <>
      <Head>
        <title>Geotech Staff</title>
      </Head>
      <main className="p-4 flex flex-col gap-3">
        <StaffList staff={data?.staff}/>
        <NewStaff />
      </main>
    </>
  )
};

StaffPage.getLayout = SidebarLayout;

export default StaffPage;

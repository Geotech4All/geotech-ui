import React from "react";
import Head from "next/head";
import { NextPageWithLayout } from "@pages/_app";
import { NewStaff, SidebarLayout, StaffList } from "@components/admin";
import { useStaffList } from "@gql/requests/queries/hooks";
import { Button, PageLoadingRing, SomethingWentWrong } from "@components/common";


const StaffPage: NextPageWithLayout = () => {
  const { loading, error, data } = useStaffList()
  const [addStaff, setAddStaff] = React.useState(false);

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />

  const handleAddStaff = () => setAddStaff(true);

  return (
    <>
      <Head>
        <title>Geotech Staff</title>
      </Head>
      <main className="p-4 flex flex-col gap-3">
        <StaffList staff={data?.staff}/>
        {addStaff ? <NewStaff /> : (
          <Button
            onClick={handleAddStaff}
            className={`
            self-start bg-ui-red-200/80 p-2 rounded-md hover:bg-ui-red-200/60 active:bg-ui-red-200/60
            font-semibold text-lg text-white transition`}>+ New Staff</Button>
        )}
      </main>
    </>
  )
};

StaffPage.getLayout = SidebarLayout;

export default StaffPage;

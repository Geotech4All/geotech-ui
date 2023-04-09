import { OpportunityForm, SidebarLayout } from "@components/admin";
import { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import React from "react";


const NewOpportunity: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>New - Geotech Opportunties</title>
      </Head>
      <main className="p-3 flex gap-3 flex-col">
        <h1
          className="text-lg bg-ui-red-100/70 p-3 rounded-lg text-white font-semibold">New Opportuntiy</h1>
        <OpportunityForm />
      </main>
    </>
  )
}

NewOpportunity.getLayout = SidebarLayout;

export default NewOpportunity;

import { OpportunityList, SidebarLayout } from "@components/admin";
import { Button } from "@components/common";
import { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import Link from "next/link";
import React from "react";


const Opportunities: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Geotech Opportunities</title>
      </Head>
      <main className="relative p-3">
        <OpportunityList admin/>
        <Link href="/admin/opportunities/new" className={`
          bg-ui-red-200/60 p-2 text-white font-semibold rounded-md
          absolute top-2 right-2 text-lg
          hover:bg-ui-red-200/80 active:bg-ui-red-200/80 transition`}>+ New Opportunity</Link>
      </main>
    </>
  )
};

Opportunities.getLayout = SidebarLayout;

export default Opportunities;

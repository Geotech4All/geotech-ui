import { OpportunityList, SidebarLayout } from "@components/admin";
import { ButtonLink } from "@components/common";
import { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import React from "react";


const Opportunities: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Geotech Opportunities</title>
      </Head>
      <main className="relative z-0 p-3">
        <OpportunityList admin/>
        <ButtonLink href="/admin/opportunities/new">+ New Opportunity</ButtonLink>
      </main>
    </>
  )
};

Opportunities.getLayout = SidebarLayout;

export default Opportunities;

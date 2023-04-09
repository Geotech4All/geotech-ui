import { OpportunityList } from "@components/admin";
import { NavBarLayout } from "@components/frontFacing";
import { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import React from "react";


const OpportunitiesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Opportunities - Geotech</title>
      </Head>
      <div className="p-3 md:pt-12">
        <OpportunityList />
      </div>
    </>
  )
}

OpportunitiesPage.getLayout = NavBarLayout;

export default OpportunitiesPage;

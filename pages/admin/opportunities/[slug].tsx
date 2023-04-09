import { OpportunityForm, SidebarLayout } from "@components/admin";
import { PageLoadingHalo, SomethingWentWrong } from "@components/common";
import { useOpportunity } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";


const UpdateOpportunity: NextPageWithLayout = () => {
  const router = useRouter()
  const slug = router.query.slug?.toString()
  const { data, loading, error } = useOpportunity({ opportunityId: slug?.split("-")[0] ?? "" })
  
  if (loading) return <PageLoadingHalo />
  if (error) return <SomethingWentWrong error={error}/>

  return (
    <>
      <Head>
        <title>{data?.opportunity?.title} - Edit</title>
      </Head>
      <main className="flex flex-col gap-3">
        <h1
          className="text-lg bg-ui-red-100/70 p-3 rounded-lg text-white font-semibold">Update Opportuntiy</h1>
        <OpportunityForm defaultValue={data?.opportunity}/>
      </main>
    </>
  )
}

UpdateOpportunity.getLayout = SidebarLayout;

export default UpdateOpportunity;

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "@pages/_app";
import { SidebarLayout } from "@components/admin";
import { StaffPermissionForm } from "@components/admin"
import { useStaffDetail } from "@gql/requests/queries/hooks";
import { GImage, Heading, PageLoadingRing, SomethingWentWrong } from "@components/common";


const StaffEditPage: NextPageWithLayout = () => {
  const { staffId } = useRouter().query
  const { loading, error, data, refetch } = useStaffDetail({ staffId: staffId?.toString() ?? "" })

  React.useEffect(() => {
    refetch({ staffId: staffId?.toString() })
  }, [staffId, refetch])

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />

  return (
    <>
        <Head>
            <title>Geotech - Staff Permisions</title>
        </Head>
        <main className="p-2 md:p-5 flex flex-col gap-3">
            <div className="bg-gray-50 p-4 rounded-md">
                <Heading className="text-black/50">{data?.staff?.user?.fullName}</Heading>
                <address className="text-xl font-semibold">{data?.staff?.user?.email}</address>
            </div>
            <div className="flex gap-3 flex-col p-4 md:flex-row">
                <div className="flex flex-col flex-1 items-center gap-1">
                    <GImage className="max-h-[80vh] rounded-lg aspect-square"
                        alt={data?.staff?.user?.fullName ?? "Staff"}
                        src={data?.staff?.user?.profile?.image ?? "/images/profile.svg"} />
                </div>
                <div className="flex-1">
                    <StaffPermissionForm defaultValue={data?.staff} />
                </div>
            </div>
        </main>
    </>
  )
};

StaffEditPage.getLayout = SidebarLayout;

export default StaffEditPage;

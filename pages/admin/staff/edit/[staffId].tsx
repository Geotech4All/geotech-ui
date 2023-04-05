import { SidebarLayout } from "@components/admin";
import { GImage, PageLoadingRing, SomethingWentWrong } from "@components/common";
import { useStaffDetail } from "@gql/requests/queries/hooks";
import { NextPageWithLayout } from "@pages/_app";
import { useRouter } from "next/router";
import React from "react";
import StaffPermissionForm from "../../../../src/components/admin/staff/StaffPermissionForm";


const StaffEditPage: NextPageWithLayout = () => {
  const { staffId } = useRouter().query
  const { loading, error, data, refetch } = useStaffDetail({ staffId: staffId?.toString() ?? "" })

  React.useEffect(() => {
    refetch({ staffId: staffId?.toString() })
  }, [staffId, refetch])

  if (loading) return <PageLoadingRing />
  if (error) return <SomethingWentWrong error={error} />

  console.log(data)

  return (
    <div className={`
      flex flex-col md:flex-row w-full shadow-xl rounded-xl gap-4
      min-h-[95vh] justify-evenly items-center p-4 md:p-9`}>

      <div className="flex flex-col items-center gap-1">
        <GImage
          className="max-w-xs border-gray-300 w-full rounded-full aspect-square"
          src={data?.staff?.user?.profile?.image ?? "/images/profile.svg"}
          alt={data?.staff?.user?.fullName ?? "Staff"} />
        <address className="text-xl font-semibold">{data?.staff?.user?.email}</address>
        <h2 className="text-xl">{data?.staff?.user?.fullName}</h2>
      </div>
      <StaffPermissionForm defaultValue={data?.staff} />
    </div>
  )
};

StaffEditPage.getLayout = SidebarLayout;

export default StaffEditPage;

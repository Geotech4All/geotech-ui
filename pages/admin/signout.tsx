import { PageLoadingRing } from "@components/common";
import { removeAuthTokens } from "@utils/auth";
import { useRouter } from "next/router";
import React from "react";

export default function SignOut(){
  const router = useRouter()
  
  React.useEffect(() => {
    removeAuthTokens()
    router.replace("/admin/signin")
  }, [router])

  return <PageLoadingRing />
};

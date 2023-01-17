import { refreshToken } from "@api/refreshToken";
import { getAuthTokens, setAuthTokens } from "@utils/auth";
import React from "react";
import LoginAgainPrompt from "../forms/LoginAgainPrompt";

interface EnsureAuthProps {
  children?: React.ReactNode;
};
export default function EnsureAuth(props: EnsureAuthProps){
  const { children } = props;
  const [authFailed, setAuthFailed] = React.useState(false);

  async function handleRefresh(){
    const token = getAuthTokens().refreshToken;
    const result = await refreshToken(token ?? "")
    const newToken = result.data?.token?.token
    const newRefreshToken = result.data?.token?.refreshToken
    setAuthTokens(newToken ?? "", newRefreshToken ?? "")
    if (result.errors || result.data?.token?.errors) setAuthFailed(true);
  }
  React.useEffect(() => {
    const interval = setInterval(handleRefresh, 540000)
    handleRefresh()
    return () => clearInterval(interval)
  }, [])

  if (authFailed) return <LoginAgainPrompt />
  
  return (
    <div>
      {children}
    </div>
  );
};

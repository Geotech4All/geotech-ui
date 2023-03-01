import { refreshToken } from "@api/refreshToken";
import { getAuthTokens, setAuthTokens } from "@utils/auth";
import React from "react";
import { LoginAgainPrompt } from "@components/auth";
import { useCurrentlyLoggenInUser } from "@gql/requests/queries/hooks";
import { useAppDispatch } from "@store/hooks";
import { setUser } from "@store/slices";

interface EnsureAuthProps {
  children?: React.ReactNode;
};
export default function EnsureAuth(props: EnsureAuthProps){
  const { children } = props;
  const [authFailed, setAuthFailed] = React.useState(false);
  const { refetch } = useCurrentlyLoggenInUser();
  const dispatch = useAppDispatch();

  const handleRefresh = React.useCallback(async () => {
    const token = getAuthTokens().refreshToken;
    const result = await refreshToken(token ?? "")
    const newToken = result.data?.token?.token
    const newRefreshToken = result.data?.token?.refreshToken
    setAuthTokens(newToken ?? "", newRefreshToken ?? "")
    if (newToken) {
      refetch().then(res => {
        dispatch(setUser(res.data.user))
      }).catch(err => console.log(err));
    }
    if (result.errors || result.data?.token?.errors) setAuthFailed(true);
  }, [dispatch, refetch])

  React.useEffect(() => {
    const interval = setInterval(handleRefresh, 540000)
    handleRefresh()
    return () => clearInterval(interval)
  }, [handleRefresh])

  if (authFailed) return <LoginAgainPrompt />
  
  return (
    <div>
      {children}
    </div>
  );
};

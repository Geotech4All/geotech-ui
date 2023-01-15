import type { ObtainJsonWebToken } from "@gql/codegen/graphql";
import { useAppDispatch } from "@store/hooks";
import { setUser } from "@store/slices";

type Dispatch = ReturnType<typeof useAppDispatch>

const tokenName = "token"
const refreshName = "refresh"

export function setAuthTokens(token: string, refreshToken: string): void{
  localStorage.setItem(tokenName, token);
  localStorage.setItem(refreshName, refreshToken);
};

export function removeAuthTokens() {
  localStorage.removeItem(tokenName)
  localStorage.removeItem(refreshName)
};

export function getAuthTokens() {
  const token = localStorage.getItem(tokenName);
  const refreshToken = localStorage.getItem(refreshName);
  return { token, refreshToken };
};

/**
 * Stores the user authToken and refreshToken in localStorage
 */
export async function authenticateUser(loginResponse: ObtainJsonWebToken, disptach: Dispatch){
  const token = loginResponse.token ?? "";
  const refreshToken = loginResponse.refreshToken ?? "";
  setAuthTokens(token, refreshToken);
  if (loginResponse.user) {
    disptach(setUser(loginResponse.user))
  }
}

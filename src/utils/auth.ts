export function setAuthTokens(token: string, refreshToken: string): void{
  const tokenName = "token"
  const refreshName = "refresh"
  localStorage.setItem(tokenName, token)
  localStorage.setItem(refreshName, refreshToken)
}

/**
 * Stores the user authToken and refreshToken in localStorage
 */
export function authenticateUser(token: string, refreshToken: string){
  setAuthTokens(token, refreshToken);
}

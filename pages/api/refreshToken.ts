import { client } from "@gql/config";
import { REFRESH_TOKEN } from "@gql/requests/mutations";
import type { Maybe, RefreshToken, MutationRefreshTokenArgs } from "@gql/codegen/graphql";

export async function refreshToken(refreshToken:string) {
  return client.mutate<{ token: Maybe<RefreshToken> }, MutationRefreshTokenArgs>({
    mutation: REFRESH_TOKEN,
    variables: {
      refreshToken
    }
  })
}

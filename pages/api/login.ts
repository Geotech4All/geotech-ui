import { client } from "@gql/config";
import type { Maybe, ObtainJsonWebToken, MutationTokenAuthArgs } from "@gql/codegen/graphql";
import { TOKEN_AUTH } from "@gql/requests/mutations";

export async function login(email: string, password: string) {
  return client.mutate<{ auth: Maybe<ObtainJsonWebToken>}, MutationTokenAuthArgs>({
    mutation: TOKEN_AUTH,
    variables: {
      password,
      email
    }
  })
}

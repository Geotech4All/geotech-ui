import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"
import { getAuthTokens } from "@utils/auth";
import { createUploadLink } from "apollo-upload-client";

const ApiUrl = process.env.NEXT_PUBLIC_API_URL

const uploadLink = createUploadLink({
  uri: ApiUrl,
})

const authLink = setContext((_, { headers }) => {
  const token = getAuthTokens().token;
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache()
})

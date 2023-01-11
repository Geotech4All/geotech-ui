import { ApolloClient, InMemoryCache } from "@apollo/client";

const ApiUrl = process.env.NEXT_PUBLIC_API_URL

export const client = new ApolloClient({
  uri: ApiUrl,
  cache: new InMemoryCache()
})

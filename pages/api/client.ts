import type { Maybe, PostTypeConnection, QueryPopularPostsArgs } from "@gql/codegen/graphql";
import { client } from "@gql/config";
import { POPULAR_POSTS } from "@gql/requests/queries";
import { dummyPodcast } from "./contants";


export async function getMostPopularPosts(variables?: QueryPopularPostsArgs): Promise<{ posts: Maybe<PostTypeConnection>}> {
  const queryResult = await client.query<
    { posts: Maybe<PostTypeConnection>},
    QueryPopularPostsArgs>({
      query: POPULAR_POSTS,
      variables
  }).catch(err => console.log(err))
  if (queryResult) {
    if (queryResult.data.posts?.edges && queryResult.data?.posts?.edges.length > 4) {
      return queryResult.data
    }
  }
  return dummyPodcast
}

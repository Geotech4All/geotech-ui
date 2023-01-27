import type { Maybe, PostTypeConnection, QueryPopularPostsArgs } from "@gql/codegen/graphql";
import { client } from "@gql/config";
import { POPULAR_POSTS } from "@gql/requests/queries";


export async function getMostPopularPosts(variables?: QueryPopularPostsArgs){
  return client.query<
    { posts: Maybe<PostTypeConnection>},
    QueryPopularPostsArgs>({
      query: POPULAR_POSTS,
      variables
  }).catch(err => console.log(err))
}

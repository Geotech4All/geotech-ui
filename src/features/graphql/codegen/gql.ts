/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n": types.TokenAuthDocument,
    "\n  query MostListenedToPodcast {\n      podcasts: mostListenedToPodcasts {\n          edges {\n              node {\n                  audio\n                  dateAdded\n                  description\n                  podcastId\n                  title\n                  listens\n              }\n          }\n      }\n  }\n": types.MostListenedToPodcastDocument,
    "\n  query RecentHosts {\n    hosts: recentHosts {\n      id\n      fullName\n      email\n      profile {\n        image\n        profileId\n      }\n    }\n  }\n": types.RecentHostsDocument,
    "\n  query StaffList {\n    staff: staffList {\n      canCreatePost\n      staffId\n      id\n      user {\n        fullName\n        id\n        profile {\n          profileId\n          image\n        }\n      }\n    }\n  }\n": types.StaffListDocument,
    "\n  query PreviousGuests {\n    guests: previousGuests {\n      edges {\n        node {\n          id\n          guestId\n          name\n          image\n        }\n      }\n    }\n  }\n": types.PreviousGuestsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MostListenedToPodcast {\n      podcasts: mostListenedToPodcasts {\n          edges {\n              node {\n                  audio\n                  dateAdded\n                  description\n                  podcastId\n                  title\n                  listens\n              }\n          }\n      }\n  }\n"): (typeof documents)["\n  query MostListenedToPodcast {\n      podcasts: mostListenedToPodcasts {\n          edges {\n              node {\n                  audio\n                  dateAdded\n                  description\n                  podcastId\n                  title\n                  listens\n              }\n          }\n      }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RecentHosts {\n    hosts: recentHosts {\n      id\n      fullName\n      email\n      profile {\n        image\n        profileId\n      }\n    }\n  }\n"): (typeof documents)["\n  query RecentHosts {\n    hosts: recentHosts {\n      id\n      fullName\n      email\n      profile {\n        image\n        profileId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query StaffList {\n    staff: staffList {\n      canCreatePost\n      staffId\n      id\n      user {\n        fullName\n        id\n        profile {\n          profileId\n          image\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query StaffList {\n    staff: staffList {\n      canCreatePost\n      staffId\n      id\n      user {\n        fullName\n        id\n        profile {\n          profileId\n          image\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PreviousGuests {\n    guests: previousGuests {\n      edges {\n        node {\n          id\n          guestId\n          name\n          image\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PreviousGuests {\n    guests: previousGuests {\n      edges {\n        node {\n          id\n          guestId\n          name\n          image\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
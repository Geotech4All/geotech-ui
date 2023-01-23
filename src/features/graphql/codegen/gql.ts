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
    "\n  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $guestIds: [ID]) {\n    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, guestIds: $guestIds) {\n      success\n      errors {\n        field\n        messages\n      }\n      podcast {\n        coverPhoto\n        dateAdded\n        description\n        listens\n        title\n        podcastId\n      }\n    }\n  }\n": types.CreateUpdatePodcastDocument,
    "\n  mutation CreateUpdatePost($body: String!, $abstract: String, $coverPhoto: Upload, $title: String!) {\n    createUpdatePost(body: $body, abstract: $abstract, coverPhoto: $coverPhoto, title: $title) {\n      success\n      errors {\n        field\n        messages\n      }\n      post {\n        postId\n        abstract\n        author {\n          fullName\n          email\n        }\n        body\n        dateAdded\n        title\n        readLength\n      }\n    }\n  }\n": types.CreateUpdatePostDocument,
    "\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n": types.TokenAuthDocument,
    "\n  mutation RefreshToken($refreshToken: String!) {\n    token: refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n": types.RefreshTokenDocument,
    "\n  query MostListenedToPodcasts(\n    $after: String, $first: Int,\n    $offset: Int, $before: String,\n    $last: Int, $mostListenedToPodcastsId: Float,\n    $titleIcontains: String, $titleIstartswith: String, $title: String) {\n    podcasts: mostListenedToPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first, last: $last,\n      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,\n      title_Istartswith: $titleIstartswith, title: $title) {\n      edges {\n        node {\n          coverPhoto\n          dateAdded\n          description\n          guests {\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n          listens\n          podcastId\n          title\n          id\n        }\n      }\n    }\n  }\n": types.MostListenedToPodcastsDocument,
    "\n  query RecentHosts {\n    hosts: recentHosts {\n      id\n      fullName\n      email\n      profile {\n        image\n        profileId\n      }\n    }\n  }\n": types.RecentHostsDocument,
    "\n  query StaffList {\n    staff: staffList {\n      canCreatePost\n      staffId\n      id\n      user {\n        fullName\n        id\n        profile {\n          profileId\n          image\n        }\n      }\n    }\n  }\n": types.StaffListDocument,
    "\n  query PreviousGuests {\n    guests: previousGuests {\n      edges {\n        node {\n          id\n          guestId\n          name\n          image\n        }\n      }\n    }\n  }\n": types.PreviousGuestsDocument,
    "\n  query AllPodcasts(\n    $offset: Int, $before: String,\n    $after: String, $first: Int,\n    $last: Int, $id: Float, $title_Icontains: String,\n    $title_Istartswith: String, $title: String\n  ) {\n    podcasts: allPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first,\n      last: $last, id: $id,\n      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,\n      title: $title\n    ) {\n      edges {\n        node {\n          podcastId\n          title\n          description\n          listens\n          audio\n          coverPhoto\n          podcastId\n          guests {\n            guestId\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AllPodcastsDocument,
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
export function graphql(source: "\n  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $guestIds: [ID]) {\n    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, guestIds: $guestIds) {\n      success\n      errors {\n        field\n        messages\n      }\n      podcast {\n        coverPhoto\n        dateAdded\n        description\n        listens\n        title\n        podcastId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $guestIds: [ID]) {\n    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, guestIds: $guestIds) {\n      success\n      errors {\n        field\n        messages\n      }\n      podcast {\n        coverPhoto\n        dateAdded\n        description\n        listens\n        title\n        podcastId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUpdatePost($body: String!, $abstract: String, $coverPhoto: Upload, $title: String!) {\n    createUpdatePost(body: $body, abstract: $abstract, coverPhoto: $coverPhoto, title: $title) {\n      success\n      errors {\n        field\n        messages\n      }\n      post {\n        postId\n        abstract\n        author {\n          fullName\n          email\n        }\n        body\n        dateAdded\n        title\n        readLength\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUpdatePost($body: String!, $abstract: String, $coverPhoto: Upload, $title: String!) {\n    createUpdatePost(body: $body, abstract: $abstract, coverPhoto: $coverPhoto, title: $title) {\n      success\n      errors {\n        field\n        messages\n      }\n      post {\n        postId\n        abstract\n        author {\n          fullName\n          email\n        }\n        body\n        dateAdded\n        title\n        readLength\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RefreshToken($refreshToken: String!) {\n    token: refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation RefreshToken($refreshToken: String!) {\n    token: refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MostListenedToPodcasts(\n    $after: String, $first: Int,\n    $offset: Int, $before: String,\n    $last: Int, $mostListenedToPodcastsId: Float,\n    $titleIcontains: String, $titleIstartswith: String, $title: String) {\n    podcasts: mostListenedToPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first, last: $last,\n      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,\n      title_Istartswith: $titleIstartswith, title: $title) {\n      edges {\n        node {\n          coverPhoto\n          dateAdded\n          description\n          guests {\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n          listens\n          podcastId\n          title\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MostListenedToPodcasts(\n    $after: String, $first: Int,\n    $offset: Int, $before: String,\n    $last: Int, $mostListenedToPodcastsId: Float,\n    $titleIcontains: String, $titleIstartswith: String, $title: String) {\n    podcasts: mostListenedToPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first, last: $last,\n      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,\n      title_Istartswith: $titleIstartswith, title: $title) {\n      edges {\n        node {\n          coverPhoto\n          dateAdded\n          description\n          guests {\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n          listens\n          podcastId\n          title\n          id\n        }\n      }\n    }\n  }\n"];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPodcasts(\n    $offset: Int, $before: String,\n    $after: String, $first: Int,\n    $last: Int, $id: Float, $title_Icontains: String,\n    $title_Istartswith: String, $title: String\n  ) {\n    podcasts: allPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first,\n      last: $last, id: $id,\n      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,\n      title: $title\n    ) {\n      edges {\n        node {\n          podcastId\n          title\n          description\n          listens\n          audio\n          coverPhoto\n          podcastId\n          guests {\n            guestId\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllPodcasts(\n    $offset: Int, $before: String,\n    $after: String, $first: Int,\n    $last: Int, $id: Float, $title_Icontains: String,\n    $title_Istartswith: String, $title: String\n  ) {\n    podcasts: allPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first,\n      last: $last, id: $id,\n      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,\n      title: $title\n    ) {\n      edges {\n        node {\n          podcastId\n          title\n          description\n          listens\n          audio\n          coverPhoto\n          podcastId\n          guests {\n            guestId\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
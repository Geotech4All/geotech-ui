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
    "\n  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $podcastId: ID, $guestIds: [ID]) {\n    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, podcastId: $podcastId, guestIds: $guestIds) {\n      errors {\n        field\n        messages\n      }\n      success\n      podcast {\n        coverPhoto\n        dateAdded\n        description\n        listens\n        podcastId\n      }\n    }\n  }\n": types.CreateUpdatePodcastDocument,
    "\n  mutation CreateUpdatePost($title: String!, $abstract: String, $body: String!, $coverPhoto: Upload, $postId: ID) {\n    post: createUpdatePost(title: $title, abstract: $abstract, body: $body, coverPhoto: $coverPhoto, postId: $postId) {\n      errors {\n        field\n        messages\n      }\n      success\n      post {\n        abstract\n        id\n        body\n        coverPhoto\n        postId\n      }\n    }\n  }\n": types.CreateUpdatePostDocument,
    "\n  mutation DeletePost($postId: ID!) {\n    deletePost(postId: $postId) {\n      success\n      errors {\n        field\n        messages\n      }\n    }\n  }\n": types.DeletePostDocument,
    "\n  mutation TokenAuth($password: String!, $email: String) {\n    auth: tokenAuth(password: $password, email: $email) {\n      token\n      success\n      errors\n      user {\n        email\n        fullName\n        profile {\n          about\n          image\n          profileId\n        }\n      }\n      unarchiving\n      refreshToken\n    }\n  }\n": types.TokenAuthDocument,
    "\n  mutation RefreshToken($refreshToken: String!) {\n    token: refreshToken(refreshToken: $refreshToken) {\n      token\n      payload\n      success\n      errors\n      refreshToken\n    }\n  }\n": types.RefreshTokenDocument,
    "\n  mutation IncreasePostViewCount($postId: ID!) {\n    post: increasePostViewCount(postId: $postId) {\n      errors {\n        field\n        messages\n      field\n        messages\n      }\n      success\n      post {\n        postId\n        views\n      }\n    }\n  }\n": types.IncreasePostViewCountDocument,
    "\n  mutation IncreasePodcastListens($podcastId: ID!) {\n    podcast: increasePodcastListens(podcastId: $podcastId) {\n      errors {\n        field\n        messages\n      }\n      success\n      podcast {\n        listens\n        podcastId\n      }\n    }\n  }\n": types.IncreasePodcastListensDocument,
    "\n  query MostListenedToPodcasts(\n    $after: String, $first: Int,\n    $offset: Int, $before: String,\n    $last: Int, $mostListenedToPodcastsId: Float,\n    $titleIcontains: String, $titleIstartswith: String, $title: String) {\n    podcasts: mostListenedToPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first, last: $last,\n      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,\n      title_Istartswith: $titleIstartswith, title: $title) {\n      edges {\n        node {\n          coverPhoto\n          dateAdded\n          audio\n          description\n          guests {\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n          listens\n          podcastId\n          title\n          id\n        }\n      }\n    }\n  }\n": types.MostListenedToPodcastsDocument,
    "\n  query RecentHosts {\n    hosts: recentHosts {\n      id\n      fullName\n      email\n      profile {\n        image\n        profileId\n      }\n    }\n  }\n": types.RecentHostsDocument,
    "\n  query StaffList {\n    staff: staffList {\n      canCreatePost\n      staffId\n      id\n      user {\n        fullName\n        id\n        profile {\n          profileId\n          image\n        }\n      }\n    }\n  }\n": types.StaffListDocument,
    "\n  query PreviousGuests {\n    guests: previousGuests {\n      edges {\n        node {\n          id\n          guestId\n          name\n          image\n        }\n      }\n    }\n  }\n": types.PreviousGuestsDocument,
    "\n  query AllPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {\n    posts: allPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          dateAdded\n          postId\n          readLength\n          abstract\n          coverPhoto\n          title\n          author {\n            profile {\n              image\n            }\n            fullName\n          }\n        }\n      }\n    }\n  }\n": types.AllPostsDocument,
    "\n  query GetPodcastById($podcastId: ID!) {\n    podcast: getPodcastById(podcastId: $podcastId) {\n      audio\n      coverPhoto\n      dateAdded\n      description\n      guests {\n        id\n        guestId\n        image\n        name\n      }\n      hosts {\n        dateAdded\n        id\n        hostId\n        user {\n          fullName\n          email\n          profile {\n            image\n            profileId\n          }\n          id\n        }\n      }\n      title\n      podcastId\n      listens\n    }\n  }\n": types.GetPodcastByIdDocument,
    "\n  query AllPodcasts(\n    $offset: Int, $before: String,\n    $after: String, $first: Int,\n    $last: Int, $id: Float, $title_Icontains: String,\n    $title_Istartswith: String, $title: String\n  ) {\n    podcasts: allPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first,\n      last: $last, id: $id,\n      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,\n      title: $title\n    ) {\n      edges {\n        node {\n          podcastId\n          title\n          description\n          listens\n          audio\n          coverPhoto\n          podcastId\n          guests {\n            guestId\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.AllPodcastsDocument,
    "\n  query PopularPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {\n    posts: popularPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {\n      edges {\n        cursor\n        node {\n          author {\n            fullName\n            profile {\n              image\n              profileId\n            }\n          }\n          title\n          abstract\n          body\n          readLength\n          dateAdded\n          coverPhoto\n          postId\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n": types.PopularPostsDocument,
    "\n  query GetPostById($postId: ID!) {\n    post: getPostById(postId: $postId) {\n      id\n      author {\n        fullName\n        profile {\n          image\n        }\n      }\n      title\n      abstract\n      body\n      views\n      likes\n      dislikes\n      readLength\n      dateAdded\n      coverPhoto\n      postId\n    }\n  }\n": types.GetPostByIdDocument,
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
export function graphql(source: "\n  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $podcastId: ID, $guestIds: [ID]) {\n    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, podcastId: $podcastId, guestIds: $guestIds) {\n      errors {\n        field\n        messages\n      }\n      success\n      podcast {\n        coverPhoto\n        dateAdded\n        description\n        listens\n        podcastId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUpdatePodcast($description: String!, $hostIds: [ID]!, $title: String!, $audio: Upload, $coverPhoto: Upload, $podcastId: ID, $guestIds: [ID]) {\n    createUpdatePodcast(description: $description, hostIds: $hostIds, title: $title, audio: $audio, coverPhoto: $coverPhoto, podcastId: $podcastId, guestIds: $guestIds) {\n      errors {\n        field\n        messages\n      }\n      success\n      podcast {\n        coverPhoto\n        dateAdded\n        description\n        listens\n        podcastId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUpdatePost($title: String!, $abstract: String, $body: String!, $coverPhoto: Upload, $postId: ID) {\n    post: createUpdatePost(title: $title, abstract: $abstract, body: $body, coverPhoto: $coverPhoto, postId: $postId) {\n      errors {\n        field\n        messages\n      }\n      success\n      post {\n        abstract\n        id\n        body\n        coverPhoto\n        postId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUpdatePost($title: String!, $abstract: String, $body: String!, $coverPhoto: Upload, $postId: ID) {\n    post: createUpdatePost(title: $title, abstract: $abstract, body: $body, coverPhoto: $coverPhoto, postId: $postId) {\n      errors {\n        field\n        messages\n      }\n      success\n      post {\n        abstract\n        id\n        body\n        coverPhoto\n        postId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($postId: ID!) {\n    deletePost(postId: $postId) {\n      success\n      errors {\n        field\n        messages\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePost($postId: ID!) {\n    deletePost(postId: $postId) {\n      success\n      errors {\n        field\n        messages\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  mutation IncreasePostViewCount($postId: ID!) {\n    post: increasePostViewCount(postId: $postId) {\n      errors {\n        field\n        messages\n      field\n        messages\n      }\n      success\n      post {\n        postId\n        views\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation IncreasePostViewCount($postId: ID!) {\n    post: increasePostViewCount(postId: $postId) {\n      errors {\n        field\n        messages\n      field\n        messages\n      }\n      success\n      post {\n        postId\n        views\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation IncreasePodcastListens($podcastId: ID!) {\n    podcast: increasePodcastListens(podcastId: $podcastId) {\n      errors {\n        field\n        messages\n      }\n      success\n      podcast {\n        listens\n        podcastId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation IncreasePodcastListens($podcastId: ID!) {\n    podcast: increasePodcastListens(podcastId: $podcastId) {\n      errors {\n        field\n        messages\n      }\n      success\n      podcast {\n        listens\n        podcastId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MostListenedToPodcasts(\n    $after: String, $first: Int,\n    $offset: Int, $before: String,\n    $last: Int, $mostListenedToPodcastsId: Float,\n    $titleIcontains: String, $titleIstartswith: String, $title: String) {\n    podcasts: mostListenedToPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first, last: $last,\n      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,\n      title_Istartswith: $titleIstartswith, title: $title) {\n      edges {\n        node {\n          coverPhoto\n          dateAdded\n          audio\n          description\n          guests {\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n          listens\n          podcastId\n          title\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MostListenedToPodcasts(\n    $after: String, $first: Int,\n    $offset: Int, $before: String,\n    $last: Int, $mostListenedToPodcastsId: Float,\n    $titleIcontains: String, $titleIstartswith: String, $title: String) {\n    podcasts: mostListenedToPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first, last: $last,\n      id: $mostListenedToPodcastsId, title_Icontains: $titleIcontains,\n      title_Istartswith: $titleIstartswith, title: $title) {\n      edges {\n        node {\n          coverPhoto\n          dateAdded\n          audio\n          description\n          guests {\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n            }\n          }\n          listens\n          podcastId\n          title\n          id\n        }\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query AllPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {\n    posts: allPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          dateAdded\n          postId\n          readLength\n          abstract\n          coverPhoto\n          title\n          author {\n            profile {\n              image\n            }\n            fullName\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {\n    posts: allPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          dateAdded\n          postId\n          readLength\n          abstract\n          coverPhoto\n          title\n          author {\n            profile {\n              image\n            }\n            fullName\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPodcastById($podcastId: ID!) {\n    podcast: getPodcastById(podcastId: $podcastId) {\n      audio\n      coverPhoto\n      dateAdded\n      description\n      guests {\n        id\n        guestId\n        image\n        name\n      }\n      hosts {\n        dateAdded\n        id\n        hostId\n        user {\n          fullName\n          email\n          profile {\n            image\n            profileId\n          }\n          id\n        }\n      }\n      title\n      podcastId\n      listens\n    }\n  }\n"): (typeof documents)["\n  query GetPodcastById($podcastId: ID!) {\n    podcast: getPodcastById(podcastId: $podcastId) {\n      audio\n      coverPhoto\n      dateAdded\n      description\n      guests {\n        id\n        guestId\n        image\n        name\n      }\n      hosts {\n        dateAdded\n        id\n        hostId\n        user {\n          fullName\n          email\n          profile {\n            image\n            profileId\n          }\n          id\n        }\n      }\n      title\n      podcastId\n      listens\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPodcasts(\n    $offset: Int, $before: String,\n    $after: String, $first: Int,\n    $last: Int, $id: Float, $title_Icontains: String,\n    $title_Istartswith: String, $title: String\n  ) {\n    podcasts: allPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first,\n      last: $last, id: $id,\n      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,\n      title: $title\n    ) {\n      edges {\n        node {\n          podcastId\n          title\n          description\n          listens\n          audio\n          coverPhoto\n          podcastId\n          guests {\n            guestId\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllPodcasts(\n    $offset: Int, $before: String,\n    $after: String, $first: Int,\n    $last: Int, $id: Float, $title_Icontains: String,\n    $title_Istartswith: String, $title: String\n  ) {\n    podcasts: allPodcasts(\n      offset: $offset, before: $before,\n      after: $after, first: $first,\n      last: $last, id: $id,\n      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,\n      title: $title\n    ) {\n      edges {\n        node {\n          podcastId\n          title\n          description\n          listens\n          audio\n          coverPhoto\n          podcastId\n          guests {\n            guestId\n            name\n          }\n          hosts {\n            hostId\n            user {\n              fullName\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PopularPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {\n    posts: popularPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {\n      edges {\n        cursor\n        node {\n          author {\n            fullName\n            profile {\n              image\n              profileId\n            }\n          }\n          title\n          abstract\n          body\n          readLength\n          dateAdded\n          coverPhoto\n          postId\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query PopularPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {\n    posts: popularPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {\n      edges {\n        cursor\n        node {\n          author {\n            fullName\n            profile {\n              image\n              profileId\n            }\n          }\n          title\n          abstract\n          body\n          readLength\n          dateAdded\n          coverPhoto\n          postId\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostById($postId: ID!) {\n    post: getPostById(postId: $postId) {\n      id\n      author {\n        fullName\n        profile {\n          image\n        }\n      }\n      title\n      abstract\n      body\n      views\n      likes\n      dislikes\n      readLength\n      dateAdded\n      coverPhoto\n      postId\n    }\n  }\n"): (typeof documents)["\n  query GetPostById($postId: ID!) {\n    post: getPostById(postId: $postId) {\n      id\n      author {\n        fullName\n        profile {\n          image\n        }\n      }\n      title\n      abstract\n      body\n      views\n      likes\n      dislikes\n      readLength\n      dateAdded\n      coverPhoto\n      postId\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
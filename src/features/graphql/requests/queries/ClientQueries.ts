import { gql } from "@apollo/client";

export const ALL_PODCASTS = gql`
  query AllPodcasts(
    $offset: Int, $before: String,
    $after: String, $first: Int,
    $last: Int, $id: Float, $title_Icontains: String,
    $title_Istartswith: String, $title: String
  ) {
    podcasts: allPodcasts(
      offset: $offset, before: $before,
      after: $after, first: $first,
      last: $last, id: $id,
      title_Icontains: $title_Icontains, title_Istartswith: $title_Istartswith,
      title: $title
    ) {
      edges {
        node {
          podcastId
          title
          description
          listens
          audio
          coverPhoto
          podcastId
          guests {
            guestId
            name
          }
          hosts {
            hostId
            user {
              fullName
            }
          }
        }
      }
    }
  }
`

export const POPULAR_POSTS = gql`
  query PopularPosts($offset: Int, $before: String, $after: String, $first: Int, $last: Int, $dateAdded: DateTime, $dateAddedIcontains: DateTime, $dateAddedIstartswith: DateTime, $title: String, $titleIcontains: String, $titleIstartswith: String, $bodyIcontains: String, $bodyIstartswith: String, $readLength: Float, $readLengthIcontains: Float, $readLengthIstartswith: Float, $likes: Int, $dislikes: Int) {
    posts: popularPosts(offset: $offset, before: $before, after: $after, first: $first, last: $last, dateAdded: $dateAdded, dateAdded_Icontains: $dateAddedIcontains, dateAdded_Istartswith: $dateAddedIstartswith, title: $title, title_Icontains: $titleIcontains, title_Istartswith: $titleIstartswith, body_Icontains: $bodyIcontains, body_Istartswith: $bodyIstartswith, readLength: $readLength, readLength_Icontains: $readLengthIcontains, readLength_Istartswith: $readLengthIstartswith, likes: $likes, dislikes: $dislikes) {
      edges {
        cursor
        node {
          author {
            fullName
            profile {
              image
              profileId
            }
          }
          title
          abstract
          body
          readLength
          dateAdded
          coverPhoto
          postId
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`
